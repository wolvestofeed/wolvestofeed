"use client";

import { useState, useEffect } from "react";

interface JournalPromptProps {
    exerciseId: string;
    stepIndex: number;
    prompt?: string;
}

function getStorageKey(exerciseId: string, stepIndex: number) {
    return `wtf-journal-${exerciseId}-${stepIndex}`;
}

export default function JournalPrompt({
    exerciseId,
    stepIndex,
    prompt,
}: JournalPromptProps) {
    const [text, setText] = useState("");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(getStorageKey(exerciseId, stepIndex));
        if (stored) {
            setTimeout(() => setText(stored), 0);
        }
    }, [exerciseId, stepIndex]);

    const handleSave = () => {
        localStorage.setItem(getStorageKey(exerciseId, stepIndex), text);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="w-full mt-4">
            {prompt && (
                <p className="text-gray-400 text-sm font-tahoma mb-3 leading-relaxed italic">
                    {prompt}
                </p>
            )}
            <textarea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setSaved(false);
                }}
                placeholder="Write your reflection here..."
                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white font-tahoma text-sm leading-relaxed placeholder:text-gray-600 focus:border-aged-gold/50 focus:outline-none transition-colors resize-none min-h-[120px]"
            />
            <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">
                    Saved locally on this device
                </span>
                <button
                    onClick={handleSave}
                    className={`px-4 py-1.5 text-xs font-tahoma uppercase tracking-wider rounded transition-all duration-300 ${saved
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-400/30"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                >
                    {saved ? "✓ Saved" : "Save"}
                </button>
            </div>
        </div>
    );
}
