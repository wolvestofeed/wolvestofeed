"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // Hide on /app routes (app has its own nav)
    if (pathname.startsWith("/app")) return null;

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Podcast", href: "/podcast" },
        { label: "The Pack", href: "/the-pack" },
        { label: "Coaching", href: "/coaching" },
        { label: "Publishing", href: "/publishing" },
        { label: "Contact", href: "/contact" },
        { label: "Choice Point", href: "/app", special: true },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/10 px-8 py-6">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between">

                {/* Logo Section */}
                <div className="shrink-0">
                    <Link href="/" className="font-cinzel text-xl lg:text-2xl tracking-[0.2em] text-aged-gold hover:opacity-80 transition-opacity">
                        WOLVES TO FEED
                    </Link>
                </div>

                {/* Menu Section */}
                <div className="flex items-center gap-8 lg:gap-12 font-tahoma text-[11px] lg:text-xs uppercase tracking-[0.2em] shrink-0">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const isSpecial = 'special' in link && link.special;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors ${isSpecial
                                        ? "text-fire-orange hover:text-aged-gold ember-effect"
                                        : `hover:text-fire-orange ${isActive ? "text-fire-orange font-bold" : "text-white/70"}`
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
