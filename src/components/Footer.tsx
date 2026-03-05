"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
                        className="flex-grow bg-transparent border-b border-white/20 focus:border-aged-gold text-white placeholder:text-white/30 font-tahoma text-base py-2 px-1 outline-none transition-colors"
                    />
                    <button
                        type="submit"
                        className="shrink-0 text-sm font-cinzel uppercase tracking-widest text-aged-gold hover:text-white border border-aged-gold/40 hover:border-aged-gold px-4 py-2 rounded transition-colors"
                    >
                        {submitted ? "✓ Received" : "Subscribe"}
                    </button>
                </form>
            </div>

            {/* Contact Card */}
            <div className="max-w-xl mx-auto mb-10">
                <Link href="/contact" className="block group">
                    <div className="border border-white/10 rounded-xl px-6 py-5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-aged-gold/30 transition-all duration-300 text-center">
                        <h3 className="font-cinzel text-lg text-aged-gold uppercase tracking-[0.15em] mb-1 group-hover:text-fire-orange transition-colors">
                            Contact Us
                        </h3>
                        <p className="font-tahoma text-sm text-white/40 group-hover:text-white/60 transition-colors">
                            Reach out — we are listening
                        </p>
                    </div>
                </Link>
            </div>

            {/* Existing footer row — untouched */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Image src="/WTF Pub Mark white.png" alt="WTF Mark White" width={50} height={50} className="object-cover rounded-full" />
                </div>
                <div className="text-base font-tahoma text-white/50">
                    &copy; {new Date().getFullYear()} Wolves To Feed. All Rights Reserved.
                </div>
                <div className="flex items-center gap-4">
                    <Image src="/WTF Pub Mark black.png" alt="WTF Mark Black" width={50} height={50} className="object-cover rounded-full border border-white/20" />
                </div>
            </div>
        </footer>
    );
}
