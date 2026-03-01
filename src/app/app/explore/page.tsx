"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FilterBar from "@/components/app/FilterBar";
import ExerciseCard from "@/components/app/ExerciseCard";
import { exercises, filterExercises } from "@/data/exercises";
import { getMoodById } from "@/data/moods";
import { useAppMode } from "@/components/app/ModeProvider";
import type { EdgeDomain, Lever } from "@/data/exercises";

function ExploreContent() {
    const searchParams = useSearchParams();
    const moodParam = searchParams.get("mood");
    const edgeParam = searchParams.get("edge") as EdgeDomain | null;
    const leverParam = searchParams.get("lever") as Lever | null;
    const modeUrlParam = searchParams.get("mode") as "journey" | "rightnow" | null;

    const { mode: contextMode, setMode: setContextMode } = useAppMode();

    // Mood is now a clearable state variable, seeded from the URL
    const [activeMood, setActiveMood] = useState<string | null>(moodParam);
    const activeMoodData = activeMood ? getMoodById(activeMood) : null;

    // URL param seeds context on mount only
    useEffect(() => {
        if (modeUrlParam) {
            setContextMode(modeUrlParam);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // only on mount

    const isRightNow = contextMode === "rightnow";

    const [selectedEdge, setSelectedEdge] = useState<EdgeDomain | null>(
        edgeParam ?? null
    );
    const [selectedLever, setSelectedLever] = useState<Lever | null>(
        leverParam ?? null
    );

    // Clear mood filter when edge or lever filters change
    const handleEdgeChange = (edge: EdgeDomain | null) => {
        setSelectedEdge(edge);
        if (activeMood) setActiveMood(null);
    };

    const handleLeverChange = (lever: Lever | null) => {
        setSelectedLever(lever);
        if (activeMood) setActiveMood(null);
    };

    const filteredExercises = useMemo(() => {
        let result = filterExercises({
            edge: selectedEdge ?? undefined,
            lever: selectedLever ?? undefined,
            mood: activeMood ?? undefined,
        });
        return result;
    }, [selectedEdge, selectedLever, activeMood]);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8 text-center">
                {/* Mode badge */}
                {contextMode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`inline-block text-xs font-mono uppercase tracking-[0.3em] mb-3 px-3 py-1 rounded-full border ${isRightNow
                            ? "text-fire-orange/70 border-fire-orange/20 bg-fire-orange/5"
                            : "text-aged-gold/70 border-aged-gold/20 bg-aged-gold/5"
                            }`}
                    >
                        {isRightNow ? "Right Now Support" : "Workbook Journey"}
                    </motion.div>
                )}

                <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                    {isRightNow ? "What Can Help Right Now" : "Explore Exercises"}
                </h1>

                {activeMoodData ? (
                    <p className="text-sm font-tahoma text-gray-400">
                        {isRightNow ? "Tools for when you\u0027re feeling " : "Showing exercises for feeling "}
                        <span className={activeMoodData.color.split(" ")[1]}>
                            {activeMoodData.icon} {activeMoodData.label}
                        </span>
                    </p>
                ) : (
                    <p className="text-sm font-tahoma text-gray-500">
                        {isRightNow
                            ? "One small practice to interrupt the spiral"
                            : "Browse all tools from the Edges of Greatness framework"}
                    </p>
                )}
            </div>

            {/* Filters */}
            <div className="mb-8 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/5">
                <FilterBar
                    selectedEdge={selectedEdge}
                    selectedLever={selectedLever}
                    selectedMood={activeMood}
                    onEdgeChange={handleEdgeChange}
                    onLeverChange={handleLeverChange}
                    onMoodChange={setActiveMood}
                />
            </div>

            {/* Results count */}
            <div className="text-[10px] text-gray-600 uppercase tracking-widest font-mono mb-4 px-1">
                {filteredExercises.length} exercise{filteredExercises.length !== 1 ? "s" : ""}
            </div>

            {/* Exercise grid */}
            {filteredExercises.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredExercises.map((exercise, i) => (
                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                            index={i}
                            mode={contextMode}
                        />
                    ))}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                >
                    <p className="text-gray-500 font-tahoma text-sm">
                        No exercises match these filters. Try broadening your selection.
                    </p>
                </motion.div>
            )}

            {/* Cross-mode link */}
            {isRightNow && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent mx-auto mb-4" />
                    <p className="text-gray-600 text-xs font-tahoma mb-3">
                        Ready to go deeper?
                    </p>
                    <a
                        href="/app/explore?mode=journey"
                        className="inline-flex items-center gap-2 text-aged-gold/70 text-xs font-mono uppercase tracking-widest hover:text-aged-gold transition-colors border border-aged-gold/20 px-5 py-2 rounded-lg hover:border-aged-gold/40"
                    >
                        Workbook Journey <ArrowRight className="w-3 h-3" />
                    </a>
                </motion.div>
            )}
        </div>
    );
}

export default function ExplorePage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-gray-600 font-tahoma text-sm">Loading...</div>
                </div>
            }
        >
            <ExploreContent />
        </Suspense>
    );
}
