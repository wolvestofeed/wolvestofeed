export interface Mood {
    id: string;
    label: string;
    description: string;
    icon: string;
    color: string;
    suggestedLevers: string[];
    suggestedEdges: string[];
}

export const moods: Mood[] = [
    {
        id: "worked-up",
        label: "Worked Up",
        description: "Heated, agitated, can't sit still. Energy is high and scattered.",
        icon: "🔥",
        color: "border-fire-orange text-fire-orange",
        suggestedLevers: ["body", "feeling"],
        suggestedEdges: ["body", "spirit"],
    },
    {
        id: "anxious",
        label: "Anxious",
        description: "Tight chest, racing thoughts, catastrophizing the future.",
        icon: "🌊",
        color: "border-spirit-blue text-spirit-blue",
        suggestedLevers: ["body", "thinking"],
        suggestedEdges: ["career", "legacy"],
    },
    {
        id: "angry",
        label: "Angry",
        description: "Frustrated, resentful, ready to fight or shut down.",
        icon: "⚡",
        color: "border-shadow-red text-shadow-red",
        suggestedLevers: ["body", "feeling"],
        suggestedEdges: ["intimacy", "career"],
    },
    {
        id: "numb",
        label: "Numb",
        description: "Checked out. Flat. Going through the motions without feeling anything.",
        icon: "🧊",
        color: "border-gray-400 text-gray-400",
        suggestedLevers: ["body", "feeling"],
        suggestedEdges: ["spirit", "intimacy"],
    },
    {
        id: "scattered",
        label: "Scattered",
        description: "Too many tabs open. Can't focus. Spinning in circles.",
        icon: "💨",
        color: "border-white/60 text-white/60",
        suggestedLevers: ["thinking", "body"],
        suggestedEdges: ["career", "spirit"],
    },
    {
        id: "stuck",
        label: "Stuck",
        description: "Paralyzed. Know I should act but can't move. Weighted down.",
        icon: "🪨",
        color: "border-aged-gold text-aged-gold",
        suggestedLevers: ["thinking", "feeling"],
        suggestedEdges: ["legacy", "career"],
    },
    {
        id: "grieving",
        label: "Grieving",
        description: "Loss sitting heavy. Mourning what didn't happen, what won't come back.",
        icon: "🕯️",
        color: "border-amber-300/60 text-amber-300/60",
        suggestedLevers: ["feeling", "body"],
        suggestedEdges: ["legacy", "intimacy"],
    },
    {
        id: "lonely",
        label: "Lonely",
        description: "Pack hunger. No one really knows me. Isolated even in a crowd.",
        icon: "🐺",
        color: "border-spirit-blue/70 text-spirit-blue/70",
        suggestedLevers: ["feeling", "body"],
        suggestedEdges: ["intimacy", "spirit"],
    },
];

export function getMoodById(id: string): Mood | undefined {
    return moods.find((m) => m.id === id);
}
