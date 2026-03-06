"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useAppMode } from "@/components/app/ModeProvider";
import type { CrisisExercise, StressLevel } from "@/lib/crisis";
import type { CrisisSequenceResult } from "@/lib/crisis";

// The API response includes a disclaimer field not in the base type
interface CoachApiResponse extends CrisisSequenceResult {
    disclaimer?: string;
}

const edgeBadgeColors: Record<string, string> = {
    spirit: "bg-amber-400/15 text-amber-400 border-amber-400/30",
    career: "bg-fire-orange/15 text-fire-orange border-fire-orange/30",
    body: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
    intimacy: "bg-spirit-blue/15 text-spirit-blue border-spirit-blue/30",
    legacy: "bg-aged-gold/15 text-aged-gold border-aged-gold/30",
    foundation: "bg-white/10 text-white/60 border-white/20",
};

const leverLabels: Record<string, string> = {
    thinking: "🧠 Thinking",
    feeling: "❤️ Feeling",
    body: "🫁 Body",
};

const stressOptions: { level: StressLevel; label: string; description: string }[] = [
    { level: "low", label: "Manageable", description: "I can think clearly" },
    { level: "moderate", label: "Elevated", description: "It's hard to focus" },
    { level: "high", label: "Overwhelmed", description: "I can barely function" },
];

function CoachContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { setMode } = useAppMode();

    const moodParam = searchParams.get("mood");

    const [stressLevel, setStressLevel] = useState<StressLevel | null>(null);
    const [result, setResult] = useState<CoachApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Set mode to rightnow on mount
    useEffect(() => {
        setMode("rightnow");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Fetch coaching sequence when stress level is selected
    useEffect(() => {
        if (!moodParam || !stressLevel) return;

        const fetchSequence = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("/api/crisis", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mood: moodParam, stressLevel }),
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || "Failed to get coaching sequence");
                }
                const data = await res.json();
                setResult(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchSequence();
    }, [moodParam, stressLevel]);

    if (!moodParam) {
        return (
            <div className="min-h-[calc(100vh-5.5rem)] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-400 font-tahoma text-base mb-4">No mood selected.</p>
                    <Link href="/app" className="text-fire-orange text-base hover:underline">
                        ← Start at the beginning
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Back link */}
            <Link
                href="/app"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-400 transition-colors mb-8 font-tahoma uppercase tracking-wider"
            >
                <ArrowLeft className="w-3 h-3" />
                Back
            </Link>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-center"
            >
                <div className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border text-fire-orange/60 border-fire-orange/20 bg-fire-orange/5">
                    Coached Sequence
                </div>

                {result ? (
                    <>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-2xl">{result.meta.moodIcon}</span>
                            <span className="text-fire-orange/70 font-mono text-sm uppercase tracking-widest">
                                {result.meta.moodLabel}
                            </span>
                        </div>
                        <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                            Your Coaching Sequence
                        </h1>
                        <p className="text-gray-400 text-base font-tahoma max-w-md mx-auto">
                            {result.meta.returned} exercises selected from {result.meta.totalMatches} matches for what you&apos;re feeling.
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                            One more thing
                        </h1>
                        <p className="text-gray-400 text-base font-tahoma max-w-md mx-auto">
                            How activated are you right now? This helps the system pick the right intensity.
                        </p>
                    </>
                )}
            </motion.div>

            {/* Stress Level Selector */}
            <AnimatePresence mode="wait">
                {!stressLevel && (
                    <motion.div
                        key="stress"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
                    >
                        {stressOptions.map((opt, i) => (
                            <motion.button
                                key={opt.level}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                onClick={() => setStressLevel(opt.level)}
                                className={`group flex flex-col items-center gap-2 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${opt.level === "high"
                                    ? "border-fire-orange/30 bg-fire-orange/5 hover:border-fire-orange/60 hover:bg-fire-orange/10"
                                    : opt.level === "moderate"
                                        ? "border-amber-400/20 bg-amber-400/5 hover:border-amber-400/40 hover:bg-amber-400/10"
                                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/5"
                                    }`}
                            >
                                <span className={`font-cinzel text-lg ${opt.level === "high" ? "text-fire-orange" :
                                    opt.level === "moderate" ? "text-amber-400" : "text-white/80"
                                    }`}>
                                    {opt.label}
                                </span>
                                <span className="text-gray-400 text-sm font-tahoma">
                                    {opt.description}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading */}
            {loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-16"
                >
                    <Loader2 className="w-8 h-8 text-fire-orange/60 animate-spin" />
                    <p className="text-gray-400 font-tahoma text-base">
                        Reading your signal...
                    </p>
                </motion.div>
            )}

            {/* Error */}
            {error && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                >
                    <p className="text-red-400/80 font-tahoma text-base mb-4">{error}</p>
                    <button
                        onClick={() => setStressLevel(null)}
                        className="text-fire-orange text-sm hover:underline"
                    >
                        Try again
                    </button>
                </motion.div>
            )}

            {/* Results */}
            {result && !loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {result.sequence.map((exercise: CrisisExercise, i: number) => (
                        <motion.div
                            key={exercise.exerciseId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            <button
                                onClick={() => router.push(`/app/exercise/${exercise.exerciseId}?mode=rightnow`)}
                                className="w-full text-left group"
                            >
                                <div className="relative p-6 rounded-xl border border-fire-orange/10 bg-fire-orange/[0.03] hover:border-fire-orange/30 hover:bg-fire-orange/[0.06] transition-all duration-300">
                                    {/* Rank badge */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-fire-orange/10 border border-fire-orange/20 flex items-center justify-center">
                                        <span className="text-fire-orange/80 text-sm font-mono font-bold">{exercise.rank}</span>
                                    </div>

                                    {/* Animal + edge */}
                                    <div className="flex items-center gap-3 mb-3">
                                        {exercise.animal && (
                                            <span className="text-xl">{exercise.animal.icon}</span>
                                        )}
                                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono border ${edgeBadgeColors[exercise.edge] || edgeBadgeColors.foundation}`}>
                                            {exercise.edge}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                                            {leverLabels[exercise.lever] || exercise.lever}
                                        </span>
                                    </div>

                                    {/* Title + subtitle */}
                                    <h3 className="font-cinzel text-lg text-white/90 mb-1 group-hover:text-fire-orange/90 transition-colors">
                                        {exercise.title}
                                    </h3>
                                    <p className="text-fire-orange/60 text-xs font-mono uppercase tracking-widest mb-3">
                                        {exercise.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm font-tahoma leading-relaxed mb-4 line-clamp-3">
                                        {exercise.description}
                                    </p>

                                    {/* Meta row */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                                            <span>{exercise.durationMinutes} min</span>
                                            <span>•</span>
                                            <span>{exercise.steps.length} steps</span>
                                            {exercise.introAudio && exercise.introAudio !== "/app-audio/app-audio-holder.wav" && (
                                                <>
                                                    <span>•</span>
                                                    <span className="text-fire-orange/50">🎧 Audio</span>
                                                </>
                                            )}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-fire-orange/30 group-hover:text-fire-orange/70 transition-colors" />
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    ))}

                    {/* Disclaimer */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-center text-[10px] text-gray-400/50 font-tahoma mt-8 max-w-md mx-auto leading-relaxed"
                    >
                        {result.disclaimer}
                    </motion.p>

                    {/* Browse link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-6"
                    >
                        <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent mx-auto mb-4" />
                        <Link
                            href={`/app/explore?mood=${moodParam}&mode=rightnow`}
                            className="inline-flex items-center gap-2 text-gray-400 text-sm font-tahoma uppercase tracking-widest hover:text-fire-orange transition-colors border border-white/10 px-6 py-2 rounded-lg hover:border-fire-orange/30"
                        >
                            Browse all exercises instead
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

export default function CoachPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-gray-400 font-tahoma text-base">Loading...</div>
                </div>
            }
        >
            <CoachContent />
        </Suspense>
    );
}
