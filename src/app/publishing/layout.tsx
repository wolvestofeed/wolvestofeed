import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Books & Publishing | Wolves To Feed",
    description: "Read \"On the Edge of Greatness\" and other publications by the Wolves To Feed collective to discover powerful wellness frameworks and practices.",
    keywords: ["Men's wellness books", "On the Edge of Greatness", "personal transformation", "workbook", "integrated practice"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
