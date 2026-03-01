"use client";

import { useState, useEffect, Suspense } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import StepGuide from "@/components/app/StepGuide";
import { getExerciseById } from "@/data/exercises";
import { getAnimalById } from "@/data/animals";
import { useAppMode } from "@/components/app/ModeProvider";
import { useAudioPlayer } from "@/components/app/AudioPlayerProvider";
import { Play } from "lucide-react";

const edgeBadgeColors: Record<string, string> = {
    spirit: "bg-amber-400/15 text-amber-400 border-amber-400/30",
    career: "bg-fire-orange/15 text-fire-orange border-fire-orange/30",
    body: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
    intimacy: "bg-spirit-blue/15 text-spirit-blue border-spirit-blue/30",
    legacy: "bg-aged-gold/15 text-aged-gold border-aged-gold/30",
    foundation: "bg-white/10 text-white/60 border-white/20",
};

const leverLabels: Record<string, string> = {
    thinking: "🧠 Thinking Lever",
    feeling: "❤️ Feeling Lever",
    body: "🫁 Body Lever",
};

function ExerciseContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [completed, setCompleted] = useState(false);

    const exerciseId = params.id as string;
    const exercise = getExerciseById(exerciseId);
    const modeUrlParam = searchParams.get("mode") as "journey" | "rightnow" | null;

    const { mode: contextMode, setMode: setContextMode } = useAppMode();
    const { playTrack, currentTrack, isPlaying, duration, currentTime } = useAudioPlayer();

    const [autoGuided, setAutoGuided] = useState<boolean | null>(null);
    const [introFinished, setIntroFinished] = useState(false);

    // URL param seeds context on mount only
    useEffect(() => {
        if (modeUrlParam) {
            setContextMode(modeUrlParam);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // only on mount

    const isRightNow = contextMode === "rightnow";

    // Track when the intro finishes in Auto-Guided mode
    useEffect(() => {
        if (
            autoGuided &&
            currentTrack?.title === exercise?.title + " (Intro)" &&
            !isPlaying &&
            duration > 0 &&
            currentTime >= duration - 0.5
        ) {
            setIntroFinished(true);
        }
    }, [autoGuided, currentTrack, isPlaying, duration, currentTime, exercise]);

    const handleSelectGuidedMode = (guided: boolean) => {
        setAutoGuided(guided);
        if (guided && exercise?.rightNowIntroAudio) {
            playTrack({
                title: exercise.title + " (Intro)",
                subtitle: "Right Now Support",
                url: exercise.rightNowIntroAudio!
            });
        } else if (guided) {
            // If there's no intro audio, instantly finish the intro phase
            setIntroFinished(true);
        }
    };

    if (!exercise) {
        return (
            <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-400 font-tahoma text-base mb-4">Exercise not found.</p>
                    <Link href="/app/explore" className="text-aged-gold text-base hover:underline">
                        ← Back to exercises
                    </Link>
                </div>
            </div>
        );
    }

    const animal = getAnimalById(exercise.animal);
    const description = isRightNow ? exercise.rightNowDescription : exercise.description;

    if (completed) {
        return (
            <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-md"
                >
                    <div className="text-5xl mb-6">{animal?.icon || "✦"}</div>
                    <h2 className="font-cinzel text-2xl md:text-3xl text-aged-gold mb-4">
                        {isRightNow ? "You Showed Up" : "Exercise Complete"}
                    </h2>
                    <p className="text-gray-400 font-tahoma text-base leading-relaxed mb-8">
                        {isRightNow
                            ? "You interrupted the spiral. You gave yourself a choice point. That's enough for right now."
                            : "You showed up. You did the work. That's the edge of greatness — not the breakthrough, but the willingness to persist."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => setCompleted(false)}
                            className="flex items-center justify-center gap-2 px-5 py-2 text-base font-tahoma uppercase tracking-wider rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Do Again
                        </button>
                        <button
                            onClick={() => router.push(`/app/explore?mode=${contextMode}`)}
                            className="px-5 py-2 text-base font-tahoma uppercase tracking-wider rounded bg-aged-gold/20 border border-aged-gold text-aged-gold hover:bg-aged-gold/30 transition-all"
                        >
                            Explore More
                        </button>
                    </div>

                    {/* Go Deeper link from Right Now mode */}
                    {isRightNow && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 pt-6 border-t border-white/5"
                        >
                            <p className="text-gray-400 text-sm font-tahoma mb-3">
                                Want to unpack the pattern underneath?
                            </p>
                            <Link
                                href={`/app/exercise/${exercise.id}?mode=journey`}
                                className="inline-flex items-center gap-2 text-aged-gold/70 text-sm font-mono uppercase tracking-widest hover:text-aged-gold transition-colors"
                            >
                                Go deeper in Workbook mode <ArrowRight className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Back link */}
            <Link
                href={`/app/explore?mode=${contextMode}`}
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-400 transition-colors mb-8 font-tahoma uppercase tracking-wider"
            >
                <ArrowLeft className="w-3 h-3" />
                Back
            </Link>

            {/* Exercise header */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-center"
            >
                {/* Mode badge */}
                {contextMode && (
                    <div className={`inline-block text-[10px] font-mono uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border ${isRightNow
                        ? "text-fire-orange/60 border-fire-orange/20 bg-fire-orange/5"
                        : "text-aged-gold/60 border-aged-gold/20 bg-aged-gold/5"
                        }`}>
                        {isRightNow ? "Right Now" : "Workbook"}
                    </div>
                )}

                {/* Animal & edge badge */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    {animal && (
                        <span className="text-2xl">{animal.icon}</span>
                    )}
                    <span
                        className={`text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-mono border ${edgeBadgeColors[exercise.edge] || edgeBadgeColors.foundation
                            }`}
                    >
                        Edge of {exercise.edge}
                    </span>
                </div>

                <h1 className="font-cinzel text-2xl md:text-4xl text-white mb-2">
                    {exercise.title}
                </h1>
                <p className="text-gray-400 text-base font-tahoma mb-4">
                    {isRightNow && exercise.rightNowSubtitle
                        ? exercise.rightNowSubtitle
                        : exercise.subtitle}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                    <span>{leverLabels[exercise.lever] || exercise.lever}</span>
                    <span>•</span>
                    <span>{exercise.duration} min</span>
                    <span>•</span>
                    <span>{exercise.steps.length} steps</span>
                </div>
            </motion.div>

            {/* Description — mode-aware */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`mb-10 p-5 backdrop-blur-sm rounded-xl border ${isRightNow
                    ? "bg-fire-orange/[0.03] border-fire-orange/10"
                    : "bg-black/30 border-white/5"
                    }`}
            >
                <div className="flex flex-col gap-4">
                    <p className="text-gray-400 font-tahoma text-base leading-relaxed">
                        {description}
                    </p>

                    {/* Audio Intro Play Button for Manual Mode */}
                    {isRightNow && autoGuided === false && exercise.rightNowIntroAudio && (
                        <button
                            onClick={() => playTrack({
                                title: exercise.title + " (Intro)",
                                subtitle: "Right Now Support",
                                url: exercise.rightNowIntroAudio!
                            })}
                            className="flex items-center gap-2 self-start px-4 py-2 mt-2 bg-fire-orange/10 border border-fire-orange/30 text-fire-orange hover:bg-fire-orange/20 rounded-md text-sm font-mono uppercase tracking-wider transition-colors"
                        >
                            <Play className="w-4 h-4" />
                            {currentTrack?.url === exercise.rightNowIntroAudio ? "Playing Intro..." : "Listen to Intro"}
                        </button>
                    )}
                </div>
            </motion.div>

            {/* Sub-mode Selection for Right Now */}
            {isRightNow && autoGuided === null && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 p-6 rounded-xl border border-fire-orange/30 bg-fire-orange/5 text-center"
                >
                    <h3 className="font-cinzel text-xl text-white mb-2">How would you like to proceed?</h3>
                    <p className="text-gray-400 text-base font-tahoma mb-6 max-w-md mx-auto">
                        Choose auto-guided to have the steps and reflection timers play automatically, or manual to click through at your own pace.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleSelectGuidedMode(true)}
                            className="px-6 py-3 bg-fire-orange/20 border border-fire-orange/50 text-fire-orange hover:bg-fire-orange/30 rounded text-base font-mono uppercase tracking-wider transition-colors"
                        >
                            Auto-Guided Sequence
                        </button>
                        <button
                            onClick={() => handleSelectGuidedMode(false)}
                            className="px-6 py-3 bg-white/5 border border-white/20 text-white hover:bg-white/10 rounded text-base font-mono uppercase tracking-wider transition-colors"
                        >
                            Manual Steps
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

            {/* Step guide - Only show if not in Right Now mode, OR if a sub-mode is selected */}
            {(!isRightNow || autoGuided !== null) && (
                <StepGuide
                    steps={exercise.steps}
                    exerciseId={exercise.id}
                    exerciseTitle={exercise.title}
                    mode={contextMode}
                    autoGuided={autoGuided || false}
                    introFinished={introFinished}
                    onComplete={() => setCompleted(true)}
                />
            )}
        </div>
    );
}

export default function ExercisePage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-gray-400 font-tahoma text-base">Loading...</div>
                </div>
            }
        >
            <ExerciseContent />
        </Suspense>
    );
}
