# Pre-Push TODO: Choice Point App

## 🔴 Data Persistence (Must Do Before Launch)

Right now the "Save" button after exercises doesn't persist anywhere — progress resets on page close.

### Recommended Approach: Hybrid
1. **localStorage** for anonymous users (immediate, no friction)
2. **Clerk Auth + Supabase DB** for signed-in users (cross-device sync)

### What Needs Storing
- Exercise completion status
- Journal/reflection entries per step
- Mode preference (already using localStorage)
- Timestamp of completions

### Database Schema (Simple)
```
user_progress: { userId, exerciseId, stepIndex, response, completedAt }
```

### Decision Needed
- [ ] Free vs. subscription model
- [ ] Whether to require sign-up or allow anonymous use
- [ ] Supabase vs. Vercel Postgres vs. other DB

### Implementation Steps
1. Add localStorage persistence for anonymous users
2. Set up Supabase project + connect to Vercel env vars
3. Create `user_progress` table
4. Wire Clerk userId → Supabase rows
5. Add "Save your progress" sign-up nudge after X completions
6. If subscription: gate content behind Clerk + Stripe
