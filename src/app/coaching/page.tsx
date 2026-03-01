"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GoogleFormEmbed from "@/components/GoogleFormEmbed";
import CheckoutButton from "@/components/CheckoutButton";

export default function CoachingPage() {
    const [showBrianBio, setShowBrianBio] = useState(false);

    const [joshinHover, setJoshinHover] = useState(false);

    const services = [
        { name: "Yoga", description: "Asana practice for flexibility, balance, and centered presence." },
        { name: "Qigong", description: "Cultivate life-force energy through breath and movement." },
        { name: "Nutrition", description: "Fuel the body optimally for sustained fire and focus." },
        { name: "Kundalini", description: "Awaken latent creative potential and nervous system resilience." },
        { name: "Ayurveda", description: "Align your lifestyle with ancient principles of holistic balance." },
        { name: "Fitness", description: "Physical conditioning to sharpen the instrument of the self." },
        { name: "Meditation", description: "Master the mind and witness the shadow without attachment." },
        { name: "Mental Models", description: "Align your purpose with a newly designed reality." }
    ];

    const pricing = [
        { title: "Single Session", time: "90 min", price: "$75", description: "A focused, standalone deep dive into your practice.", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COACHING_SINGLE || "" },
        { title: "4-Pack Bundle", time: "4 × 90 min", price: "$270", description: "Commit to continuous growth. Includes a 10% discount.", highlight: true, priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COACHING_4PACK || "" },
        { title: "12-Pack Bundle", time: "12 × 90 min", price: "$720", description: "Transformative long-term mastery. Includes a 20% discount.", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COACHING_12PACK || "" },
    ];

    return (
        <div className="min-h-screen bg-obsidian text-white pt-12 pb-24">
            <div className="max-w-6xl mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <h1 className="font-cinzel text-5xl md:text-6xl text-aged-gold mb-6 smoke-effect">The Forge: Coaching</h1>

                    {/* Decorative Gradient Line */}
                    <div className="w-full max-w-[28rem] h-px bg-gradient-to-r from-transparent via-aged-gold to-transparent mb-8" />

                    <p className="font-tahoma text-xl text-gray-300 max-w-2xl mx-auto">
                        Multi-disciplinary training designed to integrate <br className="hidden md:block" /> the Shadow and unleash the Spirit.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mb-24">
                    <h2 className="font-cinzel text-3xl text-gray-100 mb-8 border-b border-white/10 pb-4 text-center md:text-left">Disciplines</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((svc, idx) => (
                            <div key={idx} className="bg-gray-900 border border-white/10 p-6 rounded-lg hover:border-fire-orange transition-colors group">
                                <h3 className="font-cinzel text-xl text-aged-gold group-hover:text-fire-orange transition-colors mb-3">{svc.name}</h3>
                                <p className="font-tahoma text-gray-400 text-sm leading-relaxed">{svc.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Coaches Section */}
                <div className="mb-24 space-y-24">

                    {/* Coach 1: Joshin Robert Bogatin (always open) */}
                    <div className="py-16 border-y border-white/5 bg-black/20 flex flex-col md:grid md:grid-cols-12 gap-12 items-center md:items-start p-8 md:p-12 rounded-2xl relative overflow-hidden group">
                        <div className="md:col-span-4 flex flex-col items-center md:items-start">
                            {/* Square container – larger than the circle, no clipping so PNG transparency "breaks out" */}
                            <div
                                className="relative shrink-0 w-56 h-56 md:w-72 md:h-72 mb-8 cursor-pointer"
                                onMouseEnter={() => setJoshinHover(true)}
                                onMouseLeave={() => setJoshinHover(false)}
                            >
                                {/* Circle backdrop – slightly smaller, centered behind the image */}
                                <div className="absolute inset-4 md:inset-5 rounded-full border-[3px] border-white/30 group-hover:border-aged-gold bg-gray-900 transition-all duration-700" />

                                {/* Default: current qigong pose */}
                                <Image
                                    src="/joshin-qigong-current.png"
                                    alt="Joshin Robert Bogatin - Qigong"
                                    fill
                                    className="object-contain object-bottom transition-opacity duration-700 ease-in-out drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                                    style={{ opacity: joshinHover ? 0 : 1 }}
                                    priority
                                />
                                {/* Hover: push palm pose */}
                                <Image
                                    src="/joshin-qigong-push-palm.png"
                                    alt="Joshin Robert Bogatin - Push Palm"
                                    fill
                                    className="object-contain object-bottom transition-opacity duration-700 ease-in-out drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                                    style={{ opacity: joshinHover ? 1 : 0 }}
                                />
                            </div>
                            <h3 className="font-cinzel text-3xl text-aged-gold mb-2 uppercase tracking-widest text-center md:text-left">Joshin Robert Bogatin</h3>
                            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-4 font-mono text-center md:text-left">Expertise: Fitness, Nutrition, Meditation, Warrior Qigong, Ayurveda</div>
                            <p className="font-tahoma text-gray-400 text-sm leading-relaxed text-center md:text-left italic">
                                Focused on the vertical ascent. Specialized in energy cultivation and the physical discipline required to sustain states of high clarity.
                            </p>
                        </div>

                        <div className="md:col-span-8 flex flex-col justify-center">
                            <h4 className="font-cinzel text-xl text-white/40 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Lone Wolf</h4>
                            <p className="font-tahoma text-gray-400 text-base leading-relaxed">
                                Joshin is a lifelong entrepreneur, systems designer, martial artist, and student of Zen and contemplative practices. He spent three decades building values-driven small businesses and nonprofit organizations in service of human wellness, sustainability and community. Drawing from his own boom-and-bust cycles, he writes and coaches to offer a radically honest look at how to remain persistent and awake regardless of the outcome of your efforts. Joshin lives in the remote Colorado mountains with his dog, where he continues to practice, hike the high-country, and support other persistent humans in finding meaning beyond conventional success.
                            </p>
                        </div>
                    </div>

                    {/* Coach 2: Brian Winters (collapsible) */}
                    <div className="rounded-2xl border border-white/5 bg-black/20 overflow-hidden">
                        <button
                            onClick={() => setShowBrianBio(!showBrianBio)}
                            className="w-full flex items-center justify-between p-8 md:p-12 cursor-pointer hover:bg-white/[0.02] transition-colors"
                        >
                            <h3 className="font-cinzel text-3xl text-shadow-red uppercase tracking-widest">Brian Winters</h3>
                            <motion.div
                                animate={{ rotate: showBrianBio ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-6 h-6 text-shadow-red" />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {showBrianBio && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-center md:items-start px-8 md:px-12 pb-12">
                                        <div className="md:col-span-4 flex flex-col items-center md:items-start">
                                            <div className="relative shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 hover:border-shadow-red transition-all duration-700 mb-8">
                                                <Image src="https://placehold.co/400x400/1a1a1a/ff4d00.png?text=SHADOW" alt="Brian Winters" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                            </div>
                                            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-4 font-mono text-center md:text-left">Expertise: Yoga, Kundalini, Identity, Meditation, Healing Qigong</div>
                                            <p className="font-tahoma text-gray-400 text-sm leading-relaxed text-center md:text-left italic">
                                                A specialist in the darker terrains of the psyche. Helping you navigate the smoke and reclaim the lost fragments of your true self.
                                            </p>
                                        </div>

                                        <div className="md:col-span-8 flex flex-col justify-center">
                                            <h4 className="font-cinzel text-xl text-white/40 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Pack Wolf</h4>
                                            <p className="font-tahoma text-gray-400 text-base leading-relaxed">
                                                Biography coming soon. Brian&apos;s approach to coaching integrates deep physical discipline with contemplative inquiry, providing a path for those ready to face the shadow and integrate their full story.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>

                {/* Investment Section */}
                <div className="mb-24">
                    <div className="text-center md:text-left mb-8 border-b border-white/10 pb-4">
                        <h2 className="font-cinzel text-3xl text-gray-100">Investment</h2>
                        <p className="font-tahoma text-sm text-gray-500 mt-2 uppercase tracking-[0.2em]">Contact us to schedule your sessions</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricing.map((pkg, idx) => (
                            <div key={idx} className={`relative flex flex-col p-8 rounded-lg border ${pkg.highlight ? "border-aged-gold shadow-[0_4px_20px_rgba(212,175,55,0.15)] bg-gradient-to-b from-gray-900 to-black" : "border-white/10 bg-gray-950"} transition-all duration-300`}>
                                {pkg.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-aged-gold text-black font-cinzel text-xs py-1 px-4 rounded-full font-bold tracking-widest">RECOMMENDED</div>
                                )}
                                <h3 className="font-cinzel text-2xl text-white mb-2 text-center">{pkg.title}</h3>
                                <div className="text-center font-tahoma text-aged-gold mb-4 text-4xl">{pkg.price}</div>
                                <div className="text-center text-gray-400 text-sm mb-6 uppercase tracking-wider">{pkg.time}</div>
                                <p className="font-tahoma text-gray-400 text-sm text-center flex-grow mb-6">{pkg.description}</p>
                                <CheckoutButton
                                    priceId={pkg.priceId}
                                    label="Book Now"
                                    className={`w-full justify-center ${pkg.highlight ? "bg-aged-gold hover:bg-yellow-500 text-black" : "border border-white/20 hover:border-white/50 text-white bg-transparent"}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Google Form Scheduler */}
                <div className="bg-black/80 border border-white/10 rounded-xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wolves to feed poster 1.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="relative text-center mb-8">
                        <h2 className="font-cinzel text-3xl text-fire-orange mb-4 ember-effect">Enter The Forge</h2>
                        <p className="font-tahoma text-gray-400">Reach out to us to schedule your discipline and book your session below.</p>
                    </div>

                    <GoogleFormEmbed
                        formUrl="https://forms.gle/NLXLoN6sQSjcqPnh7"
                        title="Coaching Intake Form"
                        height={600}
                    />
                </div>

            </div>
        </div>
    );
}
