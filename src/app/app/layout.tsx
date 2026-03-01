"use client";

import Link from "next/link";
import { Wind, Home, Zap, BookOpen } from "lucide-react";
import ModeProvider, { useAppMode } from "@/components/app/ModeProvider";

function ModeIndicator() {
    const { mode, setMode } = useAppMode();
    const isRightNow = mode === "rightnow";

    return (
        <div
            className={`fixed top-14 left-0 right-0 z-40 transition-colors duration-500 ${isRightNow
                    ? "bg-fire-orange/10 border-b border-fire-orange/20"
                    : "bg-aged-gold/[0.06] border-b border-aged-gold/10"
                }`}
        >
            <div className="max-w-4xl mx-auto px-4 h-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {isRightNow ? (
                        <Zap className="w-3 h-3 text-fire-orange/70" />
                    ) : (
                        <BookOpen className="w-3 h-3 text-aged-gold/60" />
                    )}
                    <span
                        className={`text-[10px] font-mono uppercase tracking-[0.2em] ${isRightNow ? "text-fire-orange/70" : "text-aged-gold/50"
                            }`}
                    >
                        {isRightNow ? "Right Now Support" : "Workbook Journey"}
                    </span>
                </div>

                {/* Switch mode button */}
                <button
                    onClick={() => setMode(isRightNow ? "journey" : "rightnow")}
                    className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border transition-all ${isRightNow
                            ? "text-aged-gold/50 border-aged-gold/20 hover:text-aged-gold hover:border-aged-gold/40"
                            : "text-fire-orange/50 border-fire-orange/20 hover:text-fire-orange hover:border-fire-orange/40"
                        }`}
                >
                    Switch to {isRightNow ? "Workbook" : "Right Now"}
                </button>
            </div>
        </div>
    );
}

function AppNav() {
    const { mode } = useAppMode();
    const modeParam = `?mode=${mode}`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
            <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
                <Link
                    href="/app"
                    className="font-cinzel text-sm text-aged-gold/80 hover:text-aged-gold transition-colors tracking-widest uppercase"
                >
                    Choice Point
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href={`/app/explore${modeParam}`}
                        className="text-[11px] text-gray-500 hover:text-white/70 transition-colors uppercase tracking-wider font-tahoma"
                    >
                        Explore
                    </Link>
                    <Link
                        href={`/app/journey${modeParam}`}
                        className="text-[11px] text-gray-500 hover:text-white/70 transition-colors uppercase tracking-wider font-tahoma"
                    >
                        Journey
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-white/50 transition-colors"
                        title="Back to main site"
                    >
                        <Home className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <ModeProvider>
            <div className="min-h-screen bg-obsidian text-white relative overflow-hidden">
                {/* Subtle background texture */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-aged-gold/[0.02] rounded-full blur-[200px]" />
                </div>

                {/* Minimal top bar */}
                <AppNav />

                {/* Persistent mode indicator */}
                <ModeIndicator />

                {/* Page content — extra top padding for nav (56px) + mode strip (32px) */}
                <main className="relative z-10 pt-[86px] min-h-screen">{children}</main>

                {/* Breathing shortcut - fixed bottom right */}
                <Link
                    href="/app"
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-spirit-blue/50 transition-all group"
                    title="Breathe"
                >
                    <Wind className="w-5 h-5 text-gray-500 group-hover:text-spirit-blue transition-colors" />
                </Link>
            </div>
        </ModeProvider>
    );
}
