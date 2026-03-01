"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

    return (
        <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center text-center px-8 py-24">
            {/* Animated gold ring */}
            <div className="relative mb-12">
                <div className="w-32 h-32 rounded-full border-2 border-aged-gold/40 flex items-center justify-center animate-pulse">
                    <div className="w-24 h-24 rounded-full border border-aged-gold/60 flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-aged-gold"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <h1 className="font-cinzel text-5xl md:text-6xl text-aged-gold mb-6 smoke-effect">
                Order Confirmed
            </h1>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-aged-gold to-transparent mb-8" />

            <p className="font-tahoma text-xl text-gray-300 max-w-2xl leading-relaxed mb-4">
                The pack grows.
            </p>
            <p className="font-tahoma text-lg text-gray-400 max-w-xl leading-relaxed mb-12">
                Your order is being processed. A confirmation will be sent to your email.
                The wisdom you seek is on its way.
            </p>

            {sessionId && (
                <p className="font-mono text-sm text-white/20 mb-12">
                    Reference: {sessionId}
                </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/publishing"
                    className="border border-aged-gold text-aged-gold font-tahoma uppercase tracking-widest px-8 py-3 hover:bg-aged-gold hover:text-black transition-all duration-300"
                >
                    Back to The Library
                </Link>
                <Link
                    href="/"
                    className="border border-white/20 text-white/60 font-tahoma uppercase tracking-widest px-8 py-3 hover:border-white/40 hover:text-white transition-all duration-300"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-obsidian flex items-center justify-center">
                    <div className="animate-spin w-8 h-8 border-2 border-aged-gold border-t-transparent rounded-full" />
                </div>
            }
        >
            <SuccessContent />
        </Suspense>
    );
}
