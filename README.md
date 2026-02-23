# 🌐 Rishab Thapliyal — Developer Portfolio

> **Full Stack Developer** crafting scalable web systems with Next.js, TypeScript & PostgreSQL.

[![Live Portfolio](https://img.shields.io/badge/Portfolio-Live-f59e0b?style=for-the-badge&logo=vercel&logoColor=black)](https://rishab-portfolio-one.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/rishab-thapliyal-b72514221/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/RishabThapliyal)
[![LeetCode](https://img.shields.io/badge/LeetCode-900%2B-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Rishabth_/)

---

## ✨ About

This is my personal developer portfolio — built from scratch with a dark, minimal aesthetic using **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. It showcases my projects, skills, education, and contact information in a clean, performance-first design.

---

## 🖥️ Sections

| Section       | Description                                       |
| ------------- | ------------------------------------------------- |
| **Hero**      | Introduction, availability status & quick links   |
| **Education** | B.Tech CSE (CGPA 8.15) & school background        |
| **Projects**  | Featured full-stack & ML projects with live demos |
| **Skills**    | Tech stack, stats (900+ LeetCode), certifications |
| **Contact**   | Email, LinkedIn, GitHub & phone                   |

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Framework  | Next.js 16 (App Router)           |
| Language   | TypeScript                        |
| Styling    | Tailwind CSS v4                   |
| Fonts      | DM Serif Display + JetBrains Mono |
| Deployment | Vercel                            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/RishabThapliyal/rishab-portfolio.git
cd rishab-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles, animations, custom fonts
├── components/
│   ├── Navbar.tsx          # Fixed navbar with mobile menu
│   ├── Hero.tsx            # Landing section with shimmer effects
│   ├── Education.tsx       # Education timeline
│   ├── Projects.tsx        # Project cards with tech stack
│   ├── Skills.tsx          # Skills grid + stats + achievements
│   └── Contact.tsx         # Contact links + footer
├── public/
│   └── Rishab_Resume_Final.pdf
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 🚀 Featured Projects

### 📅 [Leave & Attendance Management System](https://github.com/RishabThapliyal/leave-attendance-marking-system)

> Enterprise-grade attendance system with immutable event architecture

- Immutable event model — cancel + recreate strategy ensures 100% data integrity
- Zod rule engine — server-side validation with `{ allowed, reason, statusCode }`
- Month locking with `HTTP 423`, full audit log trail
- FullCalendar UI + RTK Query for optimized state updates

`Next.js` `TypeScript` `PostgreSQL` `Prisma` `Redux Toolkit` `Zod`
[![Live](https://img.shields.io/badge/Live-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://leave-attendance-system.netlify.app/)

---

### 🔍 [Media Search App](https://github.com/RishabThapliyal/media-search-nextjs)

> Unified media discovery — search photos, videos & GIFs from one place

- 3 APIs integrated — Unsplash, Pexels & Giphy in a single search interface
- Paginated infinite scroll with Redux `appendResults` pattern
- Persistent collection system via `localStorage` + Redux hydration on mount
- Responsive grid layout — 1 to 5 columns across breakpoints

`Next.js` `JavaScript` `Redux Toolkit` `Tailwind CSS`
[![Live](https://img.shields.io/badge/Live-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://media-search-nextjs.netlify.app/)

---

### 🎬 [Video Scene Classification System](https://github.com/RishabThapliyal/Video-Scene-Classification-System)

> Natural language search inside video using multi-modal AI

- CLIP + Sentence Transformers for semantic video frame search
- OpenCV frame extraction pipeline with Flask backend
- Search any concept inside a video using plain English

`React.js` `Python` `Flask` `CLIP` `Sentence Transformers` `OpenCV`

---

## 🎨 Design Highlights

- **Dark monochromatic** base (`#0a0a0a`) with **amber** (`#f59e0b`) accent
- Custom **CSS animations** — shimmer on name hover, fade-up reveals, scroll bounce
- **Ghost text** effect on last name with stroke outline
- Animated **bottom-line sweep** on project & education cards
- Fully **responsive** — mobile hamburger menu + adaptive grid layouts
- Custom **scrollbar** styled in amber

---

## 📬 Contact

| Platform | Link                                                                        |
| -------- | --------------------------------------------------------------------------- |
| Email    | rishabthapliyal04@gmail.com                                                 |
| LinkedIn | [rishab-thapliyal](https://www.linkedin.com/in/rishab-thapliyal-b72514221/) |
| GitHub   | [RishabThapliyal](https://github.com/RishabThapliyal)                       |
| Phone    | +91 9119094811                                                              |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ by <strong>Rishab Thapliyal</strong> · © 2026</p>
