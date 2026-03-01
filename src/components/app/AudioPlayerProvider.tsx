"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";

interface AudioTrack {
    title: string;
    subtitle?: string;
    url: string;
}

interface AudioPlayerContextType {
    currentTrack: AudioTrack | null;
    isPlaying: boolean;
    duration: number;
    currentTime: number;
    playTrack: (track: AudioTrack) => void;
    togglePlayPause: () => void;
    seekTo: (time: number) => void;
    clearTrack: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize audio element
    useEffect(() => {
        audioRef.current = new Audio();

        const audio = audioRef.current;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration || 0);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("ended", onEnded);
            audio.pause();
        };
    }, []);

    // Handle track changes
    useEffect(() => {
        if (!audioRef.current || !currentTrack) return;

        const audio = audioRef.current;

        // Only load and play if it's a new URL
        if (audio.src !== window.location.origin + currentTrack.url && audio.src !== currentTrack.url) {
            audio.src = currentTrack.url;
            audio.load();
            if (isPlaying) {
                audio.play().catch(e => console.error("Audio playback failed", e));
            }
        }
    }, [currentTrack, isPlaying]);

    const playTrack = (track: AudioTrack) => {
        // If it's the same track and paused, just resume
        if (currentTrack?.url === track.url) {
            setIsPlaying(true);
            audioRef.current?.play();
            return;
        }

        setCurrentTrack(track);
        setIsPlaying(true);
        // Playback starts via useEffect
    };

    const togglePlayPause = () => {
        if (!audioRef.current || !currentTrack) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio playback failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    const seekTo = (time: number) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const clearTrack = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setCurrentTrack(null);
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
    };

    return (
        <AudioPlayerContext.Provider
            value={{
                currentTrack,
                isPlaying,
                duration,
                currentTime,
                playTrack,
                togglePlayPause,
                seekTo,
                clearTrack
            }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
}

export function useAudioPlayer() {
    const context = useContext(AudioPlayerContext);
    if (context === undefined) {
        throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
    }
    return context;
}
