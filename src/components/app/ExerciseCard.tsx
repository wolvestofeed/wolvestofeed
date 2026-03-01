"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Exercise } from "@/data/exercises";
import { getAnimalById } from "@/data/animals";

const edgeColors: Record<string, string> = {
    spirit: "border-amber-400/40 hover:border-amber-400 shadow-[inset_0_0_20px_rgba(251,191,36,0.08)] hover:shadow-[inset_0_0_30px_rgba(251,191,36,0.15)]",
    career: "border-fire-orange/40 hover:border-fire-orange shadow-[inset_0_0_20px_rgba(234,88,12,0.08)] hover:shadow-[inset_0_0_30px_rgba(234,88,12,0.15)]",
    body: "border-emerald-400/40 hover:border-emerald-400 shadow-[inset_0_0_20px_rgba(52,211,153,0.08)] hover:shadow-[inset_0_0_30px_rgba(52,211,153,0.15)]",
    intimacy: "border-spirit-blue/40 hover:border-spirit-blue shadow-[inset_0_0_20px_rgba(96,165,250,0.08)] hover:shadow-[inset_0_0_30px_rgba(96,165,250,0.15)]",
    legacy: "border-aged-gold/40 hover:border-aged-gold shadow-[inset_0_0_20px_rgba(196,160,105,0.08)] hover:shadow-[inset_0_0_30px_rgba(196,160,105,0.15)]",
    foundation: "border-white/20 hover:border-white/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.08)]",
};

const edgeBadgeColors: Record<string, string> = {
    spirit: "bg-amber-400/15 text-amber-400",
    career: "bg-fire-orange/15 text-fire-orange",
    body: "bg-emerald-400/15 text-emerald-400",
    intimacy: "bg-spirit-blue/15 text-spirit-blue",
    legacy: "bg-aged-gold/15 text-aged-gold",
    foundation: "bg-white/10 text-white/60",
};

const leverLabels: Record<string, string> = {
    thinking: "🧠 Thinking",
    feeling: "❤️ Feeling",
    body: "🫁 Body",
};

export default function ExerciseCard({
    exercise,
    index = 0,
    mode = "journey",
}: {
    exercise: Exercise;
    index?: number;
    mode?: "journey" | "rightnow";
}) {
    const animal = getAnimalById(exercise.animal);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.35 }}
        >
            <Link
                href={`/app/exercise/${exercise.id}?mode=${mode}`}
                className={`block p-5 rounded-xl border-2 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] group ${edgeColors[exercise.edge] || edgeColors.foundation
                    }`}
            >
                {/* Top row: animal icon + badges */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                        {animal && <span className="text-lg">{animal.icon}</span>}
                        <span
                            className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-mono ${edgeBadgeColors[exercise.edge] || edgeBadgeColors.foundation
                                }`}
                        >
                            {exercise.edge}
                        </span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wide">
                        {exercise.duration} min
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-lg text-white group-hover:text-aged-gold transition-colors mb-1">
                    {exercise.title}
                </h3>
                <p className="text-gray-500 text-xs font-tahoma mb-3 leading-relaxed">
                    {mode === "rightnow" && exercise.rightNowSubtitle
                        ? exercise.rightNowSubtitle
                        : exercise.subtitle}
                </p>

                {/* Lever badge */}
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                        {leverLabels[exercise.lever] || exercise.lever}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">
                        {exercise.steps.length} steps
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
