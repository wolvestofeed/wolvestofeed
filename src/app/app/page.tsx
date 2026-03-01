"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { BookOpen, Zap } from "lucide-react";
import BreathingCircle from "@/components/app/BreathingCircle";
import MoodSelector from "@/components/app/MoodSelector";
import { useAppMode } from "@/components/app/ModeProvider";
import type { Mood } from "@/data/moods";

type Stage = "breathe" | "mode" | "mood";
type AppMode = "journey" | "rightnow";

export default function ChoicePointPage() {
    const [stage, setStage] = useState<Stage>("breathe");
    const [localMode, setLocalMode] = useState<AppMode | null>(null);
    const { setMode: setContextMode } = useAppMode();
    const router = useRouter();

    const handleBreathingComplete = () => {
        setStage("mode");
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
    };

    return (
        <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center px-6 py-12">
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
                                Take a breath.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="text-gray-500 text-sm font-tahoma"
                            >
                                You have a choice point.
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
                            className="text-gray-700 text-xs font-tahoma uppercase tracking-widest hover:text-gray-500 transition-colors"
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
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-aged-gold/60 text-xs font-mono uppercase tracking-[0.3em] mb-3"
                            >
                                You are here
                            </motion.div>
                            <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                                What brings you here?
                            </h1>
                            <p className="text-gray-500 text-sm font-tahoma max-w-md mx-auto">
                                Two paths, same tools. Choose what fits this moment.
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
                                className="group relative text-left p-6 rounded-xl border border-fire-orange/20 bg-fire-orange/5 hover:border-fire-orange/50 hover:bg-fire-orange/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute top-4 right-4">
                                    <Zap className="w-5 h-5 text-fire-orange/40 group-hover:text-fire-orange/70 transition-colors" />
                                </div>
                                <h2 className="font-cinzel text-lg text-fire-orange mb-2">
                                    Right Now Support
                                </h2>
                                <p className="text-gray-400 text-sm font-tahoma leading-relaxed mb-4">
                                    Something just hit. You&apos;re activated, spun up, or shutting down.
                                </p>
                                <p className="text-gray-600 text-xs font-tahoma leading-relaxed">
                                    This space is not for fixing your whole life. It&apos;s for the next few minutes.
                                    Take the breath, name your mood, and let one small practice interrupt the spiral.
                                    We&apos;ll work with three levers—mind, heart, body—to give you just enough room to choose your next move.
                                </p>
                                <div className="mt-4 text-fire-orange/60 text-xs font-mono uppercase tracking-widest group-hover:text-fire-orange/90 transition-colors">
                                    Name what&apos;s happening →
                                </div>
                            </motion.button>

                            {/* Workbook Journey */}
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                onClick={() => handleModeSelect("journey")}
                                className="group relative text-left p-6 rounded-xl border border-aged-gold/20 bg-aged-gold/5 hover:border-aged-gold/50 hover:bg-aged-gold/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute top-4 right-4">
                                    <BookOpen className="w-5 h-5 text-aged-gold/40 group-hover:text-aged-gold/70 transition-colors" />
                                </div>
                                <h2 className="font-cinzel text-lg text-aged-gold mb-2">
                                    Workbook Journey
                                </h2>
                                <p className="text-gray-400 text-sm font-tahoma leading-relaxed mb-4">
                                    Map your edges. Work the domains. Redesign the system.
                                </p>
                                <p className="text-gray-600 text-xs font-tahoma leading-relaxed">
                                    The companion to <em>Edges of Greatness</em> — domain-by-domain exploration
                                    through Spirit, Career, Body, Intimacy, and Legacy. Animal medicine,
                                    Signal-System-Lever, and long-form reflection.
                                </p>
                                <div className="mt-4 text-aged-gold/60 text-xs font-mono uppercase tracking-widest group-hover:text-aged-gold/90 transition-colors">
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
                        className="flex flex-col items-center gap-10 w-full"
                    >
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-fire-orange/60 text-xs font-mono uppercase tracking-[0.3em] mb-3"
                            >
                                Right Now Support
                            </motion.div>
                            <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                                What are you feeling?
                            </h1>
                            <p className="text-gray-500 text-sm font-tahoma max-w-md mx-auto">
                                Name it. That&apos;s the first lever.
                            </p>
                        </div>

                        <MoodSelector onSelect={handleMoodSelect} />

                        <div className="flex flex-col items-center gap-3 mt-4">
                            <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                            <button
                                onClick={() => router.push("/app/explore?mode=rightnow")}
                                className="text-gray-500 text-xs font-tahoma uppercase tracking-widest hover:text-fire-orange transition-colors border border-white/10 px-6 py-2 rounded-lg hover:border-fire-orange/30"
                            >
                                Browse All Exercises
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-0 right-0 text-center px-8"
            >
                <p className="text-gray-700 text-xs font-tahoma italic max-w-md mx-auto">
                    &ldquo;The persistent human is not forged on the edge of greatness — they are forged in the falling.&rdquo;
                </p>
            </motion.div>
        </div>
    );
}
