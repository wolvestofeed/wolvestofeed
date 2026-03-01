"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

type AppMode = "journey" | "rightnow";

interface ModeContextType {
    mode: AppMode;
    setMode: (m: AppMode) => void;
}

const ModeContext = createContext<ModeContextType>({
    mode: "journey",
    setMode: () => { },
});

export function useAppMode() {
    return useContext(ModeContext);
}

export default function ModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setModeState] = useState<AppMode>("journey");
    const [loaded, setLoaded] = useState(false);

    // Hydrate from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("choicepoint-mode");
        if (stored === "rightnow" || stored === "journey") {
            setTimeout(() => setModeState(stored as AppMode), 0);
        }
        setTimeout(() => setLoaded(true), 0);
    }, []);

    const setMode = useCallback((m: AppMode) => {
        setModeState(m);
        localStorage.setItem("choicepoint-mode", m);
    }, []);

    // Don't render children until hydrated to avoid flash
    if (!loaded) return null;

    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
}
