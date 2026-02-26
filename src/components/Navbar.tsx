import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-obsidian/80 backdrop-blur-md border-b border-white/10">
            <div className="font-cinzel text-xl tracking-widest text-aged-gold">
                <Link href="/">WOLVES TO FEED</Link>
            </div>
            <div className="flex gap-8 font-tahoma text-sm uppercase tracking-wider">
                <Link href="/" className="hover:text-fire-orange transition-colors">Home</Link>
                <Link href="/podcast" className="hover:text-fire-orange transition-colors">Podcast</Link>
                <Link href="/the-pack" className="hover:text-fire-orange transition-colors">The Pack</Link>
                <Link href="/coaching" className="hover:text-fire-orange transition-colors">Coaching</Link>
                <Link href="/publishing" className="hover:text-fire-orange transition-colors">Publishing</Link>
            </div>
        </nav>
    );
}
