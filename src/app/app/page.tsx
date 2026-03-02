"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { BookOpen, Zap } from "lucide-react";
import BreathingCircle from "@/components/app/BreathingCircle";
import MoodSelector from "@/components/app/MoodSelector";
import { useAppMode } from "@/components/app/ModeProvider";
import { useAudioPlayer } from "@/components/app/AudioPlayerProvider";
import type { Mood } from "@/data/moods";

type Stage = "breathe" | "mode" | "mood";
type AppMode = "journey" | "rightnow";

export default function ChoicePointPage() {
    const [stage, setStage] = useState<Stage>("breathe");
    const [localMode, setLocalMode] = useState<AppMode | null>(null);
    const { setMode: setContextMode } = useAppMode();
    const router = useRouter();
    const { playTrack, clearTrack, currentTrack } = useAudioPlayer();

    // Reset scroll on stage change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [stage]);

    // Keep refs stable for unmount cleanup
    const trackRef = useRef(currentTrack);
    const clearRef = useRef(clearTrack);
    useEffect(() => {
        trackRef.current = currentTrack;
        clearRef.current = clearTrack;
    }, [currentTrack, clearTrack]);

    // Cleanup audio strictly ONLY on true unmount of this page
    useEffect(() => {
        return () => {
            if (trackRef.current?.title === "Choice Point Intro") {
                clearRef.current();
            }
        };
    }, []);

    const triggerIntroAudio = () => {
        // Double check we haven't already transitioned to a new track like an exercise!
        playTrack({
            title: "Choice Point Intro",
            subtitle: "Welcome to the work",
            url: "/app-audio/app-intro.wav"
        }, true); // pass true for "doNotOverride"
    };

    const handleBreathingComplete = () => {
        setStage("mode");
        triggerIntroAudio();
    };

    const handleModeSelect = (selected: AppMode) => {
        setLocalMode(selected);
        setContextMode(selected); // persist to context + localStorage
        if (selected === "journey") {
            router.push("/app/explore?mode=journey");
        } else {
            setStage("mood");
        }
    };

    const handleMoodSelect = (mood: Mood) => {
        router.push(`/app/explore?mood=${mood.id}&mode=rightnow`);
    };

    const handleSkip = () => {
        setStage("mode");
        triggerIntroAudio();
    };

    return (
        <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-start px-6 pt-12 pb-12 w-full">
            <AnimatePresence mode="wait">
                {/* ═══ STAGE 1: BREATHE ═══ */}
                {stage === "breathe" && (
                    <motion.div
                        key="breathe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <div className="text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="font-cinzel text-3xl md:text-5xl text-white/90 mb-3"
                            >
                                Take a breath
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="text-gray-400 text-base font-tahoma"
                            >
                                Now is a choice point.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            <BreathingCircle onComplete={handleBreathingComplete} cycles={3} />
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                            onClick={handleSkip}
                            className="text-gray-400 text-sm font-tahoma uppercase tracking-widest hover:text-gray-400 transition-colors"
                        >
                            Skip to exercises →
                        </motion.button>
                    </motion.div>
                )}

                {/* ═══ STAGE 2: MODE SELECT ═══ */}
                {stage === "mode" && (
                    <motion.div
                        key="mode"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-10 w-full max-w-2xl"
                    >
                        <div className="text-center">
                            <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                                How can your brothers <br />
                                support you right now?
                            </h1>
                            <p className="text-gray-400 text-base font-tahoma max-w-md mx-auto">
                                Two time frames, same tools. Choose what fits this moment.
                            </p>
                        </div>

                        {/* Mode cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-2">
                            {/* Right Now Support */}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                onClick={() => handleModeSelect("rightnow")}
                                className="group relative flex flex-col items-start justify-start text-left p-6 rounded-xl border border-fire-orange/20 bg-fire-orange/5 hover:border-fire-orange/50 hover:bg-fire-orange/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute top-4 right-4">
                                    <Zap className="w-5 h-5 text-fire-orange/40 group-hover:text-fire-orange/70 transition-colors" />
                                </div>
                                <h2 className="font-cinzel text-xl text-fire-orange mb-1">
                                    Firebreak
                                </h2>
                                <p className="text-fire-orange/80 text-xs font-mono uppercase tracking-widest mb-3">
                                    Right Now Support
                                </p>
                                <p className="text-gray-400 text-base font-tahoma leading-relaxed mb-4">
                                    Something just hit. You&apos;re activated, spun up, or shutting down.
                                </p>
                                <p className="text-gray-400 text-sm font-tahoma leading-relaxed">
                                    This space is not for fixing your whole life. It&apos;s for the next few minutes.
                                    Take the breath, name your mood, and let one small practice interrupt the spiral.
                                    We&apos;ll work with three levers—mind, heart, body—to give you just enough room to choose your next move.
                                </p>
                                <div className="mt-4 text-fire-orange/60 text-sm font-mono uppercase tracking-widest group-hover:text-fire-orange/90 transition-colors">
                                    Name what&apos;s happening →
                                </div>
                            </motion.button>

                            {/* Workbook Journey */}
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                onClick={() => handleModeSelect("journey")}
                                className="group relative flex flex-col items-start justify-start text-left p-6 rounded-xl border border-aged-gold/20 bg-aged-gold/5 hover:border-aged-gold/50 hover:bg-aged-gold/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute top-4 right-4">
                                    <BookOpen className="w-5 h-5 text-aged-gold/40 group-hover:text-aged-gold/70 transition-colors" />
                                </div>
                                <h2 className="font-cinzel text-xl text-aged-gold mb-1">
                                    Controlled Burn
                                </h2>
                                <p className="text-aged-gold/80 text-xs font-mono uppercase tracking-widest mb-3">
                                    Workbook Journey
                                </p>
                                <p className="text-gray-400 text-base font-tahoma leading-relaxed mb-4">
                                    Map your edges. Work the domains. Redesign the system.
                                </p>
                                <p className="text-gray-400 text-sm font-tahoma leading-relaxed">
                                    The companion to <em>Edges of Greatness</em> — domain-by-domain exploration
                                    through Spirit, Career, Body, Intimacy, and Legacy. Animal medicine,
                                    Signal-System-Lever, and long-form reflection.
                                </p>
                                <div className="mt-4 text-aged-gold/60 text-sm font-mono uppercase tracking-widest group-hover:text-aged-gold/90 transition-colors">
                                    Begin the work →
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* ═══ STAGE 3: MOOD (Right Now only) ═══ */}
                {stage === "mood" && (
                    <motion.div
                        key="mood"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-6 w-full"
                    >
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-fire-orange/60 text-sm font-mono uppercase tracking-[0.3em] mb-3"
                            >
                                Right Now Support
                            </motion.div>
                            <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                                What are you feeling?
                            </h1>
                            <p className="text-gray-400 text-base font-tahoma max-w-md mx-auto">
                                Name it. That&apos;s the first lever.
                            </p>
                        </div>

                        <MoodSelector onSelect={handleMoodSelect} />

                        <div className="flex flex-col items-center gap-3 mt-4">
                            <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                            <button
                                onClick={() => router.push("/app/explore?mode=rightnow")}
                                className="text-gray-400 text-sm font-tahoma uppercase tracking-widest hover:text-fire-orange transition-colors border border-white/10 px-6 py-2 rounded-lg hover:border-fire-orange/30"
                            >
                                Browse All Exercises
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
