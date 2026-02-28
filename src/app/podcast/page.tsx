"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PodcastPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    const seriesTeasers = [
        {
            title: "Fire and Vice",
            subtitle: "Exploring the passion in our desires",
            color: "fire-orange",
            borderColor: "border-fire-orange",
            textColor: "text-fire-orange",
            episodes: [
                { label: "Episode 01", title: "The Alpha Path", teaser: "What does it mean to lead yourself before you can lead others?" },
                { label: "Episode 02", title: "Integrating the Shadow", teaser: "Confronting the parts of yourself you've buried for decades." },
                { label: "Episode 03", title: "Desire Without Attachment", teaser: "How to burn with ambition without being consumed by it." },
            ],
        },
        {
            title: "Breath of Fire",
            subtitle: "Life-force energy cultivation",
            color: "aged-gold",
            borderColor: "border-aged-gold",
            textColor: "text-aged-gold",
            episodes: [
                { label: "Technique 01", title: "Warrior's Breath", teaser: "A foundational qigong breathing pattern for grounding and power." },
                { label: "Technique 02", title: "The Solar Plexus Reset", teaser: "How to recalibrate your nervous system in under five minutes." },
                { label: "Technique 03", title: "Standing Meditation", teaser: "The ancient practice of Zhan Zhuang for vitality and clarity." },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-obsidian text-white relative">

            {/* Header */}
            <div className="pt-16 relative z-30">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-12 text-center flex flex-col items-center">
                        <h1 className="font-cinzel text-5xl md:text-6xl text-aged-gold mb-2 smoke-effect inline-block">Wolves to Feed Podcast</h1>
                        <h2 className="font-cinzel text-2xl md:text-3xl text-fire-orange mb-6 tracking-widest uppercase">The Practice Engine</h2>

                        {/* Decorative Gradient Line */}
                        <div className="w-full max-w-[28rem] h-px bg-gradient-to-r from-transparent via-aged-gold to-transparent mb-8" />

                        <p className="font-tahoma text-xl text-gray-300 max-w-2xl mx-auto">
                            Brian and Joshin help men in their second half of life integrate wellness practices and embody lifestyle choices that cultivate self-awareness, vitality, and purpose. We focus on wisdom, real stories, and simple demonstrations that keep you coherent, grounded, and alive amidst the complexities of work, family, and change.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Still — Closing Frame from Intro Video */}
            <div className="max-w-5xl mx-auto px-8 mb-20">
                <p className="font-cinzel text-lg text-fire-orange uppercase tracking-[0.3em] text-center mb-4">Launching in April</p>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-gray-900">
                    <Image
                        src="/podcast-hero-still.png"
                        alt="Wolves To Feed — Choose Wisely"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Mission Section */}
            <div className="relative z-30 mb-24 px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-aged-gold/5 via-transparent to-fire-orange/5 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-aged-gold/30" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-fire-orange/30" />

                        <h2 className="font-cinzel text-3xl md:text-4xl text-aged-gold mb-8 tracking-[0.2em] smoke-effect">Mission</h2>

                        <div className="space-y-6">
                            <p className="font-tahoma text-xl leading-relaxed text-gray-100 font-light">
                                <span className="text-aged-gold font-medium">Brian and Joshin</span> - two friends in their fifties with very different second‑half lives - holistically exploring wellness practices from around the world and sharing real demonstrations and live sessions to build a culture and community of integrated, healthy men in a world where masculinity is in flux.
                            </p>

                            <div className="w-72 h-px bg-gradient-to-r from-aged-gold to-transparent my-8" />

                            <p className="font-tahoma text-xl leading-relaxed text-gray-100 font-light">
                                You&apos;ll hear us discuss wellness practices through the <span className="text-white/80">body, mind, heart, spirit, relationships, and legacy</span>, weave in studies, teachers, and traditions when they genuinely help, and then show how we actually embody and integrate those insights in real, modern life.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Series Teasers */}
            <div className="relative z-30 mb-24 px-8">
                <div className="max-w-7xl mx-auto space-y-32">
                    {seriesTeasers.map((series) => (
                        <section key={series.title}>
                            <div className={`mb-12 border-l-4 ${series.borderColor} pl-8 py-2`}>
                                <div className="flex items-center gap-6 mb-2">
                                    <h2 className="font-cinzel text-4xl text-white tracking-widest uppercase">{series.title}</h2>
                                    <div className="w-72 h-px bg-gradient-to-r from-aged-gold to-transparent" />
                                </div>
                                <p className={`font-tahoma ${series.textColor} text-lg italic`}>{series.subtitle}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {series.episodes.map((ep) => (
                                    <div key={ep.label} className="group">
                                        <div className={`relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-white/10 group-hover:${series.borderColor}/50 transition-colors`}>
                                            {/* Teaser card instead of placeholder image */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6 text-center">
                                                <div className={`${series.textColor} font-mono text-xs uppercase tracking-widest mb-3 opacity-60`}>{ep.label}</div>
                                                <h4 className="font-cinzel text-xl text-white mb-3">{ep.title}</h4>
                                                <p className="font-tahoma text-sm text-gray-400 leading-relaxed">{ep.teaser}</p>
                                                <div className="mt-4 inline-block bg-white/5 border border-white/10 text-white/40 font-cinzel text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                                                    Coming April 2026
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Notify Me CTA */}
            <div className="pb-24 relative z-30">
                <div className="max-w-2xl mx-auto px-8 text-center">
                    <h2 className="font-cinzel text-3xl text-aged-gold mb-4 smoke-effect">Get Notified at Launch</h2>
                    <p className="font-tahoma text-gray-400 mb-8">Be the first to know when The Practice Engine goes live.</p>
                    <form onSubmit={handleNotify} className="flex items-center gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-grow bg-transparent border-b border-white/20 focus:border-fire-orange text-white placeholder:text-white/30 font-tahoma text-sm py-2 px-1 outline-none transition-colors"
                        />
                        <button
                            type="submit"
                            className="shrink-0 text-xs font-cinzel uppercase tracking-widest text-fire-orange hover:text-white border border-fire-orange/40 hover:border-fire-orange px-5 py-2 rounded transition-colors"
                        >
                            {submitted ? "✓ You're In" : "Notify Me"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
