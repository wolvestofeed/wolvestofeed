# Wolves To Feed

An integrated wellness collective for **men in mid-life** seeking wisdom, physical discipline, and conscious embodiment. 

This platform serves as the digital forge for the Wolves To Feed mission, integrating the Shadow and unleashing the Spirit through multi-disciplinary coaching, publishing, and practice.

## 🐺 The Forge: Core Components

- **Coaching**: Personalized training in Yoga, Qigong, Nutrition, Kundalini, and Ayurveda.
- **Publishing**: Maps for those brave enough to redraw their borders, featuring foundational texts like *On the Edge of Greatness*.
- **The Practice Engine**: Real stories, wisdom, and simple demonstrations to help men stay grounded in the middle of life's complexities.
- **The Pack**: A wellness collective for men in the second half of life.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: [Clerk](https://clerk.com/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Deployments**: [Vercel](https://vercel.com/)
- **Integrations**: Google Forms, YouTube Data API v3

## ⚡️ Development

First, set up your environment variables in `.env.local`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
NEXT_PUBLIC_YOUTUBE_API_KEY=
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
© 2026 Wolves To Feed. All Rights Reserved.
