"use client";

import { motion } from "framer-motion";
import { moods } from "@/data/moods";
import type { Mood } from "@/data/moods";

export default function MoodSelector({
    onSelect,
}: {
    onSelect: (mood: Mood) => void;
}) {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl text-white/80 text-center mb-2">
                What are you feeling?
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8 font-tahoma">
                No judgment. Name it so you can work with it.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {moods.map((mood, i) => (
                    <motion.button
                        key={mood.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        onClick={() => onSelect(mood)}
                        className={`group relative flex flex-col items-center gap-3 p-5 rounded-xl border bg-black/40 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 cursor-pointer ${mood.color}`}
                    >
                        <span className="text-3xl">{mood.icon}</span>
                        <span className="font-cinzel text-sm tracking-wider uppercase text-white/90">
                            {mood.label}
                        </span>
                        <span className="text-[11px] text-gray-500 font-tahoma leading-snug text-center hidden md:block">
                            {mood.description}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
