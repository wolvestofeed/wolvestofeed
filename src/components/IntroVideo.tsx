"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, RotateCcw } from "lucide-react";

interface IntroVideoProps {
    onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFading, setIsFading] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    // Once the first frame is loaded, pause and wait 2.5 seconds before playing
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

    const handleToggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const handleReplay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsFading(false);
        }
    };

    const btnClass =
        "flex items-center gap-2 px-4 py-2.5 text-white/60 hover:text-white text-sm font-tahoma uppercase tracking-[0.15em] transition-colors duration-300 border border-white/20 hover:border-white/50 rounded-sm backdrop-blur-sm bg-black/20";

    return (
        <AnimatePresence>
            {!isFading ? (
                <motion.div
                    key="intro-video"
                    className="relative w-full min-h-[calc(100vh-80px)] bg-black flex items-center justify-center overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    onAnimationComplete={(definition) => {
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

                    {/* Video Controls */}
                    <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
                        {/* Mute / Unmute */}
                        <button onClick={handleToggleMute} className={btnClass} aria-label={isMuted ? "Unmute" : "Mute"}>
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>

                        {/* Replay */}
                        <button onClick={handleReplay} className={btnClass} aria-label="Replay">
                            <RotateCcw className="w-4 h-4" />
                        </button>

                        {/* Skip Intro */}
                        <button onClick={handleSkip} className={btnClass}>
                            Skip Intro ›
                        </button>
                    </div>
                </motion.div>
            ) : (
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
