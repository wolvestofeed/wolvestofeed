"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { animals } from "@/data/animals";
import { getExercisesByEdge } from "@/data/exercises";

const stages = [
    {
        id: "shadow",
        title: "Shadow Wolf",
        subtitle: "Confronting the raw self",
        description:
            "The shadow wolf represents the parts of you that are untamed, unexamined, and often running the show. Meeting the shadow means sitting in the smoke and naming what haunts you.",
        color: "text-shadow-red",
        borderColor: "border-shadow-red/40",
        glowColor: "rgba(255, 77, 0, 0.15)",
        icon: "🐺",
    },
    {
        id: "edges",
        title: "The Five Edges",
        subtitle: "Mapping your terrain",
        description:
            "Spirit, Career, Body, Intimacy, Legacy — these are the five domains where persistence meets resistance. Each edge carries its own animal medicine and its own tools for transformation.",
        color: "text-aged-gold",
        borderColor: "border-aged-gold/40",
        glowColor: "rgba(212, 175, 55, 0.15)",
        icon: "◈",
    },
    {
        id: "levers",
        title: "Signal • System • Lever",
        subtitle: "Pulling the three levers",
        description:
            "Your reality is a lagging indicator. For each edge, you can pull three levers: Thinking (paradigm shift), Feeling (perspective change), Body (physiological reset). Start where you can.",
        color: "text-spirit-blue",
        borderColor: "border-spirit-blue/40",
        glowColor: "rgba(112, 214, 255, 0.15)",
        icon: "⚡",
    },
    {
        id: "spirit",
        title: "Spirit Wolf",
        subtitle: "Feeding what gives life",
        description:
            "The spirit wolf is fed by discipline, generosity, open-heartedness, and practice without guarantee of payoff. It's choosing meaning over resignation, every day.",
        color: "text-spirit-blue",
        borderColor: "border-spirit-blue/40",
        glowColor: "rgba(112, 214, 255, 0.2)",
        icon: "🔥",
    },
    {
        id: "nondual",
        title: "Non-Dual Being",
        subtitle: "Beyond feeding either wolf",
        description:
            "The destination beyond the duality. Not feeding the spirit wolf while starving the shadow — but integrating both into a whole, persistent human who remains open-hearted regardless of the scoreboard.",
        color: "text-white",
        borderColor: "border-white/30",
        glowColor: "rgba(255, 255, 255, 0.1)",
        icon: "∞",
    },
];

export default function JourneyPage() {
    const [activeStage, setActiveStage] = useState<string | null>(null);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="font-cinzel text-2xl md:text-4xl text-white/90 mb-2">
                    The Journey
                </h1>
                <p className="text-gray-500 text-sm font-tahoma max-w-md mx-auto">
                    From feeding the wolves to finding non-dual being. This is not a straight
                    line — it&apos;s a spiral.
                </p>
            </div>

            {/* Journey path */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-shadow-red/40 via-aged-gold/40 via-spirit-blue/40 to-white/20" />

                {/* Stages */}
                <div className="space-y-2">
                    {stages.map((stage, i) => {
                        const isActive = activeStage === stage.id;
                        return (
                            <motion.div
                                key={stage.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                            >
                                <button
                                    onClick={() =>
                                        setActiveStage(isActive ? null : stage.id)
                                    }
                                    className={`w-full text-left flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl border transition-all duration-500 cursor-pointer group ${isActive
                                            ? `bg-black/40 backdrop-blur-sm ${stage.borderColor}`
                                            : "bg-transparent border-transparent hover:bg-white/[0.02]"
                                        }`}
                                >
                                    {/* Node marker */}
                                    <div
                                        className={`relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center text-xl md:text-2xl transition-all duration-500 ${isActive
                                                ? `${stage.borderColor} bg-black`
                                                : "border-white/10 bg-black/60"
                                            }`}
                                        style={
                                            isActive
                                                ? { boxShadow: `0 0 30px ${stage.glowColor}` }
                                                : undefined
                                        }
                                    >
                                        {stage.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <h3
                                            className={`font-cinzel text-lg md:text-xl transition-colors duration-300 ${isActive ? stage.color : "text-gray-400 group-hover:text-white/70"
                                                }`}
                                        >
                                            {stage.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 font-tahoma uppercase tracking-wider mb-2">
                                            {stage.subtitle}
                                        </p>

                                        {/* Expanded content */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isActive ? "auto" : 0,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 text-sm font-tahoma leading-relaxed mt-3">
                                                {stage.description}
                                            </p>

                                            {/* Animal medicine cards for Edges stage */}
                                            {stage.id === "edges" && (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                                                    {animals.map((animal) => {
                                                        const exerciseCount = getExercisesByEdge(
                                                            animal.edge as "spirit" | "career" | "body" | "intimacy" | "legacy"
                                                        ).length;
                                                        return (
                                                            <Link
                                                                key={animal.id}
                                                                href={`/app/explore?edge=${animal.edge}`}
                                                                className={`flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-black/30 hover:bg-white/5 transition-all text-left`}
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <span className="text-xl">{animal.icon}</span>
                                                                <div>
                                                                    <div className={`text-xs font-cinzel ${animal.color}`}>
                                                                        {animal.name} — {animal.edge}
                                                                    </div>
                                                                    <div className="text-[10px] text-gray-600 font-mono">
                                                                        {exerciseCount} exercises
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Closing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-center mt-16 pt-8 border-t border-white/5"
            >
                <p className="text-gray-600 text-xs font-tahoma italic max-w-md mx-auto leading-relaxed">
                    &ldquo;Not the breakthrough. Not the payoff. Not the arrival. The willingness
                    to keep your heart open, stay generous, remain honest, and persist.&rdquo;
                </p>
            </motion.div>
        </div>
    );
}
