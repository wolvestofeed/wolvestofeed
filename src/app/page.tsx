"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Wind } from "lucide-react";

export default function Home() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  // Background transition logic
  let leftOverlay = "bg-transparent";
  let rightOverlay = "bg-transparent";

  if (hoveredSide === "left") {
    leftOverlay = "bg-black/20 backdrop-blur-sm";
    rightOverlay = "bg-black/90";
  } else if (hoveredSide === "right") {
    rightOverlay = "bg-black/20 backdrop-blur-sm";
    leftOverlay = "bg-black/90";
  }

  return (
    <div className="flex flex-col min-h-screen bg-obsidian">

      {/* Dedicated Tagline Banner - Resized for visibility */}
      <div className="w-full py-6 md:py-10 border-b border-white/5 flex flex-col items-center justify-center relative z-20 bg-obsidian">
        <h2 className="font-cinzel text-xl md:text-3xl lg:text-4xl text-aged-gold tracking-[0.1em] md:tracking-[0.2em] text-center px-8 leading-tight uppercase drop-shadow-2xl">
          Integrated Wellness Collective <br className="hidden md:block" />
          <span className="text-white/80 text-base md:text-xl font-bold mt-4 block tracking-[0.3em] md:tracking-[0.5em]">
            For Men In Mid-Life
          </span>
        </h2>
      </div>

      {/* Interactive Split Screen Area */}
      <div className="relative min-h-[calc(100vh-240px)] w-full overflow-hidden flex flex-col flex-grow">
        {/* Background Poster layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wolves to feed poster 1.png"
            alt="Wolves To Feed Poster"
            fill
            priority
            className="object-contain opacity-60 mix-blend-lighten"
          />
        </div>

        {/* Split Screen interactable areas */}
        <div className="flex-grow flex w-full relative z-10">

          {/* Left Side: Shadow Wolf / Smoke */}
          <div
            className={`w-1/2 h-full flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-in-out ${leftOverlay}`}
            onMouseEnter={() => setHoveredSide("left")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Beckoning Icon - Enhanced Illumination */}
              <AnimatePresence>
                {!hoveredSide && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  >
                    <h2 className="font-cinzel text-3xl md:text-5xl text-gray-300 uppercase tracking-widest mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Shadow</h2>
                    <Wind className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Revealable Content */}
              <div className={`text-center space-y-6 transition-all duration-700 max-w-md px-8 py-12 rounded-lg
                ${hoveredSide === "left" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
              >
                <h2 className="font-cinzel text-4xl md:text-6xl text-shadow-red smoke-effect tracking-wider drop-shadow-lg">
                  Shadow
                </h2>
                <p className="font-tahoma text-xl text-gray-300 drop-shadow-md leading-relaxed">
                  Embrace the untamed self. Navigate the distractions and confront your raw nature in the smoke.
                </p>
                <Link href="/the-pack" className="inline-block mt-8 px-10 py-4 border border-[#b0c4b0] text-[#b0c4b0] hover:bg-[#b0c4b0]/10 transition-colors font-tahoma uppercase tracking-widest text-sm smoke-effect backdrop-blur-md">
                  Enter The Smoke
                </Link>
              </div>
            </div>
          </div>

          {/* Center Divider line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 z-10 pointer-events-none" />

          {/* Right Side: Spirit Wolf / Ember */}
          <div
            className={`w-1/2 h-full flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-in-out ${rightOverlay}`}
            onMouseEnter={() => setHoveredSide("right")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Beckoning Icon - Enhanced Illumination */}
              <AnimatePresence>
                {!hoveredSide && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror" }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  >
                    <h2 className="font-cinzel text-3xl md:text-5xl text-fire-orange uppercase tracking-widest mb-4 drop-shadow-[0_0_15px_rgba(226,88,34,0.6)]">Spirit</h2>
                    <Flame className="w-8 h-8 md:w-12 md:h-12 text-fire-orange drop-shadow-[0_0_20px_rgba(226,88,34,0.8)]" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Revealable Content */}
              <div className={`text-center space-y-6 transition-all duration-700 max-w-md px-8 py-12 rounded-lg
                ${hoveredSide === "right" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
              >
                <h2 className="font-cinzel text-4xl md:text-6xl text-spirit-blue ember-effect tracking-wider drop-shadow-lg">
                  Spirit
                </h2>
                <p className="font-tahoma text-xl text-blue-50 drop-shadow-md leading-relaxed">
                  Ignite creation. Integrate the self through discipline, focus, and illumination required to walk your path.
                </p>
                <Link href="/podcast" className="inline-block mt-8 px-10 py-4 bg-fire-orange/20 border border-fire-orange text-white hover:bg-fire-orange transition-colors font-tahoma uppercase tracking-widest text-sm ember-effect backdrop-blur-md">
                  Seek The Fire
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
