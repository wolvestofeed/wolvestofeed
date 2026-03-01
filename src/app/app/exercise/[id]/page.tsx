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

    // URL param seeds context on mount only
    useEffect(() => {
        if (modeUrlParam) {
            setContextMode(modeUrlParam);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // only on mount

    const isRightNow = contextMode === "rightnow";

    if (!exercise) {
        return (
            <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 font-tahoma text-sm mb-4">Exercise not found.</p>
                    <Link href="/app/explore" className="text-aged-gold text-sm hover:underline">
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
                    <p className="text-gray-400 font-tahoma text-sm leading-relaxed mb-8">
                        {isRightNow
                            ? "You interrupted the spiral. You gave yourself a choice point. That's enough for right now."
                            : "You showed up. You did the work. That's the edge of greatness — not the breakthrough, but the willingness to persist."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => setCompleted(false)}
                            className="flex items-center justify-center gap-2 px-5 py-2 text-sm font-tahoma uppercase tracking-wider rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Do Again
                        </button>
                        <button
                            onClick={() => router.push(`/app/explore?mode=${contextMode}`)}
                            className="px-5 py-2 text-sm font-tahoma uppercase tracking-wider rounded bg-aged-gold/20 border border-aged-gold text-aged-gold hover:bg-aged-gold/30 transition-all"
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
                            <p className="text-gray-600 text-xs font-tahoma mb-3">
                                Want to unpack the pattern underneath?
                            </p>
                            <Link
                                href={`/app/exercise/${exercise.id}?mode=journey`}
                                className="inline-flex items-center gap-2 text-aged-gold/70 text-xs font-mono uppercase tracking-widest hover:text-aged-gold transition-colors"
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
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors mb-8 font-tahoma uppercase tracking-wider"
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
                <p className="text-gray-500 text-sm font-tahoma mb-4">
                    {isRightNow && exercise.rightNowSubtitle
                        ? exercise.rightNowSubtitle
                        : exercise.subtitle}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-center gap-4 text-[10px] text-gray-600 font-mono uppercase tracking-wider">
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
                <p className="text-gray-400 font-tahoma text-sm leading-relaxed">
                    {description}
                </p>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

            {/* Step guide */}
            <StepGuide
                steps={exercise.steps}
                exerciseId={exercise.id}
                mode={contextMode}
                onComplete={() => setCompleted(true)}
            />
        </div>
    );
}

export default function ExercisePage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-gray-600 font-tahoma text-sm">Loading...</div>
                </div>
            }
        >
            <ExerciseContent />
        </Suspense>
    );
}
