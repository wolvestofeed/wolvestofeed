import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wolves To Feed Podcast | The Practice Engine",
    description: "Listen to the Wolves To Feed podcast. Brian and Joshin discuss wellness practices through body, mind, heart, and spirit, sharing real demonstrations for modern life.",
    keywords: ["Men's podcast", "wellness podcast", "qigong", "mid-life health", "spiritual growth", "Joshin Robert Bogatin", "Brian Winters", "The Practice Engine"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
