import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wolves To Feed | The Integrated Lifestyle Collective for Men",
  description: "An integrated wellness collective for conscious men in their second half of life seeking physical discipline, wisdom, and conscious embodiment.",
  keywords: ["Men's wellness", "mid-life", "personal development", "integrated lifestyle", "wisdom", "discipline", "brotherhood", "Wolves To Feed"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} bg-obsidian text-white antialiased flex flex-col min-h-screen`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
