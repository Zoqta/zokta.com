You are helping build the **parent website for Zoqta (zoqta.com)** — a modern AI product incubator.

---

🎯 GOAL:
Develop a **Next.js + Vercel-based marketing site** for Zoqta.com that acts as the central hub for the brand. It should clearly express Zoqta’s mission, highlight its AI tools portfolio, and promote its first product (GitHub-integrated Slack bot for code reviews).

---

📄 DESIGN REFERENCE:
Use the design layout and elegance of **uxpert.com** as the reference. I’ve taken a full-page screenshot and converted it into a PDF, which I’ve reviewed for structure and style. Base the layout hierarchy and feel of the site on that — intuitive UX, lots of breathing space, clean typography, and strong first impression.

---

💡 BRAND + CONTENT SUMMARY

**Company Name:** Zoqta  
**Founder:** Akash Patil  
**URL:** [zoqta.com](https://zoqta.com)

**Mission:** Build and launch practical, AI-first tools that solve real problems for engineering and productivity-focused teams — faster, smarter, and at scale.

**Tone & Feel:**  
- Developer-first, clean, minimal  
- Modular, fast-loading, and scalable  
- Elegant and not overly complex — but clearly innovative  
- Modern design, strong use of white space, custom illustrations or abstract elements okay

**Sections to Include (based on uxpert.com structure):**
1. Hero Section  
2. Zoqta Philosophy / Mission  
3. Product Overview (Slack Bot MVP)  
4. Brand Values  
5. Founder's Story (optional)  
6. Newsletter / Waitlist Sign-up  
7. Footer with links to product microsites, blog, and GitHub

---

🧱 STACK

- Frontend: **Next.js** + **Tailwind CSS**  
- Deployment: **Vercel**  
- Backend: **Supabase (auth + DB)** or **Firebase**  
- Billing: **Stripe** (to be integrated later)  
- CI/CD: **GitHub + GitHub Actions**

---

🛠️ TECHNICAL NOTES

- Use a **modular layout** that makes it easy to fork this structure into microsites for future products.  
- Use `app/` directory of Next.js 13+ for routing and layouts.  
- All text and headings should be pulled from a central `siteConfig.ts` for easy reuse.  
- Add a component system using Tailwind and shadcn/ui for UI primitives.

---

🗓️ ACTION PLAN (Weekly Breakdown)

**Week 1 – Setup & Structure**
- [ ] Scaffold project with Next.js + Tailwind CSS + Vercel deploy-ready
- [ ] Set up shadcn/ui for reusable UI components
- [ ] Build layout: header, footer, page container
- [ ] Implement navigation menu with Zoqta branding

**Week 2 – Core Sections**
- [ ] Hero section with animation / clean visual
- [ ] Zoqta mission + product intro
- [ ] Slack Bot MVP card with CTA to join waitlist
- [ ] Add values section (grid layout)
- [ ] Add blog placeholder (if needed)
  
**Week 3 – Infrastructure & Polish**
- [ ] Add Supabase for auth (e.g., early-access signups)
- [ ] Add form with input validation + API route
- [ ] Add animations / polish scroll behavior
- [ ] Setup GitHub Actions for auto deploys

**Week 4 – Launch Prep**
- [ ] Optimize for SEO and speed (Next.js Image, meta tags)
- [ ] Test responsive layout on all devices
- [ ] Final deploy to Vercel + custom domain setup
- [ ] Launch checklist + announcement copy

---

🎨 DESIGN SYSTEM GUIDELINES (based on reference):
- Use sans-serif fonts (e.g., Inter or Satoshi)
- Stick to a 2- or 3-color palette (modern + trustworthy)
- Button styles: ghost, solid, outline
- Grid layout: max 4 columns, mobile-first responsive
- Include hover states, subtle animations, and clean section transitions

---

Please help generate:
1. The folder structure for the project
2. Base layout components
3. Tailwind + shadcn UI configuration
4. Starter code for hero, mission, and product intro sections

Use clean, scalable React components, and keep code readable. Avoid clutter or premature optimization.
