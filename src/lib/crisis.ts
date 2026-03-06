import { exercises, filterExercises, type Exercise, type ExerciseStep, type EdgeDomain } from "@/data/exercises";
import { getMoodById, type Mood } from "@/data/moods";
import { getAnimalById } from "@/data/animals";

// ─── Types ───────────────────────────────────────────────────────────

export type StressLevel = "low" | "moderate" | "high";

export interface UserIntake {
    mood: string;           // mood id from moods.ts
    edge?: EdgeDomain;      // optional edge filter
    stressLevel?: StressLevel;
}

export interface CrisisStep {
    instruction: string;
    prompt: string | null;
    audio: string | null;
}

export interface CrisisExercise {
    rank: number;
    exerciseId: string;
    title: string;
    subtitle: string;
    description: string;
    edge: string;
    animal: { id: string; name: string; icon: string } | null;
    lever: string;
    durationMinutes: number;
    introAudio: string | null;
    steps: CrisisStep[];
}

export interface CrisisSequenceResult {
    mode: "crisis";
    sequence: CrisisExercise[];
    meta: {
        moodLabel: string;
        moodIcon: string;
        totalMatches: number;
        returned: number;
    };
}

// ─── reverbalizeToCrisis ─────────────────────────────────────────────
// Transforms an Exercise into crisis-framed (Right Now) output.
// Uses rightNow* fields when available, falls back to standard fields.
// Caps steps at 4 to honor the SKILL.md "3-5 minute prompts" constraint.

const MAX_CRISIS_STEPS = 4;

export function reverbalizeToCrisis(exercise: Exercise, rank: number): CrisisExercise {
    const animal = getAnimalById(exercise.animal);

    // Transform steps: prefer rightNow variants, fall back to standard
    const crisisSteps: CrisisStep[] = exercise.steps
        .slice(0, MAX_CRISIS_STEPS)
        .map((step: ExerciseStep) => ({
            instruction: step.rightNowInstruction || step.instruction,
            prompt: step.rightNowPrompt || step.prompt || null,
            audio: step.rightNowAudio || null,
        }));

    return {
        rank,
        exerciseId: exercise.id,
        title: exercise.title,
        subtitle: exercise.rightNowSubtitle || exercise.subtitle,
        description: exercise.rightNowDescription || exercise.description,
        edge: exercise.edge,
        animal: animal ? { id: animal.id, name: animal.name, icon: animal.icon } : null,
        lever: exercise.lever,
        durationMinutes: exercise.duration,
        introAudio: exercise.rightNowIntroAudio || null,
        steps: crisisSteps,
    };
}

// ─── getCoachingSequence ─────────────────────────────────────────────
// Accepts user intake and returns the top 3 ranked crisis-mode exercises.
// Scoring: mood match → edge match → lever alignment → audio availability
// When stressLevel is "high", exercises with audio are boosted.

const SEQUENCE_SIZE = 3;

export function getCoachingSequence(intake: UserIntake): CrisisSequenceResult | null {
    const mood: Mood | undefined = getMoodById(intake.mood);
    if (!mood) return null;

    // Get candidate exercises: filter by edge if provided, otherwise all
    const candidates = intake.edge
        ? filterExercises({ edge: intake.edge })
        : exercises;

    // Score each candidate
    const scored = candidates.map((exercise) => {
        let score = 0;

        // Mood match (strongest signal — this is what the user is feeling)
        if (exercise.moods.includes(mood.id)) {
            score += 50;
        }

        // Edge alignment with mood's suggested edges
        if (mood.suggestedEdges.includes(exercise.edge)) {
            score += 20;
        }

        // Lever alignment with mood's suggested levers
        if (mood.suggestedLevers.includes(exercise.lever)) {
            score += 15;
        }

        // Has crisis-specific content (rightNow fields authored)
        if (exercise.rightNowDescription && exercise.rightNowDescription !== exercise.description) {
            score += 10;
        }

        // Has audio content — boosted when high stress (SKILL.md §3.2)
        const hasAudio = exercise.rightNowIntroAudio &&
            exercise.rightNowIntroAudio !== "/app-audio/app-audio-holder.wav";
        if (hasAudio) {
            score += intake.stressLevel === "high" ? 25 : 5;
        }

        // Step-level audio availability
        const stepsWithAudio = exercise.steps.filter(
            (s) => s.rightNowAudio && s.rightNowAudio !== "/app-audio/app-audio-holder.wav"
        ).length;
        if (stepsWithAudio > 0 && intake.stressLevel === "high") {
            score += Math.min(stepsWithAudio * 3, 12);
        }

        // Shorter exercises score slightly higher for crisis mode
        if (exercise.duration <= 8) score += 5;
        if (exercise.duration <= 5) score += 5;

        return { exercise, score };
    });

    // Sort by score descending, take top N
    scored.sort((a, b) => b.score - a.score);
    const topExercises = scored.slice(0, SEQUENCE_SIZE);

    // Transform to crisis-framed output
    const sequence = topExercises.map(({ exercise }, i) =>
        reverbalizeToCrisis(exercise, i + 1)
    );

    return {
        mode: "crisis",
        sequence,
        meta: {
            moodLabel: mood.label,
            moodIcon: mood.icon,
            totalMatches: scored.filter((s) => s.score > 0).length,
            returned: sequence.length,
        },
    };
}
