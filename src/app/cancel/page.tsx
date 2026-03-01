import Link from "next/link";

export default function CancelPage() {
    return (
        <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center text-center px-8 py-24">
            {/* Icon */}
            <div className="relative mb-12">
                <div className="w-32 h-32 rounded-full border-2 border-white/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-white/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <h1 className="font-cinzel text-5xl md:text-6xl text-white mb-6">
                No Worries
            </h1>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

            <p className="font-tahoma text-xl text-gray-300 max-w-2xl leading-relaxed mb-4">
                The forge will be here when you&apos;re ready.
            </p>
            <p className="font-tahoma text-lg text-gray-400 max-w-xl leading-relaxed mb-12">
                Your checkout was cancelled and no payment was taken. Come back whenever
                the time is right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/publishing"
                    className="bg-aged-gold text-black font-tahoma uppercase tracking-widest px-8 py-3 hover:bg-yellow-500 transition-all duration-300"
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
