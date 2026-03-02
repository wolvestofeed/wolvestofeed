"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    // Hide on /app routes (app has its own nav)
    if (pathname.startsWith("/app")) return null;

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Books", href: "/publishing" },
        { label: "Coaching", href: "/coaching" },
        { label: "Fireline", href: "/app" },
        { label: "Pack", href: "/the-pack" },
        { label: "Podcast", href: "/podcast" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[60] bg-obsidian/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 sm:py-6">
                <div className="max-w-[1800px] mx-auto flex items-center justify-between">

                    {/* Logo Section */}
                    <div className="shrink-0">
                        <Link href="/" className="font-cinzel text-base sm:text-lg lg:text-2xl tracking-[0.1em] sm:tracking-[0.2em] text-aged-gold hover:opacity-80 transition-opacity">
                            WOLVES TO FEED
                        </Link>
                    </div>

                    {/* Desktop Menu Section */}
                    <div className="hidden sm:flex items-center gap-2 md:gap-4 lg:gap-12 font-tahoma text-[10px] md:text-[11px] lg:text-sm uppercase tracking-[0.1em] lg:tracking-[0.2em] shrink-0">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`transition-colors hover:text-fire-orange ${isActive ? "text-fire-orange font-bold" : "text-white/70"}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="sm:hidden text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-50 bg-obsidian flex flex-col items-center justify-center p-8 sm:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 text-center">
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`font-cinzel text-2xl tracking-[0.2em] uppercase transition-colors ${isActive ? "text-fire-orange" : "text-white/70 hover:text-white"
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
