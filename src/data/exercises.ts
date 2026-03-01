export type EdgeDomain = "spirit" | "career" | "body" | "intimacy" | "legacy" | "foundation";
export type Lever = "thinking" | "feeling" | "body";
export type ExerciseType = "reflection" | "assessment" | "practice" | "breathing" | "movement" | "reframe" | "mapping";

export interface ExerciseStep {
    instruction: string;
    prompt?: string; // optional journaling prompt for this step
    duration?: number; // optional seconds for timed steps
    rightNowInstruction?: string; // crisis-framed instruction for Right Now mode
    rightNowPrompt?: string; // crisis-framed prompt for Right Now mode
    rightNowAudio?: string; // path to audio file for this step in Right Now mode
}

export interface Exercise {
    id: string;
    title: string;
    subtitle: string;
    edge: EdgeDomain;
    animal: string; // animal medicine id
    lever: Lever;
    type: ExerciseType;
    moods: string[]; // mood ids this exercise helps with
    duration: number; // estimated minutes
    description: string;
    rightNowDescription: string; // crisis-framed "Right Now Support" language
    rightNowSubtitle?: string; // crisis-framed one-liner for Right Now mode
    rightNowIntroAudio?: string; // path to the intro audio file for Right Now mode
    steps: ExerciseStep[];
}

