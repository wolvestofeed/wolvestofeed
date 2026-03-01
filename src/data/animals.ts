export interface AnimalMedicine {
    id: string;
    name: string;
    icon: string;
    edge: string;
    subtitle: string;
    coreTeaching: string;
    pattern: { stage: string; description: string }[];
    color: string; // tailwind color class accent
}

export const animals: AnimalMedicine[] = [
    {
        id: "phoenix",
        name: "Phoenix",
        icon: "🔥",
        edge: "spirit",
        subtitle: "Sacred Combustion",
        coreTeaching:
            "The phoenix doesn't simply grow older — it periodically burns to ash and rises in a new form. Spiritual transformation isn't linear enlightenment; it's cycles of fire, ash, and emergence.",
        pattern: [
            { stage: "Fire", description: "Old beliefs, identities, and spiritual structures combust" },
            { stage: "Ash", description: "Sitting in the residue of what used to hold your practice" },
            { stage: "Emergence", description: "Rising with less ego, more humility, deeper roots" },
        ],
        color: "text-amber-400",
    },
    {
        id: "spider",
        name: "Spider",
        icon: "🕷️",
        edge: "career",
        subtitle: "Weaving from Silk",
        coreTeaching:
            "You are the spider. The silk is your essential Self — your worldview, talents, and integrity. The web is what you build in the world. Webs shred in storms, but the spider and the silk survive.",
        pattern: [
            { stage: "Spinning", description: "Building beautiful webs — businesses, roles, clients, recognition" },
            { stage: "Storm", description: "External forces or internal flaws tear the web apart" },
            { stage: "Ballooning", description: "Releasing silk into the wind, drifting to new ground" },
            { stage: "Spinning Again", description: "Starting over with the same essential capacity" },
        ],
        color: "text-fire-orange",
    },
    {
        id: "chrysalis",
        name: "Chrysalis",
        icon: "🦋",
        edge: "body",
        subtitle: "Metamorphosis & Seasons",
        coreTeaching:
            "The Monarch chrysalis reminds us that there are seasons when doing more reps won't help — what needs to happen is dissolving and reforming from the inside out. Some chrysalises are chosen, some are forced, some never fully open.",
        pattern: [
            { stage: "Caterpillar", description: "Peak performance, building capacity, high effort" },
            { stage: "Chrysalis", description: "Forced rest, injury, illness, transformation you didn't choose" },
            { stage: "Butterfly", description: "Emergence into a new form — different, not necessarily 'better'" },
            { stage: "Seasons", description: "Spring (building), Summer (peak), Fall (decline), Winter (rest/repair)" },
        ],
        color: "text-emerald-400",
    },
    {
        id: "wolf",
        name: "Wolf",
        icon: "🐺",
        edge: "intimacy",
        subtitle: "Pack, Howl & Lone Wolf Reality",
        coreTeaching:
            "Wolves are built for pack life — hunting together, raising young communally, howling to locate each other across distances. But sometimes a wolf lives alone, not by choice but by circumstance. The lone wolf must learn to survive without the pack while honoring the pack hunger that never fully goes away.",
        pattern: [
            { stage: "Pack Hunger", description: "The deep need for belonging, brotherhood, being fully known" },
            { stage: "Exile / Isolation", description: "Almost fully known, then exiled; no men to connect with; solo life" },
            { stage: "Howl", description: "The call you send out, hoping for response" },
            { stage: "Lone Wolf Wisdom", description: "Learning from solitude, finding your heartbeat, carrying dignity alone" },
        ],
        color: "text-spirit-blue",
    },
    {
        id: "eagle",
        name: "Eagle",
        icon: "🦅",
        edge: "legacy",
        subtitle: "Altitude, Nest & Feather Molting",
        coreTeaching:
            "Eagles build their lives at altitude — seeing vast territory, soaring on thermals, creating solid nests for future generations. But when the nest is small, the view is uncertain, and there are no heirs, the eagle adapts by conserving energy, exploring new territory and roosting communally. The feathers molt, the old identity releases, and wisdom becomes the inheritance.",
        pattern: [
            { stage: "Eagle Altitude", description: "The long view, seeing 50–100 years ahead" },
            { stage: "Small Nest", description: "Uncertain retirement, no financial security, no children to inherit your work" },
            { stage: "Big Sky Map", description: "Reframing legacy from material inheritance to lived impact" },
            { stage: "Feather Molting", description: "Releasing attachment to outcomes, letting old identity fall away" },
        ],
        color: "text-aged-gold",
    },
];

export function getAnimalByEdge(edge: string): AnimalMedicine | undefined {
    return animals.find((a) => a.edge === edge);
}

export function getAnimalById(id: string): AnimalMedicine | undefined {
    return animals.find((a) => a.id === id);
}
