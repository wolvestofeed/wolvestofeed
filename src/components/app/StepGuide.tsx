"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { ExerciseStep } from "@/data/exercises";
import JournalPrompt from "./JournalPrompt";
import { useAudioPlayer } from "./AudioPlayerProvider";

interface StepGuideProps {
    steps: ExerciseStep[];
    exerciseId: string;
    exerciseTitle?: string;
    mode?: "journey" | "rightnow" | null;
    autoGuided?: boolean;
    introFinished?: boolean;
    onComplete?: () => void;
}

export default function StepGuide({ steps, exerciseId, exerciseTitle = "Exercise", mode, autoGuided, introFinished, onComplete }: StepGuideProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);
    const { playTrack, currentTrack, isPlaying, duration, currentTime } = useAudioPlayer();

    // Sequence state for Auto-Guided mode
    const [seqState, setSeqState] = useState<"idle" | "playing-step" | "countdown">("idle");
    const [timeRemaining, setTimeRemaining] = useState(30);
    const DEFAULT_COUNTDOWN = 30;

    const step = steps[currentStep];
    const isRightNow = mode === "rightnow";
    const displayInstruction = (isRightNow && step.rightNowInstruction) || step.instruction;
    const displayPrompt = (isRightNow && step.rightNowPrompt) || step.prompt;
    const displayAudio = isRightNow ? step.rightNowAudio : undefined;

    const isLast = currentStep === steps.length - 1;
    const isFirst = currentStep === 0;

    const goNext = useCallback(() => {
        if (isLast) {
            onComplete?.();
            return;
        }
        setDirection(1);
        setCurrentStep((s) => s + 1);
    }, [isLast, onComplete]);

    const goPrev = useCallback(() => {
        if (isFirst) return;
        setDirection(-1);
        setCurrentStep((s) => s - 1);
    }, [isFirst]);

    // --- AUTO-GUIDED LOGIC ---

    // 1. Kick off sequence when Intro finishes
    useEffect(() => {
        if (autoGuided && introFinished && seqState === "idle" && currentStep === 0) {
            setTimeout(() => setSeqState("playing-step"), 0);
        }
    }, [autoGuided, introFinished, seqState, currentStep]);

    // 2. Play audio and watch for completion
    useEffect(() => {
        const stepTitle = `${exerciseTitle} - Step ${currentStep + 1}`;

        if (autoGuided && seqState === "playing-step") {
            // If there's no audio file at all, skip playing right to the countdown
            if (!displayAudio) {
                setTimeout(() => {
                    setSeqState("countdown");
                    setTimeRemaining(DEFAULT_COUNTDOWN);
                }, 0);
                return;
            }

            // Normal audio play logic
            if (currentTrack?.title !== stepTitle) {
                // Start playing this step's audio
                playTrack({
                    title: stepTitle,
                    subtitle: "Right Now Support",
                    url: displayAudio
                });
            }

            // Check if track ended
            if (currentTrack?.title === stepTitle && !isPlaying && duration > 0 && currentTime >= duration - 0.5) {
                setTimeout(() => {
                    setSeqState("countdown");
                    setTimeRemaining(DEFAULT_COUNTDOWN);
                }, 0);
            }
        }
    }, [autoGuided, seqState, displayAudio, currentTrack, isPlaying, duration, currentTime, currentStep, exerciseTitle, playTrack]);

    // 3. Contemplation timer
    useEffect(() => {
        if (autoGuided && seqState === "countdown") {
            if (timeRemaining <= 0) {
                if (isLast) {
                    onComplete?.();
                } else {
                    setTimeout(() => {
                        goNext();
                        setSeqState("playing-step");
                    }, 0);
                }
            } else {
                const timer = setTimeout(() => setTimeRemaining(t => t - 1), 1000);
                return () => clearTimeout(timer);
            }
        }
    }, [autoGuided, seqState, timeRemaining, isLast, onComplete, goNext]);

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="flex gap-1 mb-8">
                {steps.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${i < currentStep
                            ? "bg-aged-gold"
                            : i === currentStep
                                ? "bg-spirit-blue"
                                : "bg-white/10"
                            }`}
                    />
                ))}
            </div>

            {/* Step counter */}
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-6 text-center">
                Step {currentStep + 1} of {steps.length}
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentStep}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="min-h-[280px]"
                >
                    {/* Instruction */}
                    <div className="mb-6 space-y-4">
                        <h3 className="font-cinzel text-xl md:text-2xl text-white leading-relaxed">
                            {displayInstruction}
                        </h3>

                        {/* Audio Step Play Button for Right Now Mode - Manual Override */}
                        {isRightNow && displayAudio && (!autoGuided || seqState !== "playing-step") && (
                            <button
                                onClick={() => {
                                    if (autoGuided) {
                                        setSeqState("playing-step");
                                    }
                                    playTrack({
                                        title: `${exerciseTitle} - Step ${currentStep + 1}`,
                                        subtitle: "Right Now Support",
                                        url: displayAudio
                                    });
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 hover:bg-white/10 text-white rounded-md text-sm font-mono uppercase tracking-wider transition-colors"
                            >
                                <Play className="w-4 h-4" />
                                {currentTrack?.url === displayAudio ? "Playing Step..." : "Listen to Step"}
                            </button>
                        )}
                    </div>

                    {/* Contemplation Countdown UI */}
                    {autoGuided && seqState === "countdown" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 mb-8 p-5 rounded-xl border border-spirit-blue/30 bg-spirit-blue/5 flex flex-col sm:flex-row items-center justify-between gap-4"
                        >
                            <div className="flex flex-col text-center sm:text-left">
                                <span className="text-base font-cinzel text-spirit-blue mb-1">Contemplation Time</span>
                                <span className="text-sm font-mono text-gray-400">Continuing to next step in {timeRemaining}s...</span>
                            </div>
                            <button
                                onClick={() => setTimeRemaining(0)}
                                className="px-5 py-2 bg-spirit-blue/20 text-spirit-blue hover:bg-spirit-blue/30 border border-spirit-blue/40 rounded text-sm uppercase tracking-wider font-mono transition-colors whitespace-nowrap"
                            >
                                I&apos;m Ready
                            </button>
                        </motion.div>
                    )}

                    {/* Journal prompt */}
                    <JournalPrompt
                        exerciseId={exerciseId}
                        stepIndex={currentStep}
                        prompt={displayPrompt}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <button
                    onClick={goPrev}
                    disabled={isFirst}
                    className={`flex items-center gap-2 px-4 py-2 text-base font-tahoma uppercase tracking-wider rounded transition-all ${isFirst
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                </button>

                <button
                    onClick={goNext}
                    className={`flex items-center gap-2 px-6 py-2 text-base font-tahoma uppercase tracking-wider rounded transition-all ${isLast
                        ? "bg-aged-gold/20 border border-aged-gold text-aged-gold hover:bg-aged-gold/30"
                        : "bg-white/5 border border-white/20 text-white hover:bg-white/10"
                        }`}
                >
                    {isLast ? "Complete" : "Next"}
                    {!isLast && <ChevronRight className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
}
