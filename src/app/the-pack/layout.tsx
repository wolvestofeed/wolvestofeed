import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Pack | Wolves To Feed Community",
    description: "Join The Pack, an exclusive wellness collective and community for men to share practices, attend intensive bootcamps, and build authentic connections.",
    keywords: ["Men's community", "shadow work", "wellness collective", "mens groups", "inner den", "physical discipline", "brotherhood"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
