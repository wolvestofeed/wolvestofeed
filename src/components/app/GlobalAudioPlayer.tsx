"use client";

import { useAudioPlayer } from "./AudioPlayerProvider";
import { Play, Pause, X, Volume2 } from "lucide-react";

export default function GlobalAudioPlayer() {
    const { currentTrack, isPlaying, duration, currentTime, togglePlayPause, clearTrack, seekTo } = useAudioPlayer();

    if (!currentTrack) return null;

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        seekTo(Number(e.target.value));
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-8 md:pb-4 shadow-2xl safe-area-pb">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-tahoma truncate">{currentTrack.title}</h4>
                    {currentTrack.subtitle && (
                        <p className="text-gray-400 text-xs font-tahoma truncate">{currentTrack.subtitle}</p>
                    )}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 shrink-0">
                    <button
                        onClick={togglePlayPause}
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5 fill-current" />
                        ) : (
                            <Play className="w-5 h-5 fill-current ml-1" />
                        )}
                    </button>

                    <button
                        onClick={clearTrack}
                        className="p-2 text-gray-500 hover:text-white transition-colors"
                        title="Close Player"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-4xl mx-auto mt-2 flex items-center gap-3">
                <span className="text-[10px] text-gray-500 font-mono w-8 text-right">{formatTime(currentTime)}</span>
                <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                />
                <span className="text-[10px] text-gray-500 font-mono w-8">{formatTime(duration)}</span>
            </div>
        </div>
    );
}
