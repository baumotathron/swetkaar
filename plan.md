# Training Page — Implementation Plan

## What We're Building

A **Training** section with 3 pages that make academic institutions and professionals desperately want to book Naitik as their AI Product Management instructor. No APIs needed — pure Next.js pages with the existing design system.

---

## Page Structure

### 1. `/training` — Landing Page (Hub)
The gateway. Two clear audience paths with a powerful hero that establishes authority.

**Sections:**
- **Hero**: Bold headline — "Learn Product Management. Powered by AI." + subtext establishing Naitik's credibility (real-world PM + AI practitioner, not just a trainer)
- **The Program at a Glance**: 12 modules, 2 capstone case studies, AI MVP project, career prep — pulled from the PDF
- **Salary Ladder**: Visual representation of PM career trajectory (APM: 12-15 LPA → CPO: 75-100+ LPA) — this is the hook that makes people take action
- **Two Audience Cards**: "For Academic Institutions" and "For Professionals & Corporates" — each links to its dedicated page
- **CTA**: Gold-bordered "Request a Session" linking to `/#contact`

### 2. `/training/academic` — Academic Institutions Page
Speaks the language of deans, HODs, and placement officers.

**Sections:**
- **Hero**: "Prepare Your Students for the Highest-Paying Tech Role"
- **Why This Matters for Your Institution**: Placement stats improve, students get industry-ready skills, institution stands out
- **Curriculum Overview**: 12-module breakdown from the PDF (Product vs Service → Cracking PM Role) presented as a visual timeline
- **What Students Build**: AI MVP, 2 case studies, product roadmaps, lean canvas — tangible portfolio outcomes
- **Delivery Formats**: Guest lecture (2-3 hrs), Workshop series (2-5 days), Full semester module, Faculty development program
- **Proof of Impact**: "Performer of the week" scoreboard concept, hands-on methodology, real case studies (Swiggy, AI Lawyer)
- **CTA**: "Invite Naitik to Your Campus" → `/#contact`

### 3. `/training/corporate` — Professionals & Corporates Page
Speaks the language of L&D heads, CTOs, and ambitious professionals.

**Sections:**
- **Hero**: "Your Teams Are Using AI Wrong. Fix That."
- **The Problem**: Teams use AI as a toy, not a strategic tool. Product decisions are still gut-driven.
- **What They'll Master**: AI-powered market research, product roadmapping with AI tools, building MVPs with AI, data-driven product analytics
- **Real-World Framework**: The Double Diamond methodology + AI tools at each stage
- **For Individuals vs Teams**: Two tracks — self-driven professionals wanting to break into PM, and corporate teams wanting to upskill
- **Career Outcomes**: CV upgrade, interview prep, portfolio projects — for individuals. For teams: faster product cycles, AI-integrated workflows
- **CTA**: "Book a Corporate Workshop" → `/#contact`

---

## Files to Create/Modify

### New Files:
1. `app/training/page.tsx` — Training hub page
2. `app/training/academic/page.tsx` — Academic audience page
3. `app/training/corporate/page.tsx` — Corporate/professional audience page

### Modified Files:
4. `lib/data.ts` — Add "Training" to navigation array
   ```ts
   { label: "Training", href: "/training" }
   ```
   This automatically updates the header nav AND footer nav since both consume from this array.

---

## Design Approach

- **Exact same design system**: Black bg, electric blue accents, gold CTAs, Syne + Manrope fonts, glass panels, orbs, Framer Motion scroll animations
- **Same component patterns**: `<Navigation />` + `<Footer />` wrapping each page, motion.div with whileInView, rounded-[2rem] cards with border-electric/30
- **Icons**: Lucide icons (GraduationCap, Building2, TrendingUp, Brain, Target, Users, BookOpen, Rocket, etc.)
- **No new dependencies needed**

---

## Content Strategy (Why This Will Convert)

The pages are designed to trigger **urgency + aspiration**:

1. **Salary numbers upfront** — PM roles pay 12-100+ LPA. That's the hook.
2. **"Not just theory"** — Real case studies (Swiggy, AI Lawyer from the PDF), actual MVP building, not slides-and-lectures
3. **AI is the differentiator** — This isn't a generic PM course. Every module integrates AI tools. That's novel.
4. **Tangible outcomes** — Students get portfolio projects. Professionals get career transitions. Corporates get faster product cycles.
5. **Scarcity/Authority** — Naitik is a practitioner who builds AI products (Swetkaar AI itself is proof), not an academic teaching from textbooks
