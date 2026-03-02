"use client";

import { useState } from "react";
import Image from "next/image";
import { Flame, Map } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import Link from "next/link";

export default function PublishingPage() {
    const [activeBook, setActiveBook] = useState<"book1" | "book2" | "book3">("book1");
    const [isFlipped, setFlipped] = useState(false);

    const books = {
        book1: {
            title: "On the Edge of Greatness",
            subtitle: "A Field Guide for Persistent Humans",
            frontCover: "/on-the-edge-front-v3.jpg",
            backCover: "https://placehold.co/400x600/D4AF37/1a1a1a.png?text=Back+Cover",
            excerpt: "On the Edge of Greatness is half selective autobiography and half essential toolkit - the one I’ve developed for living an ambitious, mission-driven life that has not resulted in the outcomes and financial independence I expected to achieve. The ‘Edge of Greatness’ is a feeling running through me; one that offers hope and haunts me at the same time. The relentless sense of being so close to a breakthrough yet ultimately held back from the full promised payoff.\n\nBeing on the ‘Edge of Greatness’ is like a waiting period when you know you’ve done enough to make it to the next level. When the enormous impact of what could happen to you starts to become real and your ego is eating the belief that “It’s going to happen!” like candy on Halloween.\n\nMost of my youth and adult life has been a sad disappointment. I believe I am capable and destined for so much more richness in life, personally and professionally. I’d like to be able to share that quality with people I care about, celebrating the joy and vibrancy we have created in our communities. But I don’t have these things to enjoy. There is no solidity in my career, I experience a tiny and dysfunctional family life and my personal life is filled with mostly solo activities and things I do with my dog. I find myself swimming in a life soup that’s peppered with the nagging question, ‘How do I stay open, generous, healthy and grounded when the scoreboard says I’m losing, big-time?’\n\nIn this book I am going to explore the ways that I maintain open-heartedness, a positive mindset and inner peace despite the constant setbacks in my life. As an organizational systems thinker and philosopher of the human experience, my intention with this book is to examine the Edges of Greatness, as I’ve recurrently experienced them, in such a way that forges the lessons I’ve learned into a thousand-layer Damascus Broadsword that can be wielded at any time.\n\nI am sharing with you some of the notable, metaphorical mountains I’ve climbed. You’ll hear about the milestones I reached along each journey and how I was able to repeatedly create breakthrough opportunities for myself. And yet how nothing I did, thought or felt in the end would lead to my desired success. This pattern is apparent in every major area of my life. So this book is going to cover it as I see it. I’ve separated the roller-coaster ride of life into its major domains, where we can explore each aspect of my life failures in greater detail. Oops, I mean my opportunities for growth.\n\nThe major domains are:\n◊   Edge of Spirit\n◊   Edge of Career\n◊.  Edge of Body\n◊   Edge of Intimacy\n◊   Edge of Legacy",
            price: "$15.99",
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BOOK_OTEG || "",
        },
        book2: {
            title: "Edges of Greatness Workbook",
            subtitle: "Maps for Implementation",
            frontCover: "/workbook-front-v1.jpg",
            backCover: "https://placehold.co/400x600/E25822/1a1a1a.png?text=Back+Cover",
            excerpt: "This workbook is designed to accompany On the Edge of Greatness: A Field Guide for Persistent Humans.\n\nUse it to map your own edges, apply the animal medicine tools, and design a life that honors both your ambition and your reality. \n\nHOW TO USE THIS WORKBOOK\nThis is not a journal. It’s a practical toolkit for redesigning the systems that generate your lived reality.\n\nThe core principle: Your reality is a lagging indicator of your behaviors, which are driven by emotions, feelings, and thoughts rooted in core beliefs. When you work with the Edges framework, you’re pulling three levers:\n\n◊Thinking (paradigm shift) – Change the mental model\n◊Feeling (perspective change) – Reframe the emotional interpretation\n◊Body (physiological state) – Reset the nervous system response\n\nEach domain offers:\n◊Core mapping exercises to name your edges\n◊Animal medicine tools for persistence\n◊Reflection prompts to pull the levers\n◊Worksheets you can return to again and again",
            price: "$11.99",
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BOOK_WORKBOOK || "",
        },
        book3: {
            title: "The Edges Bundle",
            subtitle: "Field Guide & Workbook Set",
            frontCover: "/on-the-edge-front-v3.jpg", // Using main book as lead image
            backCover: "/workbook-front-v1.jpg",
            excerpt: "The ultimate transformation package. This bundle includes both the 'On the Edge of Greatness' Master Text and the 'Edges of Greatness Workbook'. Explore the philosophy and immediately begin the implementation. Forged together to save you 14% on your journey toward integration.",
            price: "$24.00",
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BOOK_BUNDLE || "",
        }
    };

    const currentBook = books[activeBook];

    return (
        <div className="min-h-screen bg-obsidian text-white pt-12 pb-24">
            <div className="max-w-6xl mx-auto px-8">

                {/* Brand Header Section - Editorial Overlay Design */}
                <section className="relative w-full h-48 md:h-56 mb-16 flex items-center justify-end overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

                    {/* Logo Watermark (Background Left) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-100 pointer-events-none">
                        <Image
                            src="/WTF Pub Mark black.png"
                            alt="Wolves To Feed Publishing Imprint Background"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Foreground Text Block (Right Aligned) */}
                    <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 text-right">
                        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tighter drop-shadow-lg">
                            Wolves To Feed Publishing
                        </h1>
                        <p className="font-tahoma text-lg md:text-xl text-gray-300 italic max-w-2xl ml-auto border-r-2 border-aged-gold/30 pr-4">
                            The story you tell yourself is the territory you inhabit. We publish the maps for those brave enough to redraw their borders.
                        </p>
                    </div>
                </section>

                {/* Existing Library Header */}
                <div className="text-left mb-20 max-w-3xl">
                    <h2 className="font-cinzel text-5xl md:text-6xl text-aged-gold mb-6 smoke-effect uppercase tracking-widest">The Library</h2>
                    <p className="font-tahoma text-xl text-gray-300 leading-relaxed">
                        Words are seeds. Plant them deeply. Explore our foundational texts designed to challenge your limits and guide you through the wilderness of the self.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 relative">

                    {/* Bookshelf Selection */}
                    <div className="w-full lg:w-1/3 border-r border-white/10 pr-8">
                        <h2 className="font-cinzel text-2xl text-gray-100 mb-8 border-b border-white/10 pb-4">Featured Titles</h2>
                        <div className="space-y-6">
                            <button
                                onClick={() => { setActiveBook("book1"); setFlipped(false); }}
                                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 ${activeBook === "book1" ? "bg-gray-900 border-aged-gold shadow-[0_4px_20px_rgba(212,175,55,0.1)]" : "bg-black/50 border-white/5 hover:border-white/20"}`}
                            >
                                <div className="font-cinzel text-xl text-white mb-2">{books.book1.title}</div>
                                <div className="font-tahoma text-base text-aged-gold uppercase tracking-wider">{books.book1.subtitle}</div>
                            </button>

                            <button
                                onClick={() => { setActiveBook("book2"); setFlipped(false); }}
                                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 ${activeBook === "book2" ? "bg-gray-900 border-fire-orange shadow-[0_4px_20px_rgba(226,88,34,0.1)]" : "bg-black/50 border-white/5 hover:border-white/20"}`}
                            >
                                <div className="font-cinzel text-xl text-white mb-2">{books.book2.title}</div>
                                <div className="font-tahoma text-base text-fire-orange uppercase tracking-wider">{books.book2.subtitle}</div>
                            </button>

                            <button
                                onClick={() => { setActiveBook("book3"); setFlipped(false); }}
                                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 ${activeBook === "book3" ? "bg-gray-900 border-white shadow-[0_4px_20px_rgba(255,255,255,0.1)]" : "bg-black/50 border-white/5 hover:border-white/20"}`}
                            >
                                <div className="font-cinzel text-xl text-white mb-2">{books.book3.title}</div>
                                <div className="font-tahoma text-base text-white/70 uppercase tracking-wider mb-2">{books.book3.subtitle}</div>
                                <div className="inline-block bg-fire-orange text-white text-[10px] px-2 py-0.5 rounded font-bold">14% BUNDLE SAVINGS</div>
                            </button>
                        </div>
                    </div>

                    {/* Interactive Frame & Excerpt */}
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-12">

                        {/* Interactive Book Cover Component */}
                        <div className="w-full md:w-1/2 flex flex-col items-center">
                            {/* 3D Flip Container */}
                            <div
                                className="relative w-full aspect-[2/3] max-w-[300px] [perspective:1000px] cursor-pointer group"
                                onClick={() => setFlipped(!isFlipped)}
                            >
                                <div className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>

                                    {/* Front Cover */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] rounded shadow-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                                        <Image src={currentBook.frontCover} alt="Front Cover" fill className="object-cover" />
                                    </div>

                                    {/* Back Cover */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded shadow-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                                        <Image src={currentBook.backCover} alt="Back Cover" fill className="object-cover" />
                                    </div>

                                </div>
                            </div>
                            <p className="font-tahoma text-base text-gray-400 mt-6 italic bg-white/5 px-4 py-1 rounded-full border border-white/10">Click book to view {isFlipped ? "front" : "back"} cover</p>
                        </div>

                        {/* Book Details & Excerpt Box */}
                        <div className="w-full md:w-1/2 flex flex-col h-full">
                            <h3 className="font-cinzel text-3xl text-white mb-2">{currentBook.title}</h3>
                            <p className="font-tahoma text-xl text-gray-400 mb-8">{currentBook.subtitle}</p>

                            <div className="flex-grow bg-black/60 border border-white/10 rounded-lg p-6 mb-8 relative">
                                <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none rounded-t-lg z-10" />
                                <h4 className="font-cinzel text-base text-aged-gold mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Read an Excerpt</h4>
                                <div className="h-48 overflow-y-auto pr-4 font-tahoma text-gray-300 leading-relaxed text-base scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent whitespace-pre-line">
                                    {currentBook.excerpt}
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none rounded-b-lg z-10" />
                            </div>

                            {/* Stripe Checkout */}
                            <div className="space-y-4">
                                <div className="bg-gray-900 border border-white/20 p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <span className="font-cinzel text-2xl text-white shrink-0">{currentBook.price}</span>
                                    <CheckoutButton
                                        priceId={currentBook.priceId}
                                        label="Pre-Order Now"
                                        className="bg-aged-gold hover:bg-yellow-500 text-black border-2 border-transparent hover:border-white shadow-lg w-full sm:w-auto"
                                    />
                                </div>

                                {/* Pre-Order Notice */}
                                <div className="bg-black/40 border border-fire-orange/30 p-4 rounded-lg flex items-start gap-3">
                                    <span className="text-fire-orange text-xl mt-0.5" aria-hidden="true">🔥</span>
                                    <div>
                                        <h5 className="font-cinzel text-fire-orange text-base font-bold tracking-wider uppercase mb-1">Pre-Order Phase</h5>
                                        <p className="font-tahoma text-gray-400 text-sm leading-relaxed">
                                            Physical editions are currently at the printer. All orders placed today will ship in March.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Fireline App Promotion Section */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24 mb-16" />

                <section className="relative px-8 py-16 bg-black/30 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-fire-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        {/* Narrative Content */}
                        <div className="w-full lg:w-5/12 text-center lg:text-left">
                            <h2 className="font-cinzel text-3xl md:text-5xl text-aged-gold mb-6 uppercase tracking-wider smoke-effect">
                                Wolves To Feed <br />
                                <span className="text-fire-orange tracking-tighter ember-effect">Fireline</span>
                            </h2>
                            <p className="font-tahoma text-xl text-gray-300 md:text-2xl italic mb-6">
                                The Digital Companion
                            </p>
                            <p className="font-tahoma text-base text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Words spark the flame, but action sustains it. Our physical texts provide the map, while the Fireline digital app provides the compass. Built for the critical moments when you face your edges in real time.
                            </p>

                            <Link href="/app">
                                <button className="font-cinzel uppercase tracking-[0.2em] px-8 py-4 bg-transparent border-2 border-fire-orange/50 text-fire-orange hover:bg-fire-orange hover:text-black hover:border-fire-orange hover:shadow-[0_0_20px_rgba(226,88,34,0.4)] transition-all duration-300 rounded font-bold text-sm">
                                    Enter Fireline
                                </button>
                            </Link>
                        </div>

                        {/* Two Modes Grid */}
                        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Firebreak Mode */}
                            <div className="bg-black/50 border border-fire-orange/20 p-8 rounded-xl hover:border-fire-orange/50 transition-colors">
                                <div className="p-3 bg-fire-orange/10 w-fit rounded-lg mb-6 border border-fire-orange/20">
                                    <Flame className="w-8 h-8 text-fire-orange" />
                                </div>
                                <h3 className="font-cinzel text-2xl text-fire-orange mb-3">Firebreak</h3>
                                <p className="font-tahoma text-sm text-gray-400 leading-relaxed">
                                    Immediate, practical nervous system support. Choose between manual reading or immersive audio-guided exercises to regulate your system when the flames are rising.
                                </p>
                            </div>

                            {/* Controlled Burn Mode */}
                            <div className="bg-black/50 border border-aged-gold/20 p-8 rounded-xl hover:border-aged-gold/50 transition-colors">
                                <div className="p-3 bg-aged-gold/10 w-fit rounded-lg mb-6 border border-aged-gold/20">
                                    <Map className="w-8 h-8 text-aged-gold" />
                                </div>
                                <h3 className="font-cinzel text-2xl text-aged-gold mb-3">Controlled Burn</h3>
                                <p className="font-tahoma text-sm text-gray-400 leading-relaxed">
                                    The active digital workbook. A structured, ongoing journey to implement the philosophies of the text into daily habit and paradigm shifts.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
