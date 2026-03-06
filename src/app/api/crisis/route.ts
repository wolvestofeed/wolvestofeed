import { NextRequest, NextResponse } from "next/server";
import { getCoachingSequence, type UserIntake, type StressLevel } from "@/lib/crisis";
import type { EdgeDomain } from "@/data/exercises";

const VALID_EDGES: EdgeDomain[] = ["spirit", "career", "body", "intimacy", "legacy", "foundation"];
const VALID_STRESS: StressLevel[] = ["low", "moderate", "high"];

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // ── Validate mood (required) ──
        if (!body.mood || typeof body.mood !== "string") {
            return NextResponse.json(
                {
                    error: "mood is required",
                    hint: "Provide a mood id such as 'anxious', 'worked-up', 'angry', 'numb', 'scattered', 'stuck', 'grieving', or 'lonely'.",
                },
                { status: 400 }
            );
        }

        // ── Validate optional edge ──
        if (body.edge && !VALID_EDGES.includes(body.edge)) {
            return NextResponse.json(
                {
                    error: `Invalid edge: '${body.edge}'`,
                    hint: `Valid edges: ${VALID_EDGES.join(", ")}`,
                },
                { status: 400 }
            );
        }

        // ── Validate optional stressLevel ──
        if (body.stressLevel && !VALID_STRESS.includes(body.stressLevel)) {
            return NextResponse.json(
                {
                    error: `Invalid stressLevel: '${body.stressLevel}'`,
                    hint: `Valid levels: ${VALID_STRESS.join(", ")}`,
                },
                { status: 400 }
            );
        }

        const intake: UserIntake = {
            mood: body.mood,
            edge: body.edge || undefined,
            stressLevel: body.stressLevel || undefined,
        };

        const result = getCoachingSequence(intake);

        if (!result) {
            return NextResponse.json(
                {
                    error: `Unknown mood: '${body.mood}'`,
                    hint: "Check /src/data/moods.ts for valid mood IDs.",
                },
                { status: 404 }
            );
        }

        // Wellness coaching disclaimer per SKILL.md constraints
        return NextResponse.json({
            ...result,
            disclaimer: "This is a wellness coaching tool, not medical or mental health advice. If you are in danger, please contact emergency services or the 988 Suicide & Crisis Lifeline.",
        });
    } catch (err) {
        console.error("Crisis API error:", err);
        return NextResponse.json(
            { error: "Failed to process crisis coaching request" },
            { status: 500 }
        );
    }
}
