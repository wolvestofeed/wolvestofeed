import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coaching & The Forge | Wolves To Feed",
    description: "Multi-disciplinary training designed to integrate the Shadow and unleash the Spirit. Learn Yoga, Qigong, Nutrition, Kundalini, and Meditation with our expert coaches.",
    keywords: ["Men's coaching", "life coaching", "fitness training", "qigong instruction", "shadow work", "ayurveda", "physical conditioning", "mental models"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
