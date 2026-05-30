# Student Learning Dashboard

A personal project I built as part of a frontend internship assignment. It's a dark-mode dashboard
for tracking learning progress, built with Next.js, Supabase, Tailwind, and Framer Motion.

## Tech Stack

- Next.js (App Router)
- Supabase (PostgreSQL)
- Tailwind CSS
- Framer Motion
- TypeScript
- Lucide React

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and add your Supabase credentials
4. Run the SQL in `supabase-setup.sql` in your Supabase SQL editor
5. Run `npm run dev`

## Architecture

### Why Server Components for data fetching?

I wanted the Supabase fetch to happen on the server so the data arrives already rendered — no loading
flash, no client-side fetch overhead. `page.tsx` is a Server Component that fetches courses and passes
them as props. Client components like BentoGrid and CourseTile handle the animations.

### How I handled the server/client split

Anything that touches Framer Motion or browser events is marked `'use client'`. Everything else stays
as a server component to keep the bundle small. CourseGrid is a good example — it just maps data to
CourseTile components, so it doesn't need to be a client component even though CourseTile is one.

### Animation approach

I kept all animations on transform and opacity to avoid layout shifts. Framer Motion's spring physics
(stiffness: 300, damping: 20) gave the hover cards a natural feel without looking over-engineered.
The sidebar uses `layoutId` for the active indicator so it slides smoothly between nav items.

## Challenges

Getting the `@supabase/ssr` cookie API to work with Next.js's async `cookies()` took a bit of
debugging. Also had to be careful with the Framer Motion stagger — the child components need to
have `variants` defined or the stagger silently does nothing, which was confusing at first.

## Environment Variables

See `.env.example` for required keys.
