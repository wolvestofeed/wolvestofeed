"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ExerciseStep } from "@/data/exercises";
import JournalPrompt from "./JournalPrompt";

interface StepGuideProps {
    steps: ExerciseStep[];
    exerciseId: string;
    mode?: "journey" | "rightnow" | null;
    onComplete?: () => void;
}

export default function StepGuide({ steps, exerciseId, mode, onComplete }: StepGuideProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);

    const step = steps[currentStep];
    const isRightNow = mode === "rightnow";
    const displayInstruction = (isRightNow && step.rightNowInstruction) || step.instruction;
    const displayPrompt = (isRightNow && step.rightNowPrompt) || step.prompt;
    const isLast = currentStep === steps.length - 1;
    const isFirst = currentStep === 0;

    const goNext = () => {
        if (isLast) {
            onComplete?.();
            return;
        }
        setDirection(1);
        setCurrentStep((s) => s + 1);
    };

    const goPrev = () => {
        if (isFirst) return;
        setDirection(-1);
        setCurrentStep((s) => s - 1);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="flex gap-1 mb-8">
                {steps.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${i < currentStep
                            ? "bg-aged-gold"
                            : i === currentStep
                                ? "bg-spirit-blue"
                                : "bg-white/10"
                            }`}
                    />
                ))}
            </div>

            {/* Step counter */}
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-6 text-center">
                Step {currentStep + 1} of {steps.length}
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentStep}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="min-h-[280px]"
                >
                    {/* Instruction */}
                    <h3 className="font-cinzel text-xl md:text-2xl text-white leading-relaxed mb-6">
                        {displayInstruction}
                    </h3>

                    {/* Journal prompt */}
                    <JournalPrompt
                        exerciseId={exerciseId}
                        stepIndex={currentStep}
                        prompt={displayPrompt}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <button
                    onClick={goPrev}
                    disabled={isFirst}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-tahoma uppercase tracking-wider rounded transition-all ${isFirst
                        ? "text-gray-700 cursor-not-allowed"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                </button>

                <button
                    onClick={goNext}
                    className={`flex items-center gap-2 px-6 py-2 text-sm font-tahoma uppercase tracking-wider rounded transition-all ${isLast
                        ? "bg-aged-gold/20 border border-aged-gold text-aged-gold hover:bg-aged-gold/30"
                        : "bg-white/5 border border-white/20 text-white hover:bg-white/10"
                        }`}
                >
                    {isLast ? "Complete" : "Next"}
                    {!isLast && <ChevronRight className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
}
