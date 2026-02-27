"use client";

import { useState } from "react";
import Image from "next/image";

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
            price: "$15.99"
        },
        book2: {
            title: "Edges of Greatness Workbook",
            subtitle: "Maps for Implementation",
            frontCover: "/workbook-front-v1.jpg",
            backCover: "https://placehold.co/400x600/E25822/1a1a1a.png?text=Back+Cover",
            excerpt: "This workbook is designed to accompany On the Edge of Greatness: A Field Guide for Persistent Humans.\n\nUse it to map your own edges, apply the animal medicine tools, and design a life that honors both your ambition and your reality. \n\nHOW TO USE THIS WORKBOOK\nThis is not a journal. It’s a practical toolkit for redesigning the systems that generate your lived reality.\n\nThe core principle: Your reality is a lagging indicator of your behaviors, which are driven by emotions, feelings, and thoughts rooted in core beliefs. When you work with the Edges framework, you’re pulling three levers:\n\n◊Thinking (paradigm shift) – Change the mental model\n◊Feeling (perspective change) – Reframe the emotional interpretation\n◊Body (physiological state) – Reset the nervous system response\n\nEach domain offers:\n◊Core mapping exercises to name your edges\n◊Animal medicine tools for persistence\n◊Reflection prompts to pull the levers\n◊Worksheets you can return to again and again",
            price: "$11.99"
        },
        book3: {
            title: "The Edges Bundle",
            subtitle: "Field Guide & Workbook Set",
            frontCover: "/on-the-edge-front-v3.jpg", // Using main book as lead image
            backCover: "/workbook-front-v1.jpg",
            excerpt: "The ultimate transformation package. This bundle includes both the 'On the Edge of Greatness' Master Text and the 'Edges of Greatness Workbook'. Explore the philosophy and immediately begin the implementation. Forged together to save you 14% on your journey toward integration.",
            price: "$24.00"
        }
    };

    const currentBook = books[activeBook];

    return (
        <div className="min-h-screen bg-obsidian text-white pt-12 pb-24">
            <div className="max-w-6xl mx-auto px-8">

                {/* Brand Header Section */}
                <section className="mb-16 flex flex-col items-center text-center">
                    <div className="relative w-48 h-48 mb-8 opacity-90 hover:opacity-100 transition-opacity">
                        <Image
                            src="/WTF Pub Mark white.png"
                            alt="Wolves To Feed Publishing Imprint"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-7xl text-white mb-8 tracking-tighter ember-effect">
                        Wolves To Feed Publishing
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-aged-gold to-transparent mb-12"></div>
                    <p className="font-tahoma text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed italic">
                        "The story you tell yourself is the territory you inhabit. We publish the maps for those brave enough to redraw their borders."
                    </p>
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

                {/* Existing Library Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
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
                                <div className="font-tahoma text-sm text-aged-gold uppercase tracking-wider">{books.book1.subtitle}</div>
                            </button>

                            <button
                                onClick={() => { setActiveBook("book2"); setFlipped(false); }}
                                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 ${activeBook === "book2" ? "bg-gray-900 border-fire-orange shadow-[0_4px_20px_rgba(226,88,34,0.1)]" : "bg-black/50 border-white/5 hover:border-white/20"}`}
                            >
                                <div className="font-cinzel text-xl text-white mb-2">{books.book2.title}</div>
                                <div className="font-tahoma text-sm text-fire-orange uppercase tracking-wider">{books.book2.subtitle}</div>
                            </button>

                            <button
                                onClick={() => { setActiveBook("book3"); setFlipped(false); }}
                                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 ${activeBook === "book3" ? "bg-gray-900 border-white shadow-[0_4px_20px_rgba(255,255,255,0.1)]" : "bg-black/50 border-white/5 hover:border-white/20"}`}
                            >
                                <div className="font-cinzel text-xl text-white mb-2">{books.book3.title}</div>
                                <div className="font-tahoma text-sm text-white/70 uppercase tracking-wider mb-2">{books.book3.subtitle}</div>
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
                            <p className="font-tahoma text-sm text-gray-500 mt-6 italic bg-white/5 px-4 py-1 rounded-full border border-white/10">Click book to view {isFlipped ? "front" : "back"} cover</p>
                        </div>

                        {/* Book Details & Excerpt Box */}
                        <div className="w-full md:w-1/2 flex flex-col h-full">
                            <h3 className="font-cinzel text-3xl text-white mb-2">{currentBook.title}</h3>
                            <p className="font-tahoma text-xl text-gray-400 mb-8">{currentBook.subtitle}</p>

                            <div className="flex-grow bg-black/60 border border-white/10 rounded-lg p-6 mb-8 relative">
                                <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none rounded-t-lg z-10" />
                                <h4 className="font-cinzel text-sm text-aged-gold mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Read an Excerpt</h4>
                                <div className="h-48 overflow-y-auto pr-4 font-tahoma text-gray-300 leading-relaxed text-sm scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent whitespace-pre-line">
                                    {currentBook.excerpt}
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none rounded-b-lg z-10" />
                            </div>

                            {/* Stripe Checkout Mock UI */}
                            <div className="bg-gray-900 border border-white/20 p-6 rounded-lg flex items-center justify-between">
                                <span className="font-cinzel text-2xl text-white">{currentBook.price}</span>
                                <button className="bg-aged-gold hover:bg-yellow-500 text-black font-tahoma uppercase tracking-widest px-8 py-3 transition-colors border-2 border-transparent hover:border-white shadow-lg flex items-center gap-2">
                                    <span>Purchase</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
