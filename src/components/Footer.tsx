import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-8 flex justify-between items-center bg-obsidian border-t border-white/10 mt-auto">
            <div className="flex items-center gap-4">
                <Image src="/WTF Pub Mark white.png" alt="WTF Mark White" width={50} height={50} className="object-cover rounded-full" />
            </div>
            <div className="text-sm font-tahoma text-white/50">
                &copy; {new Date().getFullYear()} Wolves To Feed. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
                <Image src="/WTF Pub Mark black.png" alt="WTF Mark Black" width={50} height={50} className="object-cover rounded-full border border-white/20" />
            </div>
        </footer>
    );
}
