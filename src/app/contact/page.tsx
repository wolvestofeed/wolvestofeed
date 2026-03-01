import GoogleFormEmbed from "@/components/GoogleFormEmbed";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-obsidian text-white pt-12 pb-24">
            <div className="max-w-4xl mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="font-cinzel text-5xl md:text-6xl text-aged-gold mb-6 smoke-effect">Reach Out</h1>
                    <p className="font-tahoma text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Whether you seek guidance, collaboration, or to speak within the smoke, we are listening.
                    </p>
                </div>

                {/* Contact Form Container */}
                <div className="bg-black/80 border border-white/10 rounded-xl p-1 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wolves to feed poster 1.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="relative p-8 text-center flex flex-col items-center">
                        <h2 className="font-cinzel text-3xl text-fire-orange mb-8 uppercase tracking-widest text-[#D4AF37]">Howl Out To Us</h2>

                        <GoogleFormEmbed
                            formUrl="https://forms.gle/tobx4KoUm5wnCAGw7"
                            title="General Contact Form"
                            height={700}
                        />
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                    <div className="border-l border-aged-gold/30 pl-8">
                        <h3 className="font-cinzel text-xl text-aged-gold mb-4 uppercase">Direct Contact</h3>
                        <p className="font-tahoma text-gray-400 text-base">
                            For urgent matters or specific inquiries regarding the Collective, please reach out via the form above.
                        </p>
                    </div>
                    <div className="border-l border-aged-gold/30 pl-8">
                        <h3 className="font-cinzel text-xl text-aged-gold mb-4 uppercase">Frequency</h3>
                        <p className="font-tahoma text-gray-400 text-base">
                            We aim to respond to all transmissions within 48 hours of reception.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
