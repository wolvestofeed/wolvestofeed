"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PodcastPage() {
    const [focusMode, setFocusMode] = useState(false);

    // Mock YouTube data
    const youtubeVideos = [
        { id: "1", title: "The Alpha Path", thumbnail: "https://placehold.co/600x400/1a1a1a/D4AF37.png?text=Video+1", duration: "1:24:00" },
        { id: "2", title: "Integrating the Shadow", thumbnail: "https://placehold.co/600x400/1a1a1a/D4AF37.png?text=Video+2", duration: "45:30" },
        { id: "3", title: "Fueling the Fire", thumbnail: "https://placehold.co/600x400/1a1a1a/D4AF37.png?text=Video+3", duration: "55:10" },
        { id: "4", title: "Discipline and Freedom", thumbnail: "https://placehold.co/600x400/1a1a1a/D4AF37.png?text=Video+4", duration: "1:10:00" },
    ];

    // Replace this ID with your actual YouTube Welcome Video ID once it's uploaded
    const WELCOME_VIDEO_ID = "YOUR_WELCOME_VIDEO_ID_HERE";

    return (
        <div className="min-h-screen bg-obsidian text-white relative">
            {/* Dim Overlay - Appears only when focus mode is true */}
            <div className={`fixed inset-0 bg-black/90 z-40 transition-opacity duration-700 pointer-events-none ${focusMode ? "opacity-100" : "opacity-0"}`} />

            {/* Header text fades out in focus mode */}
            <div className={`transition-all duration-700 pt-16 relative z-30 ${focusMode ? "opacity-10 pointer-events-none" : "opacity-100"}`}>
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-12 text-center">
                        <h1 className="font-cinzel text-5xl md:text-6xl text-aged-gold mb-6 smoke-effect inline-block">The Practice Engine</h1>
                        <p className="font-tahoma text-xl text-gray-300 max-w-2xl mx-auto">
                            Brian and Joshin help men in their second half of life integrate wellness practices and embody lifestyle choices that cultivate self-awareness, vitality, and purpose. We focus on wisdom, real stories, and simple demonstrations that keep you coherent, grounded, and alive amidst the complexities of work, family, and change.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Welcome Broadcast Section */}
            <div className={`transition-all duration-700 relative z-50 flex items-center justify-center mb-20 ${focusMode ? "fixed inset-0 px-4 scale-100" : "max-w-5xl mx-auto px-8 scale-95"}`}>
                <div className={`relative w-full overflow-hidden transition-all duration-700 bg-gray-900 ${focusMode ? "max-w-6xl aspect-video rounded-xl border border-aged-gold shadow-[0_0_50px_rgba(212,175,55,0.3)]" : "aspect-video rounded-lg border border-white/20 shadow-2xl"}`}>

                    <div className="absolute top-4 right-4 z-20">
                        <button
                            onClick={() => setFocusMode(!focusMode)}
                            className={`px-4 py-2 text-sm font-tahoma uppercase tracking-wider backdrop-blur-md rounded transition-all duration-300 ${focusMode ? "bg-white/10 border border-white/50 text-white hover:bg-white/20" : "bg-black/80 border border-aged-gold/50 text-aged-gold hover:bg-black"}`}
                        >
                            {focusMode ? "Exit Focus Mode" : "Focus Mode"}
                        </button>
                    </div>

                    {/* YouTube Video Player */}
                    <div className="w-full h-full">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${WELCOME_VIDEO_ID}?modestbranding=1&rel=0&showinfo=0`}
                            title="WTF Welcome Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>
            </div>

            {/* Mission Section */}
            <div className={`transition-all duration-700 relative z-30 mb-24 px-8 ${focusMode ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto relative group"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-aged-gold/5 via-transparent to-fire-orange/5 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-aged-gold/30" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-fire-orange/30" />

                        <h2 className="font-cinzel text-3xl md:text-4xl text-aged-gold mb-8 tracking-[0.2em] smoke-effect">Mission</h2>

                        <div className="space-y-6">
                            <p className="font-tahoma text-xl leading-relaxed text-gray-100 font-light">
                                <span className="text-aged-gold font-medium">Brian and Joshin</span> - two friends in their fifties with very different second‑half lives - holistically exploring wellness practices from around the world and sharing real demonstrations and live sessions to build a culture and community of integrated, healthy men in a world where masculinity is in flux.
                            </p>

                            <div className="w-12 h-px bg-gradient-to-r from-aged-gold to-transparent my-8" />

                            <p className="font-tahoma text-xl leading-relaxed text-gray-100 font-light">
                                You’ll hear us discuss wellness practices through the <span className="text-white/80">body, mind, heart, spirit, relationships, and legacy</span>, weave in studies, teachers, and traditions when they genuinely help, and then show how we actually embody and integrate those insights in real, modern life.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Video Series Sections */}
            <div className={`transition-all duration-700 relative z-30 mb-24 px-8 ${focusMode ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Series 1: Fire and Vice */}
                    <section>
                        <div className="mb-12 border-l-4 border-fire-orange pl-8 py-2">
                            <h2 className="font-cinzel text-4xl text-white tracking-widest uppercase mb-2">Fire and Vice</h2>
                            <p className="font-tahoma text-aged-gold text-lg italic">Exploring the passion in our desires</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-white/10 group-hover:border-fire-orange/50 transition-colors">
                                        <Image src={`https://placehold.co/600x400/1a1a1a/E25822.png?text=Fire+and+Vice+${i}`} alt="Fire and Vice" fill className="opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 font-cinzel text-white text-xs tracking-widest">Episode 0{i}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Series 2: Breath of Fire */}
                    <section>
                        <div className="mb-12 border-l-4 border-aged-gold pl-8 py-2">
                            <h2 className="font-cinzel text-4xl text-white tracking-widest uppercase mb-2">Breath of Fire</h2>
                            <p className="font-tahoma text-aged-gold text-lg italic">Life-Force energy cultivation</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-white/10 group-hover:border-aged-gold/50 transition-colors">
                                        <Image src={`https://placehold.co/600x400/1a1a1a/D4AF37.png?text=Breath+of+Fire+${i}`} alt="Breath of Fire" fill className="opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 font-cinzel text-white text-xs tracking-widest">Technique 0{i}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>

            {/* Sub-grid of videos fades out in focus mode */}
            <div className={`transition-all duration-700 pb-24 relative z-30 ${focusMode ? "opacity-10 pointer-events-none" : "opacity-100"}`}>
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="font-cinzel text-3xl text-gray-100 mb-8 border-b border-white/10 pb-4">Recent Transmissions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {youtubeVideos.map((video) => (
                            <div key={video.id} className="group cursor-pointer">
                                <div className="relative aspect-video rounded-md overflow-hidden bg-gray-900 border border-white/10 group-hover:border-aged-gold/50 transition-colors">
                                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-mono">{video.duration}</div>
                                </div>
                                <h3 className="font-tahoma mt-4 text-lg text-gray-200 group-hover:text-aged-gold transition-colors">{video.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
