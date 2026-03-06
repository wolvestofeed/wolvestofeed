---
name: wolves-coaching-framework
description: Implements the "Edges of Greatness" wellness coaching system. Use this skill when building or modifying the intake form, the activity router, or the "Crisis vs. Workbook" logic for the Wolves to Feed web app.
---

# Wolves to Feed Coaching Skill

## Goal
To orchestrate a "Choose Your Own Adventure" coaching experience that transitions users from their current state (Signal) to an actionable intervention (Lever) using the custom "Edges of Greatness" frameworks.

## Core Concepts (The Knowledge Base)
* **Signal:** The intake data (Mood, Stress, Energy).
* **System:** The internal framework that processes the signal (The Workbook logic).
* **Lever:** The 5-15 minute action (Breathwork, Qigong, Meditative Skill).

## Implementation Rules for Coding Agents

### 1. Database Schema (Neon / pgvector)
When writing SQL or Prisma schemas, always include:
* A `vector` column for embeddings of the 10 core coaching topics.
* Metadata tags: `discipline` (Qigong, Kundalini, etc.), `mode` (Crisis vs. Workbook), and `duration_mins`.

### 2. The Mode Logic (Routing)
* **Crisis Mode (Right Now):** * Maximum 3-5 minute journaling prompts.
    * Reverbalize "Edges" activities into "Right Now" urgency.
    * Target: Emotional regulation and immediate physiological shifts.
* **Workbook Mode (Deep Dive):** * Larger life questions.
    * Sequence: Discovery -> Reflection -> Integration.

### 3. Activity Sequencing (The "Adventure")
Based on the user's `current_state` intake, the agent must:
1.  Query the Neon DB for the top 3 relevant activities.
2.  Prioritize audio/video results if the user selects "High Stress."
3.  Format the response as a structured JSON object for the frontend to render the specific media player.

## Example Tools to Generate
* `getCoachingSequence(userIntake)`: Returns a JSON array of 3 ranked activities.
* `reverbalizeToCrisis(activityText)`: An LLM utility function to transform long-form text into "Right Now" prompts.

## Constraints
* **Do Not** suggest general medical advice; always frame as "Wellness Coaching Skills."
* **Do Not** store raw audio/video files in the repo; always use references to external hosting (Mux/Vercel Blob).
* **Tone:** Grounded, supportive, and action-oriented (The "Lone Wolf" mentor voice).

Workbook Mode (Long-form),Crisis Mode (Right Now Intervention)
"Philosophical: ""Reflect on your core values.""","Direct: ""Name one thing you value right now."""
"Past-Tense: ""When did you last feel this?""","Present-Tense: ""What is the physical sensation in your chest at this second?"""
"Open-Ended: ""Write about your future self.""","Constraint-Based: ""In the next 60 seconds, list 3 things you see that are blue."""
"Analytical: ""Why is this system failing?""","Somatic: ""Exhale for two counts longer than you inhale. Do it once more."""