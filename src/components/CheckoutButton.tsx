"use client";

import { useState } from "react";

interface CheckoutButtonProps {
    priceId: string;
    label?: string;
    className?: string;
}

export default function CheckoutButton({
    priceId,
    label = "Purchase",
    className = "",
}: CheckoutButtonProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ priceId }),
            });

            const data = await res.json();

            if (!res.ok || !data.url) {
                throw new Error(data.error || "Something went wrong");
            }

            window.location.href = data.url;
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Unexpected error";
            setError(message);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2 w-full">
            <button
                onClick={handleCheckout}
                disabled={loading}
                className={`flex items-center justify-center gap-3 px-8 py-3 font-tahoma uppercase tracking-widest transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
            >
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                        <span>Redirecting…</span>
                    </>
                ) : (
                    <>
                        <span>{label}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path
                                fillRule="evenodd"
                                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </>
                )}
            </button>
            {error && (
                <p className="text-red-400 text-xs font-tahoma text-center">{error}</p>
            )}
        </div>
    );
}