export const exercises: Exercise[] = [
    // ═══════════════════════════════════════
    // FOUNDATION (Cross-Domain)
    // ═══════════════════════════════════════
    {
        id: "core-inquiry",
        title: "Core Inquiry Questions",
        subtitle: "Where are you on the edge right now?",
        rightNowSubtitle: "Something just knocked you sideways — name it",
        edge: "foundation",
        animal: "phoenix",
        lever: "thinking",
        type: "reflection",
        moods: ["worked-up", "anxious", "angry", "numb", "scattered", "stuck", "lonely"],
        duration: 15,
        description:
            "Before diving into domain-specific work, answer these foundational questions to name where you are and what's generating your current reality.",
        rightNowDescription:
            "Something just happened: you snapped, shut down, overdrank, scrolled, or froze. Instead of hating yourself, this exercise walks backward from what you just did to the emotions, thoughts, and core belief underneath. It's a way to see the wiring clearly enough to change one part of the loop.",
        rightNowIntroAudio: "/app-audio/exercises/core-inquiry/intro.wav",
        steps: [
            { instruction: "Where am I on an Edge right now?", prompt: "Career deal about to close? Relationship deepening? Body recovering? Spiritual practice intensifying?", rightNowAudio: "/app-audio/exercises/core-inquiry/step-1.wav" },
            { instruction: "Is this an Edge of Greatness or Edge of Collapse?", prompt: "Greatness: Breakthrough feels close, high tension, optimism meets uncertainty.\nCollapse: Void opening, losing footing, momentum stalled, system breaking down.", rightNowAudio: "/app-audio/exercises/core-inquiry/step-2.wav" },
            { instruction: "What is the 'lagging indicator' I'm experiencing?", prompt: "Unemployment, chronic pain, loneliness, financial stress, creative block?", rightNowAudio: "/app-audio/exercises/core-inquiry/step-3.wav" },
            { instruction: "What behaviors have been creating this reality?", prompt: "Overwork, people-pleasing, ignoring body signals, avoiding vulnerability, clinging to outdated goals?", rightNowAudio: "/app-audio/exercises/core-inquiry/step-4.wav" },
            { instruction: "What feelings drive those behaviors?", prompt: "Fear of failure, shame about not measuring up, grief over lost dreams, rage at injustice?", rightNowAudio: "/app-audio/exercises/core-inquiry/step-5.wav" },
            { instruction: "What thoughts generate those feelings?", prompt: "I'm not good enough. I should be farther along. My body is betraying me. I'll always be alone.", rightNowAudio: "/app-audio/exercises/core-inquiry/step-6.wav" },
            { instruction: "What core belief sits underneath it all?", prompt: "I'm unworthy unless I succeed. Love is conditional. My value comes from achievement. Vulnerability is weakness.", rightNowAudio: "/app-audio/exercises/core-inquiry/step-7.wav" },
            { instruction: "If I could pull one lever now — thinking, feeling, or body — which would have the most impact?", prompt: "Name the lever and why.", rightNowAudio: "/app-audio/exercises/core-inquiry/step-8.wav" },
        ],
    },
    {
        id: "belief-to-reality",
        title: "Belief-to-Reality Sequence",
        subtitle: "Trace your reality backward to its root",
        rightNowSubtitle: "You just reacted — trace it back to the wire",
        edge: "foundation",
        animal: "phoenix",
        lever: "thinking",
        type: "mapping",
        moods: ["stuck", "scattered", "anxious"],
        duration: 12,
        description:
            "Review the sequence that generates your lived experience: BELIEFS → THOUGHTS → FEELINGS → EMOTIONS → BEHAVIORS → PERCEIVED REALITY. Trace it backward for the edge you're working.",
        rightNowDescription:
            "Something just happened: you snapped, shut down, overdrank, scrolled, or froze. Instead of hating yourself, this exercise walks backward from what you just did to the emotions, thoughts, and core belief underneath. It's a way to see the wiring clearly enough to change one part of the loop.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name the reality you're experiencing right now.", prompt: "What is the situation or outcome you're living in?", rightNowInstruction: "Name what just happened.", rightNowPrompt: "What just happened that you're not proud of - yelling, scrolling, drinking, shutting down, picking a fight, checking out? Name the behavior." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What behaviors are creating this reality?", prompt: "What are you doing (or not doing) that maintains this?", rightNowInstruction: "What behaviors led up to this?", rightNowPrompt: "What actions or patterns led up to this moment? List one to three." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What emotions are driving those behaviors?", prompt: "Name the emotional fuel behind the action.", rightNowInstruction: "What emotions were driving those behaviors?", rightNowPrompt: "What were you feeling right before - angry, scared, ashamed, lonely, bored, numb? Name the dominant emotion." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What feelings sit underneath those emotions?", prompt: "Dig deeper — what's the quieter feeling below the surface emotion?", rightNowInstruction: "What feelings sit underneath those emotions?", rightNowPrompt: "Under that emotion, what quieter feeling was present - disappointment, grief, humiliation, hopelessness, jealousy, exhaustion? Write it." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What thoughts generate those feelings?", prompt: "What story are you telling yourself?", rightNowInstruction: "What thoughts generated those feelings?", rightNowPrompt: "What sentence was running through your head? Start with something like 'I always…', 'They never…', or 'I'll never…'. Write the exact thought." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What core belief sits at the root?", prompt: "Name it. This is the foundation of the whole sequence.", rightNowInstruction: "What core belief sits at the root?", rightNowPrompt: "If that thought were always true, what would it say about you or the world? Examples: 'I'm not enough,' 'No one stays,' 'It's all on me,' 'Nothing works out for me.' Write your core belief." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Which layer is easiest for you to shift right now?", prompt: "You don't have to change the deepest layer first. Start where you can.", rightNowInstruction: "Which layer is easiest for you to shift right now?", rightNowPrompt: "Looking at thought, feeling, emotion, and behavior, choose the one layer you feel most able to nudge 1% differently next time and describe the tiny change you want to try." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },

    // ═══════════════════════════════════════
    // SPIRIT — Phoenix Medicine
    // ═══════════════════════════════════════
    {
        id: "ash-inventory",
        title: "Ash Inventory",
        subtitle: "When you're in the ash stage",
        rightNowSubtitle: "Everything just burned — stand in it",
        edge: "spirit",
        animal: "phoenix",
        lever: "feeling",
        type: "reflection",
        moods: ["numb", "grieving"],
        duration: 10,
        description:
            "When old spiritual structures are gone — after collapse, when everything you built your practice on is ash — use this tool to name what burned and find what survived.",
        rightNowDescription:
            "When everything you trusted spiritually feels like it just burned down - practice, beliefs, even God - this exercise helps you stand in the ashes without abandoning yourself. You're not rebuilding a whole path tonight. You're just naming what died and what's still quietly alive in you.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name what burned.", prompt: "Example: My belief that if I meditate daily and keep my vows, I'll be protected from career failure.", rightNowInstruction: "Name what burned.", rightNowPrompt: "Something just collapsed spiritually. A belief, a practice, your faith in how life works. Right now, in plain words, name what feels dead or gone." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Acknowledge the grief.", prompt: "Example: I feel betrayed by the universe. I did everything 'right' and still fell.", rightNowInstruction: "Acknowledge the grief.", rightNowPrompt: "Notice what's moving in your chest, throat, or gut as you look at that loss. Write one sentence starting with 'I feel…'. Give yourself permission to be angry, sad, betrayed, or numb." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Identify what survived.", prompt: "What remains when the structure is gone? Your breath? Your vows? Capacity to sit? Compassion despite pain?", rightNowInstruction: "Identify what survived.", rightNowPrompt: "Even in this wreckage, something hasn't burned. Your breath? A value you refuse to drop? One practice you can still do? Name one thing that's still quietly alive in you right now." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "kensho-tracking",
        title: "Kensho Tracking",
        subtitle: "Track your moments of breakthrough",
        rightNowSubtitle: "You've had clarity before — remember it now",
        edge: "spirit",
        animal: "phoenix",
        lever: "thinking",
        type: "mapping",
        moods: ["numb", "scattered"],
        duration: 10,
        description:
            "Track your moments of breakthrough — the times when something opened, even if it didn't last.",
        rightNowDescription:
            "Sometimes you get a flash of clarity - a moment when you know who you are or what matters - and then life goes sideways again. When you're doubting yourself right now, this practice reminds you of those glimpses so you don't mistake this hard moment for the whole story.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "When did a moment of breakthrough happen?", prompt: "Describe the timing and circumstances.", rightNowInstruction: "When did clarity happen?", rightNowPrompt: "Right now you might feel like you've never had clarity. Think back to one moment when something opened - you knew who you were, what mattered, or felt a flash of truth. When was it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What opened?", prompt: "What insight, feeling, or state became available?", rightNowInstruction: "What opened?", rightNowPrompt: "In that moment, what did you see or feel? Describe it in one or two simple lines." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What did it show you?", prompt: "What truth or possibility did that moment reveal?", rightNowInstruction: "What did it show you?", rightNowPrompt: "What did that glimpse reveal about yourself or the world that still feels true, even if your current life doesn't match it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What followed?", prompt: "Did you try to hold onto it? Did it fade? Did it create pressure to 'live up to' the experience?", rightNowInstruction: "What followed?", rightNowPrompt: "What happened after that moment? Did life change? Did you ignore it? Does remembering it create pressure or relief?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Reflect: Can these moments simply be true glimpses, without obligation?", prompt: "Do your kensho moments create pressure to 'live up' to what you saw? Or can they simply be true glimpses?", rightNowInstruction: "Reflection.", rightNowPrompt: "Are you using this glimpse to beat yourself up, or can you let it be a true moment that happened without needing you to live up to it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "practice-without-payoff",
        title: "Practice Without Payoff Reset",
        subtitle: "Release the transactional expectation",
        rightNowSubtitle: "You did the work and it didn't pay off",
        edge: "spirit",
        animal: "phoenix",
        lever: "thinking",
        type: "reframe",
        moods: ["numb", "grieving"],
        duration: 8,
        description:
            "If you've been practicing without the life results you expected, this tool helps you release the transaction and reconnect to practice for its own sake.",
        rightNowDescription:
            "You've done the work. You've meditated, prayed, showed up - and the scoreboard still says you're losing. In this moment, when you're wondering 'what's the point,' this tool helps you release the deal you tried to make with the universe and reconnect with practice as a way to stay human, not to win.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "What did I expect practice to give me?", prompt: "Career success, financial security, relationship stability, respect, community, sense of arrival?", rightNowInstruction: "What did I expect practice to give me?", rightNowPrompt: "Right now, you might feel like practice failed you. Finish this: 'I thought if I meditated / prayed / stayed on the path, then I would get…' (career success, safety, love, respect, arrival, etc.)." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What has practice actually given me?", prompt: "Capacity to breathe through panic? Ability to return to presence? Moments of peace in chaos?", rightNowInstruction: "What has practice actually given me?", rightNowPrompt: "Look at what's real in this moment. Even in pain, what does your practice make possible right now? The ability to breathe through panic? A tiny pause before you react? A sliver of peace? Name one thing." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Can I release the transactional expectation and keep practicing anyway?", prompt: "Yes / Not yet / Working on it — and explain where you are.", rightNowInstruction: "Can I release the deal and keep practicing anyway?", rightNowPrompt: "For just today, can you practice without expecting life to reward you for it? Type the option that fits: yes, not yet, or working on it." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "spirit-lever-work",
        title: "Spirit Domain Lever Work",
        subtitle: "Pull the levers on your current spiritual edge",
        rightNowSubtitle: "One lever you can pull in the next 3 minutes",
        edge: "spirit",
        animal: "phoenix",
        lever: "thinking",
        type: "reframe",
        moods: ["worked-up", "anxious", "scattered", "stuck"],
        duration: 8,
        description:
            "Apply the three levers — Thinking, Feeling, and Body — to your current spiritual edge.",
        rightNowDescription:
            "What's the Signal right now? What System is firing? Which Lever can you pull in the next 3 minutes - thinking, feeling, or body? Apply the three levers to whatever just hit you in your spiritual life.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name your current edge in Spirit.", prompt: "Where are you on the edge right now with your spiritual life?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 1 — Thinking (Paradigm Shift): What mental model could I shift?", prompt: "Example: From 'Practice should deliver success' to 'Practice develops capacity to stand in the fire without collapsing.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 2 — Feeling (Perspective Change): What emotional interpretation could I reframe?", prompt: "Example: From 'I feel abandoned by the sacred' to 'I'm learning to carry teachings without institutional support.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 3 — Body (Physiological Reset): What practice could regulate my nervous system right now?", prompt: "Example: 10 minutes seated zazen, breath work, walking meditation, prostrations." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },

    // ═══════════════════════════════════════
    // CAREER — Spider Medicine
    // ═══════════════════════════════════════
    {
        id: "web-audit",
        title: "Web Audit",
        subtitle: "Assess the durability of your current career web",
        rightNowSubtitle: "Your work life feels fragile — find the thin strand",
        edge: "career",
        animal: "spider",
        lever: "thinking",
        type: "assessment",
        moods: ["anxious", "scattered"],
        duration: 15,
        description:
            "Assess the durability of your current career web — or the one you're building. Identify the most vulnerable strand and one action to strengthen it.",
        rightNowDescription:
            "Right now, your work life feels fragile - money, bosses, projects, the whole thing. This exercise doesn't ask you to fix your career tonight. It simply helps you see where the web is thin, so your next small move strengthens the strand that's about to snap instead of just grinding harder.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Revenue streams — Single client? Multiple?", prompt: "Assess vulnerability (High / Medium / Low) and a strengthening action.", rightNowInstruction: "Revenue streams.", rightNowPrompt: "Right now, where is your money coming from - one client, multiple sources, or nothing steady? Describe your situation in a sentence." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Cash reserves — Months of runway?", prompt: "Be honest about your buffer. What could you do to extend it?", rightNowInstruction: "Cash reserves.", rightNowPrompt: "How many months could you survive if all income stopped today? Enter the number, even if it's zero." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Partnership structure — Solo? Co-founder? Team?", prompt: "Vulnerability level and what needs clarity?", rightNowInstruction: "Partnership structure.", rightNowPrompt: "Are you solo, with a co-founder, or on a team? If there's tension or confusion, name it in one line." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Innovation vs. profit — Cutting-edge or sustainable?", prompt: "Where should you shift to create durability?", rightNowInstruction: "Innovation vs. profit.", rightNowPrompt: "Is your work mostly cutting-edge and risky, mostly focused on making money, or somewhere in between? Describe it in a few words." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Emotional attachment — Identity-fused or boundaried?", prompt: "How attached is your identity to this particular career form?", rightNowInstruction: "Emotional attachment.", rightNowPrompt: "Is your identity fused with this work, or can you see it as separate from who you are? Write a sentence about how attached you feel." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Market dependence — Niche or broad?", prompt: "Is your market concentration a risk?", rightNowInstruction: "Market dependence.", rightNowPrompt: "Are you dependent on one niche market, or do you have options? Describe your current dependence in a sentence." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Name your most vulnerable strand right now.", prompt: "Which element could tear first?", rightNowInstruction: "Most vulnerable strand right now.", rightNowPrompt: "Out of money, partnerships, identity, or market, what feels most fragile today? Name that strand." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "One action to strengthen it.", prompt: "What's the single most impactful thing you could do?", rightNowInstruction: "One action.", rightNowPrompt: "What's one small move you could take in the next 24 hours to strengthen that strand - an email, a boundary, a backup plan, a resume update? Describe the action." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "passion-venture-gate",
        title: "Passion-Venture Gate",
        subtitle: "Before launching based on passion",
        rightNowSubtitle: "You're lit up or panicked — check before you leap",
        edge: "career",
        animal: "spider",
        lever: "thinking",
        type: "assessment",
        moods: ["worked-up", "angry", "scattered"],
        duration: 10,
        description:
            "Before launching a new business or pivoting your career based on passion, run it through four gates to check viability against ego.",
        rightNowDescription:
            "You're lit up about a new idea - or panicked enough to want to blow everything up. Before you bet the farm in a moment of emotion, this tool walks you through a quick gate check so you can honor the fire without torching your life.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Gate 1: Smallest Real-World Test", prompt: "Can I test this idea with $500 and 10 hours before I commit my life to it? If yes, describe the test. If no, why am I skipping validation?", rightNowInstruction: "Gate 1: Smallest Real-World Test.", rightNowPrompt: "Before you bet your life on this idea, ask yourself: can you test it with about $500 and 10 hours? If yes, describe the test in one line. If no, write why you're skipping validation.", rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Gate 2: Life Impact Assessment", prompt: "If I pursue this for 2 years and it doesn't generate income, can I afford that? Yes (I have runway) / No (need a different approach) / Unclear (I'm gambling)", rightNowInstruction: "Gate 2: Life Impact Assessment.", rightNowPrompt: "If you pursue this for 2 years and it doesn't make money, what breaks first - finances, relationships, body, integrity? Name the part of your life you'd be risking the most.", rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Gate 3: Ego Check", prompt: "Am I chasing this because it's genuinely viable, or because I'm lit up and need to prove something?", rightNowInstruction: "Gate 3: Ego Check.", rightNowPrompt: "Right now, are you chasing this because it's genuinely viable, or because you're lit up and need to prove something? Write one honest sentence about your motive.", rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Gate 4: System Redesign", prompt: "If I proceed, what one structural element will I build differently than last time? Example: Profitability before innovation. 6-month cash reserve non-negotiable.", rightNowInstruction: "Gate 4: System Redesign.", rightNowPrompt: "If you move forward, what's one structural thing you'll do differently than last time to protect yourself? For example: 'profitability before innovation' or 'build a 6-month cash reserve first.' Write your redesign.", rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "ballooning-practice",
        title: "Ballooning Practice",
        subtitle: "When a web collapses and you need to move",
        rightNowSubtitle: "It just fell apart — grieve, then move",
        edge: "career",
        animal: "spider",
        lever: "feeling",
        type: "practice",
        moods: ["stuck", "grieving"],
        duration: 12,
        description:
            "When a web collapses and you need to move to new ground — the spider's way of recovering after a storm.",
        rightNowDescription:
            "A job, a venture, a web you spent years spinning may have just shredded. You're staring at the wreckage or scrolling job listings in a daze. This exercise helps you grieve what's gone, remember the 'silk' that's still yours, and take one small action toward new ground instead of freezing.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Acknowledge the shredded web.", prompt: "Name what's gone. Grieve it if needed. Don't bypass the loss.", rightNowInstruction: "Acknowledge the shredded web.", rightNowPrompt: "Something you built - a job, business, or project - just tore apart or is clearly ending. Write one sentence that honors the loss: 'What hurts most about this ending is…'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Identify your intact silk.", prompt: "What skills, values, and capacities do you still have?", rightNowInstruction: "Identify your intact silk.", rightNowPrompt: "Even with the web gone, your 'silk' is still here. List three skills, values, or capacities you still have today, even in pain." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Release silk into the wind.", prompt: "What small, low-stakes actions can you take to 'balloon' toward new ground? Examples: Informational interviews, freelance gigs, learning new tools, posting your work online.", rightNowInstruction: "Release silk into the wind.", rightNowPrompt: "Name two or three small, low-stakes actions you could take this week to drift toward new ground - an informational call, a freelance gig, updating your profile, learning a tool. Write them." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Land and spin.", prompt: "When you find solid ground (even temporary), start building the next web — smaller, smarter, durable.", rightNowInstruction: "Land and spin.", rightNowPrompt: "Choose one action from your list that you're willing to take first. Name it, and if possible, set a time you'll do it." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "career-lever-work",
        title: "Career Domain Lever Work",
        subtitle: "Pull the levers on your current career edge",
        rightNowSubtitle: "One lever you can pull in the next 3 minutes",
        edge: "career",
        animal: "spider",
        lever: "thinking",
        type: "reframe",
        moods: ["worked-up", "anxious", "angry", "stuck"],
        duration: 8,
        description:
            "Apply the three levers — Thinking, Feeling, and Body — to your current career edge.",
        rightNowDescription:
            "What's the Signal right now? What System is firing? Which Lever can you pull in the next 3 minutes - thinking, feeling, or body? Apply the three levers to whatever just hit you in your work life.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name your current edge in Career.", prompt: "Where are you on the edge right now with your work life?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 1 — Thinking (Paradigm Shift): What mental model could I shift?", prompt: "Example: From 'I need one big breakthrough' to 'I need multiple small webs that create redundancy.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 2 — Feeling (Perspective Change): What emotional interpretation could I reframe?", prompt: "Example: From 'I'm a failure because webs keep tearing' to 'I'm a spider who survives storms and knows how to spin again.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 3 — Body (Physiological Reset): What action could ground me in my capacity right now?", prompt: "Example: Update resume, send 3 emails, practice pitch out loud, review skills inventory." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },

    // ═══════════════════════════════════════
    // BODY — Chrysalis Medicine
    // ═══════════════════════════════════════
    {
        id: "season-assessment",
        title: "Season Assessment",
        subtitle: "What season is your body actually in?",
        rightNowSubtitle: "Your body is screaming — stop and listen",
        edge: "body",
        animal: "chrysalis",
        lever: "thinking",
        type: "assessment",
        moods: ["worked-up", "numb"],
        duration: 8,
        description:
            "Your body is always in a season. Pretending you're in summer when you're in winter will grind you into dust. Identify your actual season and what it requires.",
        rightNowDescription:
            "Your body is not matching the story in your head. You're trying to push like it's summer, but your system feels like winter. In the middle of frustration, this practice helps you name the season you're actually in so you can stop fighting your body and start working with it.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Right now, my body is in:", prompt: "Spring — Building capacity, energy returning, new growth possible\nSummer — Peak performance, strong, can handle intensity\nFall — Declining capacity, need to consolidate and prepare for rest\nWinter — Repair mode, injury recovery, chronic condition management, rest required", rightNowInstruction: "Right now, my body is in…", rightNowPrompt: "Forget what you think you should be doing. Choose the season that actually fits your body right now and type it:\n• Spring – building capacity, energy returning, new growth possible\n• Summer – peak performance, strong, can handle intensity\n• Fall – declining capacity, need to consolidate and rest soon\n• Winter – repair mode, injury recovery, chronic condition management, deep rest required." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What season am I pretending to be in?", prompt: "Be honest — where are you pushing yourself to perform that doesn't match your reality?", rightNowInstruction: "What season am I pretending to be in?", rightNowPrompt: "If you're forcing yourself to operate in a different season, type the season you're pretending to be in." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What does my actual season require of me?", prompt: "What would genuinely honoring this season look like?", rightNowInstruction: "What does my actual season require of me?", rightNowPrompt: "If you honored the season you're really in, what would you do differently today - rest instead of train, walk instead of run, more water, earlier sleep? Write one concrete change." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "chrysalis-inventory",
        title: "Chrysalis Inventory",
        subtitle: "Map your body's transformations",
        rightNowSubtitle: "Something forced you to stop — what's transforming",
        edge: "body",
        animal: "chrysalis",
        lever: "feeling",
        type: "mapping",
        moods: ["numb", "grieving"],
        duration: 12,
        description:
            "Map the major chrysalis moments in your physical life — the injuries, illnesses, and transformations that forced you to dissolve and re-form.",
        rightNowDescription:
            "An injury, illness, or crash has forced you to slow down - or stop. You may be angry at your body right now. This exercise gives you a way to look at this forced pause as a chrysalis moment, so you can ask, 'What part of me is trying to transform?' instead of just 'Why is my body failing me?'",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "List your body chrysalises.", prompt: "Injuries, surgeries, chronic conditions, big training cycles, illness, burnout, recoveries.", rightNowInstruction: "List your body chrysalises.", rightNowPrompt: "Right now or recently, what has forced your body to slow down or transform - injury, illness, chronic condition, burnout, aging, intense training? List one to three." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Mark each as Chosen, Forced, or Imposed.", prompt: "Chosen — You entered on purpose. Forced — Life knocked you into it. Imposed — Systems or others' decisions boxed your body in.", rightNowInstruction: "Mark each as Chosen, Forced, or Imposed.", rightNowPrompt: "For each one, type whether it was:\n• Chosen – you entered it on purpose\n• Forced – life knocked you into it\n• Imposed – systems or others boxed you in." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "For the chrysalis that still carries the most charge, ask:", prompt: "What old identity or story about my body had to liquefy here? Example: 'I am the indestructible athlete' had to die.", rightNowInstruction: "Old identity that had to liquefy.", rightNowPrompt: "Pick the chrysalis with the most emotional charge. What old story or identity about your body had to melt here? For example: 'I am the indestructible athlete.' Write yours." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What new way of inhabiting my body emerged (or is trying to emerge)?", prompt: "Example: 'I am someone who listens to my nervous system and rests when needed.'", rightNowInstruction: "New way of inhabiting my body.", rightNowPrompt: "What new way of being in your body is trying to emerge from this? For example: 'I am someone who listens to my nervous system and rests when needed.' Write one possibility, even if it feels shaky." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "blame-to-care",
        title: "Remapping Blame to Care",
        subtitle: "From resentment to care for your body",
        rightNowSubtitle: "You're blaming your body — shift to care",
        edge: "body",
        animal: "chrysalis",
        lever: "feeling",
        type: "reframe",
        moods: ["worked-up", "angry", "grieving"],
        duration: 10,
        description:
            "Most of us carry at least one body part that feels like a 'failed teammate.' This exercise transforms blame into care.",
        rightNowDescription:
            "When pain flares or your stomach drops at the worst possible time, it's easy to treat your body like an enemy. In this moment, this tool helps you shift from blaming that knee, gut, back, or heart to offering it one concrete act of care today.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name the failed teammate.", prompt: "What part of your body or physicality feels like a disappointment or liability?", rightNowInstruction: "Name the failed teammate.", rightNowPrompt: "Which part of your body feels like it betrayed you - knee, gut, back, wrist, heart, overall energy? Name it." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Write the blame story.", prompt: "What do you quietly resent this part of your body for? Example: My wrist failed me when I needed it most. My gut humiliates me.", rightNowInstruction: "Write the blame story.", rightNowPrompt: "Give that blame one honest sentence: 'I'm mad at you because…' Let it be raw." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Rewrite as care.", prompt: "What if this part of your body isn't broken — it's adapted, sensitive, or trying to tell you something? Example: Blame: 'My gut is weak and unreliable' → Care: 'My gut is a sensitive early-warning system for stress I haven't processed.'", rightNowInstruction: "Rewrite as care.", rightNowPrompt: "Now translate that blame into care. Start with: 'What you might be trying to tell me is…' Write a version where this body part is trying to protect you or warn you." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "One act of care.", prompt: "What's one thing you could do this week to care for (not fix) this part of your body?", rightNowInstruction: "One act of care.", rightNowPrompt: "Name one thing you can do in the next 24 hours that cares for (not fixes) this part - rest, ice, heat, stretching, food, medical support, saying no, gentle movement. Write it." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "body-lever-work",
        title: "Body Domain Lever Work",
        subtitle: "Pull the levers on your current body edge",
        rightNowSubtitle: "One lever you can pull in the next 3 minutes",
        edge: "body",
        animal: "chrysalis",
        lever: "body",
        type: "reframe",
        moods: ["worked-up", "angry", "stuck"],
        duration: 8,
        description:
            "Apply the three levers — Thinking, Feeling, and Body — to your current body edge.",
        rightNowDescription:
            "What's the Signal right now? What System is firing? Which Lever can you pull in the next 3 minutes - thinking, feeling, or body? Apply the three levers to whatever just hit you in your physical life.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name your current edge in Body.", prompt: "Where are you on the edge right now with your physical self?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 1 — Thinking (Paradigm Shift): What mental model could I shift?", prompt: "Example: From 'My body should return to what it was' to 'My body is in a new form and I need to learn how to inhabit it.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 2 — Feeling (Perspective Change): What emotional interpretation could I reframe?", prompt: "Example: From 'I'm ashamed my body can't perform like before' to 'I honor my body's seasons and adapt my expectations.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 3 — Body (Physiological Reset): What practice matches my actual season right now?", prompt: "Example: Gentle movement, restorative yoga, walking, breathwork, adequate sleep." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },

    // ═══════════════════════════════════════
    // INTIMACY — Wolf Medicine
    // ═══════════════════════════════════════
    {
        id: "intimacy-scan",
        title: "Intimacy Scan",
        subtitle: "Assess the four layers of connection",
        rightNowSubtitle: "You feel alone right now — scan for the real gap",
        edge: "intimacy",
        animal: "wolf",
        lever: "feeling",
        type: "assessment",
        moods: ["numb", "lonely"],
        duration: 10,
        description:
            "Assess the four layers of intimacy in your life — Surface, Casual, Vulnerable, and Sacred — and identify what's depleted.",
        rightNowDescription:
            "Maybe you just had a fight, got ghosted, or realized you don't know who to call. Right now, loneliness or shame might be loud. This exercise takes a quick scan of your connections - surface to sacred - so you can see where the real hunger is and choose one small repair, not disappear.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Surface layer — who and when was last deep contact?", prompt: "Quality (1-10) and what's missing?", rightNowInstruction: "Surface layer.", rightNowPrompt: "Who do you interact with at the surface level - neighbors, coworkers, acquaintances? List one or two names, plus when you last connected and how the quality feels from 1–10." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Casual layer — who and when?", prompt: "Quality (1-10) and what's missing?", rightNowInstruction: "Casual layer.", rightNowPrompt: "Who do you spend time with casually but don't go deep with? List one or two names, last contact, and quality from 1–10." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Vulnerable layer — who and when?", prompt: "Quality (1-10) and what's missing?", rightNowInstruction: "Vulnerable layer.", rightNowPrompt: "Who have you had a real, honest conversation with recently? List one or two names, last contact, and quality from 1–10." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Sacred layer — who and when?", prompt: "Quality (1-10) and what's missing?", rightNowInstruction: "Sacred layer.", rightNowPrompt: "Who knows you at the deepest level - your fears, failures, and true self? List names, last contact, and quality from 1–10." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Which layer is most depleted?", prompt: "Name it.", rightNowInstruction: "Which layer is most depleted?", rightNowPrompt: "Looking at your answers, which layer feels most empty or neglected - surface, casual, vulnerable, or sacred? Type the layer name." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What one action could strengthen it?", prompt: "One concrete step you could take this week.", rightNowInstruction: "One action to strengthen it.", rightNowPrompt: "For that depleted layer, what is one small move you could take - a text, a call, showing up somewhere, sharing one honest sentence? Describe the action." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "pack-map",
        title: "Pack Map",
        subtitle: "Understand your intimacy system",
        rightNowSubtitle: "You feel like a lone wolf — map who's actually there",
        edge: "intimacy",
        animal: "wolf",
        lever: "thinking",
        type: "mapping",
        moods: ["scattered", "lonely"],
        duration: 10,
        description:
            "Map your pack — who you howl to, who howls to you, and where your pack actually is.",
        rightNowDescription:
            "In this moment you might feel like a lone wolf, unsure if you even have a pack. This practice helps you map who actually shows up, who you show up for, and where there might be openings for real brotherhood, so you don't believe the story that you're completely alone.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Who do I howl to when I need help?", prompt: "Who actually picks up the phone? Who shows up?", rightNowInstruction: "Who do I howl to when I need help?", rightNowPrompt: "If a crisis hit you tonight, who would you reach out to? Who actually tends to respond? List their names." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Who howls to me?", prompt: "Who comes to me with their struggles? Who trusts me?", rightNowInstruction: "Who howls to me?", rightNowPrompt: "Who comes to you with their struggles? Who trusts you with their real life? List their names." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Where is my pack?", prompt: "I have a clear pack / I'm between packs (transition, relocation, life phase shift) / I'm a lone wolf right now (no consistent pack)", rightNowInstruction: "Where is my pack?", rightNowPrompt: "Based on this, which phrase fits you best right now? Type one:\n• I have a clear pack\n• I'm between packs (transition/relocation/life shift)\n• I'm a lone wolf right now (no consistent pack)." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "If I'm a lone wolf, is it by choice or circumstance?", prompt: "Describe.", rightNowInstruction: "If I'm a lone wolf, is it by choice or circumstance?", rightNowPrompt: "If you named yourself a lone wolf, complete this sentence: 'I'm alone right now because…'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What would need to shift for me to find or build pack?", prompt: "Geographic move, risk vulnerability, join groups, reach out consistently, heal old wounds?", rightNowInstruction: "What would need to shift for me to find/build pack?", rightNowPrompt: "What one thing would need to change - geography, risking vulnerability, joining a group, reaching out consistently, healing an old wound? Write it." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "loyalty-test",
        title: "Loyalty Test",
        subtitle: "Examine your intimacy patterns",
        rightNowSubtitle: "Someone broke your trust — notice the pattern",
        edge: "intimacy",
        animal: "wolf",
        lever: "feeling",
        type: "reflection",
        moods: ["angry", "lonely"],
        duration: 10,
        description:
            "Examine the patterns that shaped how you open or close to intimacy — the times you were almost known, then exiled.",
        rightNowDescription:
            "When you're tempted to shut down because someone broke your trust - again - this tool helps you notice your patterns around opening and exile. It gives you a way to honor the hurt and decide how you want to handle vulnerability in the very next conversation.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "When have I been 'almost completely known, then exiled'?", prompt: "Relationships or friendships where you opened fully, then were rejected or abandoned.", rightNowInstruction: "When have I been 'almost completely known, then exiled'?", rightNowPrompt: "Think of one relationship or friendship where you opened fully and were later hurt, rejected, or abandoned. Describe it briefly." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What did that teach me about vulnerability?", prompt: "Did I close off? Become more careful? Stop trying? Develop better boundaries?", rightNowInstruction: "What did that teach me about vulnerability?", rightNowPrompt: "After that, what rule did you quietly adopt about opening up? Write it as a sentence: 'If I'm vulnerable, then…'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What's my current intimacy operating system?", prompt: "Open and trusting (default to vulnerability) / Guarded but willing (test before opening) / Closed and protective (intimacy feels too risky) / Confused (want connection but don't know how to build it)", rightNowInstruction: "What's my current intimacy operating system?", rightNowPrompt: "Which description matches you right now? Type the one that fits:\n• Open and trusting – I tend to lead with vulnerability\n• Guarded but willing – I test before opening\n• Closed and protective – intimacy feels too risky\n• Confused – I want connection but don't know how to build it." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Is my operating system serving me, or is it outdated protection?", prompt: "Be honest about whether your current approach is getting you what you need.", rightNowInstruction: "Is my operating system serving me, or outdated protection?", rightNowPrompt: "In one or two lines, answer: 'Is this pattern actually helping me now, or is it old armor I don't fully need anymore?'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "howl-practice",
        title: "The Howl Practice",
        subtitle: "When you're in lone wolf territory",
        rightNowSubtitle: "You need connection — send one honest signal",
        edge: "intimacy",
        animal: "wolf",
        lever: "body",
        type: "practice",
        moods: ["lonely", "numb", "grieving"],
        duration: 10,
        description:
            "When you're in lone wolf territory and need connection — a practice for reaching out without collapsing if there's no response.",
        rightNowDescription:
            "Right now you might be on the edge of reaching out or stuffing it down. This practice walks you through sending one clear 'howl' - a direct, honest message - to someone specific, and holding your ground whether they answer or not.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Send a clear howl.", prompt: "Reach out to someone specific with a vulnerable, direct message. Example: 'I've been isolated lately and could use some real conversation. Can we talk this week?' Who will you howl to?", rightNowInstruction: "Choose one person.", rightNowPrompt: "Right now, who is one person you could send a real, honest message to - even if you're not sure they'll respond? Type their name." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Howl without expectation.", prompt: "Send the call, but don't collapse if there's no response. Some howls echo into silence.", rightNowInstruction: "Draft the howl.", rightNowPrompt: "Write a one or two sentence message that tells the truth without drama. For example: 'I've been struggling and could use some real conversation this week. Are you open to that?' Now write your version." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Track responses.", prompt: "Who responds? Who doesn't? This data tells you where your pack might actually be.", rightNowInstruction: "Decide what to do with it.", rightNowPrompt: "Look at what you wrote. Do you want to send it, save it for later, or delete it? Type your choice." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Keep howling.", prompt: "Isolation deepens when we stop calling. Even if responses are rare, keep sending the signal.", rightNowInstruction: "Track responses (if you send it).", rightNowPrompt: "If you choose to send it, come back later and note who responded and who didn't. This is data about where your true pack might be." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "intimacy-lever-work",
        title: "Intimacy Domain Lever Work",
        subtitle: "Pull the levers on your current intimacy edge",
        rightNowSubtitle: "One lever you can pull in the next 3 minutes",
        edge: "intimacy",
        animal: "wolf",
        lever: "feeling",
        type: "reframe",
        moods: ["angry", "lonely"],
        duration: 8,
        description:
            "Apply the three levers — Thinking, Feeling, and Body — to your current intimacy edge.",
        rightNowDescription:
            "What's the Signal right now? What System is firing? Which Lever can you pull in the next 3 minutes - thinking, feeling, or body? Apply the three levers to whatever just hit you in your relationship life.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name your current edge in Intimacy.", prompt: "Where are you on the edge right now with connection and relationships?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 1 — Thinking (Paradigm Shift): What mental model could I shift?", prompt: "Example: From 'If I'm vulnerable I'll be abandoned' to 'Vulnerability is the only path to real connection, and some people will stay.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 2 — Feeling (Perspective Change): What emotional interpretation could I reframe?", prompt: "Example: From 'I'm defective because I'm alone' to 'I'm in a lone wolf season, learning survival skills I'll carry forever.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 3 — Body (Physiological Reset): What embodied practice could ease isolation?", prompt: "Example: Hug my dog, hand on heart breathing, schedule one in-person coffee, attend a group activity." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },

    // ═══════════════════════════════════════
    // LEGACY — Eagle Medicine
    // ═══════════════════════════════════════
    {
        id: "altitude-shift",
        title: "Altitude Shift",
        subtitle: "Fly higher to see your real legacy",
        rightNowSubtitle: "Panic about the future just hit — zoom out",
        edge: "legacy",
        animal: "eagle",
        lever: "thinking",
        type: "reframe",
        moods: ["anxious", "stuck", "lonely"],
        duration: 10,
        description:
            "Legacy panic happens when you're flying too low. The eagle flies higher. Shift your altitude to see what really remains.",
        rightNowDescription:
            "Fear about the future can slam you in the chest in a single moment - retirement, aging, no kids, no safety net. When your mind is spinning on 'too late' and 'not enough,' this exercise helps you fly up a few layers, so you can see your life from eagle altitude instead of ground-level panic.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name your current altitude.", prompt: "Ground level — Day-to-day survival, can't see past this month\nTree level — Thinking 1-5 years out\nCloud level — Thinking 10-25 years out\nStratosphere — Thinking 50-100 years out", rightNowInstruction: "Name your current altitude.", rightNowPrompt: "Where are you flying right now? Type the level that fits:\n• Ground level – day-to-day survival, can't see past this month\n• Tree level – thinking 1–5 years out\n• Cloud level – thinking 10–25 years out\n• Stratosphere – thinking 50–100 years out." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Fly to eagle altitude.", prompt: "Imagine 100 years from now. You are gone. Everyone you know is gone. What remains? Ideas that spread? Land restored? People shaped by knowing you? A way of being others adopted?", rightNowInstruction: "Fly to eagle altitude.", rightNowPrompt: "Imagine 100 years from now. You're gone. Everyone you know is gone. In that wide view, what could remain because you lived - ideas, land cared for, people changed, ways of being? Describe what you see." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Reframe legacy.", prompt: "Legacy is not just what you own or leave behind in a will. Legacy is the pattern you introduced into the world that continues to move through others. What pattern have you been introducing?", rightNowInstruction: "Reframe legacy.", rightNowPrompt: "Legacy isn't just money or heirs. It's the pattern you've been introducing into the world that keeps moving after you. In one sentence, describe the pattern you've actually been spreading so far." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "big-sky-map",
        title: "Big Sky Map",
        subtitle: "Map your actual legacy",
        rightNowSubtitle: "You feel like you've wasted years — see what's real",
        edge: "legacy",
        animal: "eagle",
        lever: "thinking",
        type: "mapping",
        moods: ["grieving", "lonely"],
        duration: 12,
        description:
            "Map your actual legacy — not the one you wish you had, but the one you're creating.",
        rightNowDescription:
            "You may feel like you've wasted years, or that nothing you've built will last. In this exact moment of doubt, this tool helps you map the impact you're already having - on people, land, work, and values - so you can feel the legacy you're living, not just the one you imagined.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Wisdom / Teaching — What am I planting? Who receives it? What could grow?", prompt: "Map this domain of your legacy.", rightNowInstruction: "Wisdom / Teaching.", rightNowPrompt: "What wisdom or teaching are you planting right now? Who receives it? What could grow from it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Relationships — What am I planting?", prompt: "Map the relational legacy you're creating.", rightNowInstruction: "Relationships.", rightNowPrompt: "What are you planting in your relationships? Who receives it? What could grow from it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Creative Work — What am I planting?", prompt: "Map the creative legacy.", rightNowInstruction: "Creative Work.", rightNowPrompt: "What creative work are you putting into the world? Who or what receives it? What might grow from it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Land / Place — What am I planting?", prompt: "Map your legacy in the places you've touched.", rightNowInstruction: "Land / Place.", rightNowPrompt: "How are you impacting the places or land you touch? Who or what receives that impact? What could grow from it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Values / Ethics — What am I planting?", prompt: "Map the values you're transmitting.", rightNowInstruction: "Values / Ethics.", rightNowPrompt: "What values or ethics are you living out loud? Who receives that example? What could grow from it?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Service — What am I planting?", prompt: "Map your legacy of service.", rightNowInstruction: "Service.", rightNowPrompt: "What forms of service are you offering? Who receives them? What could grow from them?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Reflection: When you see your actual legacy mapped, does it feel more real than the legacy you thought you 'should' have?", prompt: "Sit with this.", rightNowInstruction: "Reflection.", rightNowPrompt: "Seeing this laid out, does this feel more real than the version of 'legacy' you thought you were supposed to have? Write a sentence about what you notice." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "feather-molting",
        title: "Feather Molting",
        subtitle: "Release identities that no longer serve you",
        rightNowSubtitle: "A version of you is dying — let it go",
        edge: "legacy",
        animal: "eagle",
        lever: "feeling",
        type: "practice",
        moods: ["stuck", "grieving"],
        duration: 12,
        description:
            "Release the identities, titles, and roles you're clinging to that need to molt. Let old feathers fall so new ones can grow.",
        rightNowDescription:
            "A version of you - the successful businessman, the family man, the always-strong one - might be dying right now. This practice gives you a small ritual to name the identity that's falling away, grieve it, and notice what new feathers are quietly growing in.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name the old feathers.", prompt: "What identities, titles, or roles are you clinging to that need to molt? Examples: 'I'm the person who will build a multi-million dollar business.' 'I'll be the patriarch of a large family.' 'I'll retire with security and comfort.'", rightNowInstruction: "Name the old feathers.", rightNowPrompt: "What identities, titles, or roles are you clinging to that may need to molt? For example: 'I'm the guy who will build a multi-million-dollar business,' 'I'll retire with security and comfort.' List yours." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Acknowledge the grief.", prompt: "These were real dreams. It's okay to mourn what didn't happen. How do you feel about letting them go?", rightNowInstruction: "Acknowledge the grief.", rightNowPrompt: "These were real dreams. In a few lines, say how it feels to imagine letting them go. Let sadness, anger, or relief be honest." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Release.", prompt: "Write a simple release statement: 'I release the identity of __________. I honor what it meant to me, and I let it fall.'", rightNowInstruction: "Release.", rightNowPrompt: "Write a simple release statement: 'I release the identity of ________. I honor what it meant to me, and I let it fall.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "What grows in its place?", prompt: "After molting, what new feathers are emerging? Examples: 'I'm someone who meaningfully touches the lives close to me.' 'I'm a wisdom-keeper who shares what I've learned.' 'I embody resilience and open-heartedness despite my position in life.'", rightNowInstruction: "What grows in its place?", rightNowPrompt: "What new identity or way of seeing yourself is emerging? For example: 'I'm someone who meaningfully touches the lives close to me,' or 'I'm a wisdom-keeper who shares what I've learned.' Write your new feather." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    {
        id: "legacy-lever-work",
        title: "Legacy Domain Lever Work",
        subtitle: "Pull the levers on your current legacy edge",
        rightNowSubtitle: "One lever you can pull in the next 3 minutes",
        edge: "legacy",
        animal: "eagle",
        lever: "thinking",
        type: "reframe",
        moods: ["anxious"],
        duration: 8,
        description:
            "Apply the three levers — Thinking, Feeling, and Body — to your current legacy edge.",
        rightNowDescription:
            "What's the Signal right now? What System is firing? Which Lever can you pull in the next 3 minutes - thinking, feeling, or body? Apply the three levers to whatever just hit you about your legacy and long-term meaning.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Name your current edge in Legacy.", prompt: "Where are you on the edge right now with your sense of legacy and long-term meaning?" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 1 — Thinking (Paradigm Shift): What mental model could I shift?", prompt: "Example: From 'Legacy = wealth and heirs' to 'Legacy = the quality of presence and wisdom I offer.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 2 — Feeling (Perspective Change): What emotional interpretation could I reframe?", prompt: "Example: From 'I've failed because I didn't build what I planned' to 'I've succeeded at staying open-hearted and generous despite immense difficulty.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Lever 3 — Body (Physiological Reset): What embodied practice connects me to long-term meaning?", prompt: "Example: Sit by water and breathe, stack stones in creek bed, write letter to future self, mentor one person this month." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
    // ═══════════════════════════════════════
    // INTEGRATION — 30-Day Edge Commitment
    // ═══════════════════════════════════════
    {
        id: "thirty-day-edge",
        title: "30-Day Edge Commitment",
        subtitle: "Pick one edge and one daily act",
        rightNowSubtitle: "In the mess right now — grab one rope",
        edge: "foundation",
        animal: "phoenix",
        lever: "thinking",
        type: "practice",
        moods: ["stuck", "scattered", "numb", "worked-up", "anxious", "angry"],
        duration: 10,
        description:
            "Choose one edge domain and commit to a single daily practice for 30 days. This isn't about fixing everything — it's about having one rope to hold when you fall off the edge again.",
        rightNowDescription:
            "In the middle of the mess, you don't need a five-year plan. You need one edge to work with. This tool helps you pick a single domain and a tiny daily act for the next stretch, so you've got a rope to hold when you fall off the edge again.",
        rightNowIntroAudio: "/app-audio/app-audio-holder.wav",
        steps: [
            { instruction: "Which edge is most alive right now?", prompt: "Spirit / Career / Body / Intimacy / Legacy — pick the one that's generating the most tension, grief, or energy.", rightNowInstruction: "Choose ONE domain to focus on right now.", rightNowPrompt: "Which edge is screaming the loudest in this moment? Type one: Spirit, Career, Body, Intimacy, or Legacy." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Name your edge in one sentence.", prompt: "Example: 'My body is in winter and I keep pushing like it's summer.' or 'I have no pack and I'm pretending that's fine.'", rightNowInstruction: "Choose ONE tool from that domain.", rightNowPrompt: "What is one five-minute practice from this mode that you're willing to work with? Name the tool or exercise." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Choose one lever.", prompt: "Thinking / Feeling / Body — which one could create the smallest meaningful shift?", rightNowInstruction: "Commit just for the next 24 hours.", rightNowPrompt: "Instead of 30 days, make a short commitment. Complete this sentence: 'In the next 24 hours, no matter how I feel, I will spend 5 minutes on ________.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Define one daily act.", prompt: "Make it small enough to do even on your worst day. Examples: 5 minutes of breath work, one honest text to a friend, 10 minutes of walking, writing one sentence of reflection." , rightNowAudio: "/app-audio/app-audio-holder.wav" },
            { instruction: "Commit to the stretch.", prompt: "Write your commitment: 'For the next 30 days, I will [daily act] as my way of working the edge of [domain]. I don't need to solve it. I need to stay with it.'" , rightNowAudio: "/app-audio/app-audio-holder.wav" },
        ],
    },
];

export function getExerciseById(id: string): Exercise | undefined {
    return exercises.find((e) => e.id === id);
}

export function getExercisesByEdge(edge: EdgeDomain): Exercise[] {
    return exercises.filter((e) => e.edge === edge);
}

export function getExercisesByAnimal(animalId: string): Exercise[] {
    return exercises.filter((e) => e.animal === animalId);
}

export function getExercisesByLever(lever: Lever): Exercise[] {
    return exercises.filter((e) => e.lever === lever);
}

export function getExercisesByMood(moodId: string): Exercise[] {
    return exercises.filter((e) => e.moods.includes(moodId));
}

export function filterExercises(filters: {
    edge?: EdgeDomain;
    lever?: Lever;
    mood?: string;
    animal?: string;
}): Exercise[] {
    return exercises.filter((e) => {
        if (filters.edge && e.edge !== filters.edge) return false;
        if (filters.lever && e.lever !== filters.lever) return false;
        if (filters.mood && !e.moods.includes(filters.mood)) return false;
        if (filters.animal && e.animal !== filters.animal) return false;
        return true;
    });
}
