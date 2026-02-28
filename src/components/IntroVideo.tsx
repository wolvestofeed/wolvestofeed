"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroVideoProps {
    onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFading, setIsFading] = useState(false);
    const [videoReady, setVideoReady] = useState(false);

    // Once the first frame is loaded, pause and wait 4 seconds before playing
    useEffect(() => {
        if (!videoReady || !videoRef.current) return;

        videoRef.current.pause();

        const timer = setTimeout(() => {
            videoRef.current?.play();
        }, 2500);

        return () => clearTimeout(timer);
    }, [videoReady]);

    const handleLoadedData = () => {
        setVideoReady(true);
    };

    const handleVideoEnd = () => {
        setIsFading(true);
    };

    const handleSkip = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        onComplete();
    };

    return (
        <AnimatePresence>
            {!isFading ? (
                <motion.div
                    key="intro-video"
                    className="relative w-full min-h-[calc(100vh-80px)] bg-black flex items-center justify-center overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    onAnimationComplete={(definition) => {
                        // Only call onComplete when the exit animation finishes
                        if (definition === "exit") {
                            onComplete();
                        }
                    }}
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        onLoadedData={handleLoadedData}
                        onEnded={handleVideoEnd}
                        className="w-full h-full absolute inset-0 object-cover"
                    >
                        <source
                            src="/wtf_intro_15sec_spirit_howl-2.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Skip Intro Button */}
                    <button
                        onClick={handleSkip}
                        className="absolute bottom-8 right-8 z-10 px-5 py-2.5 text-white/60 hover:text-white text-sm font-tahoma uppercase tracking-[0.15em] transition-colors duration-300 border border-white/20 hover:border-white/50 rounded-sm backdrop-blur-sm bg-black/20"
                    >
                        Skip Intro ›
                    </button>
                </motion.div>
            ) : (
                /* Fade-to-black layer — animates out after isFading is set */
                <motion.div
                    key="fade-black"
                    className="w-full min-h-[calc(100vh-80px)] bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    onAnimationComplete={() => onComplete()}
                />
            )}
        </AnimatePresence>
    );
}
