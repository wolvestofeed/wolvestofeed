"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import GoogleFormEmbed from "@/components/GoogleFormEmbed";


export default function ThePackPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [campfireIndex, setCampfireIndex] = useState(0);

    const headerImages = [
        "/header-gallery/man-rustic.png",
        "/header-gallery/man-urban-v2.png",
        "/header-gallery/man-family.png"
    ];

    const campfireImages = [
        "/campfire-gallery/video-call.png",
        "/campfire-gallery/qigong-campfire.png",
        "/campfire-gallery/campfire-milky-way.png"
    ];

    useEffect(() => {
        const headerTimer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % headerImages.length);
        }, 5000);

        const campfireTimer = setInterval(() => {
            setCampfireIndex((prev) => (prev + 1) % campfireImages.length);
        }, 4000);

        return () => {
            clearInterval(headerTimer);
            clearInterval(campfireTimer);
        };
    }, []);

    const gatherings = [
        { id: 1, date: "Saturday, Oct 14", title: "Shadow Work Intensive", topics: "Psychology, Meditation", description: "A deep dive into integrating the untamed parts of yourself." },
        { id: 2, date: "Sunday, Nov 12", title: "Fire & Focus Bootcamp", topics: "Fitness, Kundalini", description: "Ignite your inner fire with rigorous physical and spiritual discipline." },
        { id: 3, date: "Friday, Dec 1", title: "The Winter Solstice Ceremony", topics: "Ritual, Community", description: "Join the pack for an evening of reflection and shared intention setting." }
    ];

    const partners = [
        { name: "Name of Person", expertise: "Jungian Analysis", link: "#", image: "https://placehold.co/150x150/1a1a1a/D4AF37.png?text=ER" },
        { name: "Name of Person", expertise: "Breathwork Facilitator", link: "#", image: "https://placehold.co/150x150/1a1a1a/D4AF37.png?text=MT" },
        { name: "Name of Person", expertise: "Ayurvedic Nutrition", link: "#", image: "https://placehold.co/150x150/1a1a1a/D4AF37.png?text=SD" },
    ];

    return (
        <div className="min-h-screen bg-obsidian text-white pt-12 pb-24">

            {/* Header Section */}
            <section className="w-full mb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-center border border-white/10 bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
                        {/* 1/3 Left Column: Photo Frame with Slideshow */}
                        <div className="w-full md:w-1/3 aspect-[4/5] md:aspect-auto md:h-[500px] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px) brightness(2) sepia(1) hue-rotate(-50deg)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px) brightness(1) sepia(0) hue-rotate(0deg)" }}
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(20px) brightness(0) sepia(1) hue-rotate(20deg)" }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={headerImages[currentImageIndex]}
                                        alt="Wellness for men"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Fire Glow Overlay during transition */}
                                    <motion.div
                                        initial={{ opacity: 0.8 }}
                                        animate={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="absolute inset-0 bg-gradient-to-t from-fire-orange/40 via-fire-orange/10 to-transparent mix-blend-color-dodge"
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>

                        {/* 2/3 Right Column: Text Section */}
                        <div className="w-full md:w-2/3 p-12 md:p-20 flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-aged-gold/5 blur-[100px] pointer-events-none" />
                            <h2 className="font-tahoma text-2xl md:text-4xl lg:text-5xl leading-tight text-white/90 drop-shadow-sm italic font-light">
                                &quot;A wellness collective for men in mid-life who are seeking to stoke and sustain the flames of <span className="text-aged-gold font-normal">Wisdom</span> and conscious embodiment.&quot;
                            </h2>
                            <div className="mt-12 w-24 h-px bg-gradient-to-r from-aged-gold to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. Inner Den (Login & Member Intake) */}
            <section className="max-w-4xl mx-auto px-8 mb-24">
                <div className="relative overflow-hidden rounded-xl border border-white/10 p-1 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/wolves to feed poster 1.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="relative p-8 md:p-12 text-center flex flex-col items-center">
                        <h2 className="font-cinzel text-3xl md:text-4xl text-aged-gold mb-4 smoke-effect">The Inner Den</h2>
                        <p className="font-tahoma text-gray-400 mb-8 max-w-lg leading-relaxed italic">
                            Wisdom is found within the collective. Contact us about becoming a part of an integrated wellness collective for conscious men.
                        </p>

                        {/* Clerk Logic temporarily hidden until keys are configured
                        <SignedIn>
                            ...
                        </SignedIn>
                        <SignedOut>
                            ...
                        </SignedOut>
                        */}

                        <div className="w-full max-w-xl flex flex-col items-center">
                            <div className="w-full">
                                <GoogleFormEmbed
                                    formUrl="https://forms.gle/knVbtR8ndgJPf5yaA"
                                    title="Member Application Form"
                                    height={500}
                                />
                                <p className="font-tahoma text-white/30 text-[10px] mt-4 italic uppercase tracking-widest text-center">
                                    Note: Your transmission is secure and held in the highest confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 2. Campfire (Public Hub) */}
            <section className="bg-black/50 py-24 mb-24 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-cinzel text-4xl md:text-5xl text-fire-orange mb-6 ember-effect">The Campfire</h2>
                        <p className="font-tahoma text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Our mission is to build a resilient community of wellness practitioners and brothers. Here we share stories, forge connections, and host live gatherings to continually feed the spirit.
                        </p>
                    </div>

                    {/* The Campfire Media Gallery Slideshow */}
                    <div className="relative h-[400px] mb-20 overflow-hidden flex items-center justify-center">
                        <div className="flex items-center justify-center gap-8 w-full max-w-5xl">
                            <AnimatePresence mode="popLayout">
                                {[
                                    (campfireIndex - 1 + campfireImages.length) % campfireImages.length,
                                    campfireIndex,
                                    (campfireIndex + 1) % campfireImages.length
                                ].map((imgIdx, position) => {
                                    const isCenter = position === 1;
                                    return (
                                        <motion.div
                                            key={`${imgIdx}-${position}`}
                                            initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                scale: isCenter ? 1.1 : 0.8,
                                                zIndex: isCenter ? 10 : 0
                                            }}
                                            exit={{ opacity: 0, x: -100, scale: 0.8 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className={`relative shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl ${isCenter ? "w-[450px] h-[350px]" : "w-[250px] h-[200px] opacity-40 grayscale"
                                                }`}
                                        >
                                            <Image
                                                src={campfireImages[imgIdx]}
                                                alt={`Campfire Gallery ${imgIdx}`}
                                                fill
                                                className="object-cover"
                                            />
                                            {isCenter && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Gatherings Grid */}
                    <h3 className="font-cinzel text-2xl text-gray-100 mb-8 border-b border-white/10 pb-4">Upcoming Gatherings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {gatherings.map(g => (
                            <div key={g.id} className="bg-gray-900/50 border border-white/10 rounded-lg p-6 hover:border-aged-gold flex flex-col transition-colors">
                                <div className="text-fire-orange font-mono text-sm mb-2">{g.date}</div>
                                <h4 className="font-tahoma text-xl text-white mb-2">{g.title}</h4>
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">{g.topics}</div>
                                <p className="text-gray-400 text-sm mb-8 flex-grow">{g.description}</p>
                                <button className="w-full py-2 bg-[rgba(66,153,225,0.2)] text-[#90cdf4] border border-[rgba(66,153,225,0.5)] hover:bg-[rgba(66,153,225,0.4)] transition-colors uppercase font-tahoma tracking-wider text-sm flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#63b3ed] animate-pulse"></span>
                                    Secure Ticket
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Tree Line (Directory) */}
            <section className="max-w-6xl mx-auto px-8">
                <div className="mb-12">
                    <h2 className="font-cinzel text-3xl md:text-4xl text-aged-gold mb-4 smoke-effect">The Tree Line</h2>
                    <p className="font-tahoma text-gray-400 max-w-2xl">
                        A curated directory of external partners, teachers, and resources. When you reach the edge of our domain, follow these guides into new territories.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 border border-white/5 bg-gray-950 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer group">
                            <Image src={partner.image} alt={partner.name} width={64} height={64} className="rounded-full border border-white/10 group-hover:border-aged-gold transition-colors" />
                            <div>
                                <h4 className="font-tahoma text-lg text-white group-hover:text-aged-gold transition-colors">{partner.name}</h4>
                                <p className="text-sm text-gray-500">{partner.expertise}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
