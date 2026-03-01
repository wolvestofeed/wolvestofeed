"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

type Phase = "inhale" | "hold" | "exhale" | "rest";

const PHASES: { phase: Phase; label: string; duration: number }[] = [
    { phase: "inhale", label: "Breathe In", duration: 4 },
    { phase: "hold", label: "Hold", duration: 4 },
    { phase: "exhale", label: "Breathe Out", duration: 6 },
    { phase: "rest", label: "Rest", duration: 2 },
];

export default function BreathingCircle({
    onComplete,
    cycles = 3,
}: {
    onComplete?: () => void;
    cycles?: number;
}) {
    const [currentPhase, setCurrentPhase] = useState(0);
    const [cycleCount, setCycleCount] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(PHASES[0].duration);

    const phase = PHASES[currentPhase];

    const advancePhase = useCallback(() => {
        const nextPhase = (currentPhase + 1) % PHASES.length;
        if (nextPhase === 0) {
            const nextCycle = cycleCount + 1;
            if (nextCycle >= cycles) {
                setIsActive(false);
                onComplete?.();
                return;
            }
            setCycleCount(nextCycle);
        }
        setCurrentPhase(nextPhase);
        setSecondsLeft(PHASES[nextPhase].duration);
    }, [currentPhase, cycleCount, cycles, onComplete]);

    useEffect(() => {
        if (!isActive) return;
        const timer = setInterval(() => {
            setSecondsLeft((s) => {
                if (s <= 1) {
                    advancePhase();
                    return 0;
                }
                return s - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isActive, advancePhase]);

    const circleScale =
        phase.phase === "inhale"
            ? 1.4
            : phase.phase === "exhale"
                ? 0.8
                : phase.phase === "hold"
                    ? 1.4
                    : 0.8;

    const glowColor =
        phase.phase === "inhale"
            ? "rgba(112, 214, 255, 0.4)"
            : phase.phase === "hold"
                ? "rgba(212, 175, 55, 0.3)"
                : phase.phase === "exhale"
                    ? "rgba(226, 88, 34, 0.3)"
                    : "rgba(255, 255, 255, 0.1)";

    if (!isActive) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-6"
            >
                <div className="text-aged-gold font-cinzel text-2xl">You are here.</div>
                <p className="text-gray-400 text-sm font-tahoma">
                    {cycles} cycles complete. You have a choice point now.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {/* Breathing circle */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                {/* Outer glow ring */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                        scale: circleScale,
                        boxShadow: `0 0 60px 20px ${glowColor}`,
                    }}
                    transition={{
                        duration: phase.duration,
                        ease: "easeInOut",
                    }}
                    style={{
                        border: "1px solid rgba(255,255,255,0.1)",
                    }}
                />
                {/* Inner circle */}
                <motion.div
                    className="absolute w-32 h-32 md:w-44 md:h-44 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm"
                    animate={{
                        scale: circleScale,
                    }}
                    transition={{
                        duration: phase.duration,
                        ease: "easeInOut",
                    }}
                />
                {/* Center text */}
                <div className="relative z-10 text-center">
                    <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-cinzel text-xl md:text-2xl text-white"
                    >
                        {phase.label}
                    </motion.div>
                    <div className="text-white/40 text-sm mt-1 font-mono">{secondsLeft}</div>
                </div>
            </div>

            {/* Cycle indicator */}
            <div className="flex gap-2">
                {Array.from({ length: cycles }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors duration-500 ${i < cycleCount
                                ? "bg-aged-gold"
                                : i === cycleCount
                                    ? "bg-spirit-blue"
                                    : "bg-white/20"
                            }`}
                    />
                ))}
            </div>

            <p className="text-gray-500 text-xs uppercase tracking-widest font-tahoma">
                Cycle {cycleCount + 1} of {cycles}
            </p>
        </div>
    );
}
