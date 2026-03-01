"use client";

import { motion } from "framer-motion";
import type { EdgeDomain, Lever } from "@/data/exercises";
import { moods } from "@/data/moods";

const edges: { id: EdgeDomain; label: string; icon: string }[] = [
    { id: "foundation", label: "All", icon: "◈" },
    { id: "spirit", label: "Spirit", icon: "🔥" },
    { id: "career", label: "Career", icon: "🕷️" },
    { id: "body", label: "Body", icon: "🦋" },
    { id: "intimacy", label: "Intimacy", icon: "🐺" },
    { id: "legacy", label: "Legacy", icon: "🦅" },
];

const levers: { id: Lever | "all"; label: string; icon: string }[] = [
    { id: "all", label: "All Levers", icon: "⚡" },
    { id: "thinking", label: "Thinking", icon: "🧠" },
    { id: "feeling", label: "Feeling", icon: "❤️" },
    { id: "body", label: "Body", icon: "🫁" },
];

interface FilterBarProps {
    selectedEdge?: EdgeDomain | null;
    selectedLever?: Lever | null;
    selectedMood?: string | null;
    onEdgeChange: (edge: EdgeDomain | null) => void;
    onLeverChange: (lever: Lever | null) => void;
    onMoodChange: (mood: string | null) => void;
}

export default function FilterBar({
    selectedEdge,
    selectedLever,
    selectedMood,
    onEdgeChange,
    onLeverChange,
    onMoodChange,
}: FilterBarProps) {
    return (
        <div className="w-full space-y-4">
            {/* Edge Domain Filter */}
            <div>
                <h2 className="text-base md:text-lg font-cinzel font-bold text-aged-gold tracking-wide mb-3 px-1">
                    Edge Domain
                </h2>
                <div className="flex flex-wrap gap-2">
                    {edges.map((edge) => {
                        const isActive =
                            edge.id === "foundation"
                                ? !selectedEdge
                                : selectedEdge === edge.id;
                        return (
                            <button
                                key={edge.id}
                                onClick={() =>
                                    onEdgeChange(edge.id === "foundation" ? null : edge.id)
                                }
                                className={`px-3 py-1.5 rounded-lg text-sm font-tahoma uppercase tracking-wider transition-all duration-200 border ${isActive
                                    ? "bg-white/10 border-white/30 text-white"
                                    : "bg-transparent border-white/10 text-gray-400 hover:text-white/70 hover:border-white/20"
                                    }`}
                            >
                                <span className="mr-1.5">{edge.icon}</span>
                                {edge.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Lever Filter */}
            <div>
                <h2 className="text-base md:text-lg font-cinzel font-bold text-aged-gold tracking-wide mb-3 px-1">
                    Lever
                </h2>
                <div className="flex flex-wrap gap-2">
                    {levers.map((lever) => {
                        const isActive =
                            lever.id === "all" ? !selectedLever : selectedLever === lever.id;
                        return (
                            <button
                                key={lever.id}
                                onClick={() =>
                                    onLeverChange(lever.id === "all" ? null : (lever.id as Lever))
                                }
                                className={`px-3 py-1.5 rounded-lg text-sm font-tahoma uppercase tracking-wider transition-all duration-200 border ${isActive
                                    ? "bg-white/10 border-white/30 text-white"
                                    : "bg-transparent border-white/10 text-gray-400 hover:text-white/70 hover:border-white/20"
                                    }`}
                            >
                                <span className="mr-1.5">{lever.icon}</span>
                                {lever.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Mood Filter */}
            <div>
                <h2 className="text-base md:text-lg font-cinzel font-bold text-aged-gold tracking-wide mb-3 px-1">
                    Mood
                </h2>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onMoodChange(null)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-tahoma uppercase tracking-wider transition-all duration-200 border ${!selectedMood
                            ? "bg-white/10 border-white/30 text-white"
                            : "bg-transparent border-white/10 text-gray-400 hover:text-white/70 hover:border-white/20"
                            }`}
                    >
                        <span className="mr-1.5">◈</span>
                        All Moods
                    </button>
                    {moods.map((mood) => {
                        const isActive = selectedMood === mood.id;
                        return (
                            <button
                                key={mood.id}
                                onClick={() => onMoodChange(mood.id)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-tahoma uppercase tracking-wider transition-all duration-200 border ${isActive
                                    ? "bg-white/10 border-white/30 text-white"
                                    : "bg-transparent border-white/10 text-gray-400 hover:text-white/70 hover:border-white/20"
                                    }`}
                            >
                                <span className="mr-1.5">{mood.icon}</span>
                                {mood.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
