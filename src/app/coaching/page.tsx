export default function CoachingPage() {
    const services = [
        { name: "Yoga", description: "Asana practice for flexibility, balance, and centered presence." },
        { name: "Qigong", description: "Cultivate life-force energy through breath and movement." },
        { name: "Nutrition", description: "Fuel the body optimally for sustained fire and focus." },
        { name: "Kundalini", description: "Awaken latent creative potential and nervous system resilience." },
        { name: "Ayurveda", description: "Align your lifestyle with ancient principles of holistic balance." },
        { name: "Fitness", description: "Physical conditioning to sharpen the instrument of the self." },
        { name: "Meditation", description: "Master the mind and witness the shadow without attachment." }
    ];

    const pricing = [
        { title: "Single Session", time: "75 min", price: "$75", description: "A focused, standalone deep dive into your practice." },
        { title: "4-Pack Bundle", time: "4 × 75 min", price: "$270", description: "Commit to continuous growth. Includes a 10% discount.", highlight: true },
        { title: "12-Pack Bundle", time: "12 × 75 min", price: "$720", description: "Transformative long-term mastery. Includes a 20% discount." },
    ];

    return (
        <div className="min-h-screen bg-obsidian text-white pt-12 pb-24">
            <div className="max-w-6xl mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="font-cinzel text-5xl md:text-6xl text-aged-gold mb-6 smoke-effect">The Forge: Coaching</h1>
                    <p className="font-tahoma text-xl text-gray-300 max-w-2xl mx-auto">
                        Guidance for the finder. Multi-disciplinary training designed to integrate the Shadow and unleash the Spirit.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mb-24">
                    <h2 className="font-cinzel text-3xl text-gray-100 mb-8 border-b border-white/10 pb-4 text-center md:text-left">Disciplines</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((svc, idx) => (
                            <div key={idx} className="bg-gray-900 border border-white/10 p-6 rounded-lg hover:border-fire-orange transition-colors group">
                                <h3 className="font-cinzel text-xl text-aged-gold group-hover:text-fire-orange transition-colors mb-3">{svc.name}</h3>
                                <p className="font-tahoma text-gray-400 text-sm leading-relaxed">{svc.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing Bundles */}
                <div className="mb-24">
                    <h2 className="font-cinzel text-3xl text-gray-100 mb-8 border-b border-white/10 pb-4 text-center md:text-left">Investment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricing.map((pkg, idx) => (
                            <div key={idx} className={`relative flex flex-col p-8 rounded-lg border ${pkg.highlight ? "border-aged-gold shadow-[0_4px_20px_rgba(212,175,55,0.15)] bg-gradient-to-b from-gray-900 to-black" : "border-white/10 bg-gray-950"} hover:-translate-y-1 transition-transform duration-300`}>
                                {pkg.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-aged-gold text-black font-cinzel text-xs py-1 px-4 rounded-full font-bold tracking-widest">RECOMMENDED</div>
                                )}
                                <h3 className="font-cinzel text-2xl text-white mb-2 text-center">{pkg.title}</h3>
                                <div className="text-center font-tahoma text-aged-gold mb-4 text-4xl">{pkg.price}</div>
                                <div className="text-center text-gray-400 text-sm mb-6 uppercase tracking-wider">{pkg.time}</div>
                                <p className="font-tahoma text-gray-400 text-sm text-center flex-grow mb-8">{pkg.description}</p>
                                <button className={`w-full py-3 font-tahoma uppercase tracking-widest text-sm transition-colors border ${pkg.highlight ? "bg-aged-gold text-black border-aged-gold hover:bg-yellow-500 hover:border-yellow-500" : "bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50"}`}>
                                    Initialize
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dubsado iFrame Scheduler */}
                <div className="bg-black/80 border border-white/10 rounded-xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/wolves to feed poster 1.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="relative text-center mb-8">
                        <h2 className="font-cinzel text-3xl text-fire-orange mb-4 ember-effect">Enter The Forge</h2>
                        <p className="font-tahoma text-gray-400">Select your discipline and book your session below.</p>
                    </div>
                    <div className="w-full h-[600px] bg-gray-950 border border-white/5 flex items-center justify-center rounded-lg shadow-inner">
                        {/* Replace with actual Dubsado script/iframe when API key is provided */}
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center animate-pulse">
                                <span className="text-white/30 text-2xl">⏳</span>
                            </div>
                            <p className="font-mono text-white/50 text-sm">Loading Client Portal...</p>
                            <p className="font-tahoma text-white/30 text-xs mt-2">(Dubsado iFrame Placeholder)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
