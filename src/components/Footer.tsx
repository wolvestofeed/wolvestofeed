"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
    const pathname = usePathname();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Hide on /app routes (app has its own layout)
    if (pathname.startsWith("/app")) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            // For now, just show confirmation. Can wire to Mailchimp/ConvertKit/etc later.
            setSubmitted(true);
            setEmail("");
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <footer className="w-full py-12 px-8 bg-obsidian border-t border-white/10 mt-auto">
            {/* Email signup row */}
            <div className="max-w-xl mx-auto mb-8">
                <form onSubmit={handleSubmit} className="flex items-center gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Join the fire circle — enter your email"
                        required
                        className="flex-grow bg-transparent border-b border-white/20 focus:border-aged-gold text-white placeholder:text-white/30 font-tahoma text-sm py-2 px-1 outline-none transition-colors"
                    />
                    <button
                        type="submit"
                        className="shrink-0 text-xs font-cinzel uppercase tracking-widest text-aged-gold hover:text-white border border-aged-gold/40 hover:border-aged-gold px-4 py-2 rounded transition-colors"
                    >
                        {submitted ? "✓ Received" : "Subscribe"}
                    </button>
                </form>
            </div>

            {/* Existing footer row — untouched */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Image src="/WTF Pub Mark white.png" alt="WTF Mark White" width={50} height={50} className="object-cover rounded-full" />
                </div>
                <div className="text-sm font-tahoma text-white/50">
                    &copy; {new Date().getFullYear()} Wolves To Feed. All Rights Reserved.
                </div>
                <div className="flex items-center gap-4">
                    <Image src="/WTF Pub Mark black.png" alt="WTF Mark Black" width={50} height={50} className="object-cover rounded-full border border-white/20" />
                </div>
            </div>
        </footer>
    );
}
