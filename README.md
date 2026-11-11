# 🎓 Learners B.A.Y (Learnerbay) — Developer Roadmaps & Course Path Advisor

An educational learning portal and **Course Recommendation Web Application** combining a static multi-page roadmap & curated-resources hub (`test/`) with an interactive React + TypeScript **Course Recommendation Model** (`web-path-advisor-main/`).

👤 **Author:** [Muqtabis Ahmar](https://github.com/Muqtabis)

---

## ✨ Key Features

### 1. Learners B.A.Y Static Portal (`test/`)
- **🗺️ Structured Career Roadmaps (`Roadmaps.html` & Timeline Pages)**
  - Dedicated step-by-step timeline pages for 6 career tracks:
    - **Frontend Development** (`Timeline.html`)
    - **Backend Development** (`timeline2.html`)
    - **Android Development** (`timeline3.html`)
    - **Data Analyst** (`timeline4.html`)
    - **DevOps** (`timeline5.html`)
    - **AI & Machine Learning** (`timeline6.html`)
- **📚 Searchable Resource Directory (`resource.html`)**
  - Hand-picked learning links with live table filtering (`filterTable()`) and study tips.
- **🤖 Integrated Study Assistant Link**
  - Floating chatbot action button across pages linking to the companion AI chatbot.

### 2. Course Recommendation Web App (`web-path-advisor-main/`)
- **🧭 Interactive Preference Questionnaire (`/recommendation`)**
  - Captures user **Learning Track** (*Frontend, MERN Stack, Android, Data Analytics*), **Experience Level** (*Beginner, Intermediate, Advanced*), **Weekly Time Commitment**, and **Career Goals** (*Become job-ready, Build a portfolio, Learn fundamentals, Switch careers, Advance existing skills*), persisted in `localStorage`.
- **🎯 Personalized Results Dashboard (`/results`)**
  - Displays recommended courses with provider, duration, rating, tags, and match percentage badges, with level-based tab filtering (`Recommended`, `Beginner`, `Intermediate`, `Advanced`).
- **📖 About & FAQ (`/about`)**
  - Explains selection criteria and track coverage across Frontend, MERN Stack, Android, and Data Analytics.

---

## 🛠️ Tech Stack

| Module | Technologies |
| :--- | :--- |
| **Static Portal (`test/`)** | HTML5, CSS3 (Glassmorphism, Responsive Grid & Scroll Reveal via `IntersectionObserver`), Vanilla JavaScript, Remix Icon, Google Fonts (`Poppins`) |
| **Course Advisor (`web-path-advisor-main/`)** | React 18, TypeScript, Vite (`@vitejs/plugin-react-swc`), React Router DOM v6, Tailwind CSS, `shadcn/ui` (Radix UI primitives), `lucide-react`, `@tanstack/react-query`, `react-hook-form`, `zod` |

---

## 📁 Project Structure

```text
Learnerbay/
├── test/                               # Static Learners B.A.Y portal
│   ├── image/                          # Visual assets and roadmap icons
│   ├── index.html                      # Landing page with hero, CTA & feature cards
│   ├── Roadmaps.html                   # 6-track career roadmap hub
│   ├── Timeline.html                   # Frontend Development roadmap
│   ├── timeline2.html                  # Backend Development roadmap
│   ├── timeline3.html                  # Android Development roadmap
│   ├── timeline4.html                  # Data Analyst roadmap
│   ├── timeline5.html                  # DevOps roadmap
│   ├── timeline6.html                  # AI & ML roadmap
│   ├── resource.html                   # Searchable curated resources table
│   └── about.html                      # About Learners B.A.Y
├── web-path-advisor-main/              # React + TypeScript Course Recommendation App
│   ├── public/
│   ├── src/
│   │   ├── components/                 # Header, Footer, HeroSection, RecommendationForm, CourseCard, ui/*
│   │   ├── data/
│   │   │   └── courses.ts              # Curated course catalog across 4 specialization tracks
│   │   ├── pages/                      # Index, RecommendationPage, ResultsPage, AboutPage, NotFound
│   │   └── App.tsx                     # Router & React Query providers
│   ├── package.json
│   └── vite.config.ts
└── package.json                        # Root Vite configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended) and npm

### 1. Clone the repository
```bash
git clone https://github.com/Muqtabis/Learnerbay.git
cd Learnerbay
```

### 2. Run the Course Recommendation App (`web-path-advisor-main/`)
```bash
cd web-path-advisor-main
npm install
npm run dev
```
The Vite development server starts on `http://localhost:8080` (configured in `web-path-advisor-main/vite.config.ts`).

To build for production:
```bash
npm run build
```

### 3. Preview the Static Portal (`test/`)
Open `test/index.html` directly in a browser or serve it with any local static file server (for example, `npx vite` from the repository root and navigating to `/test/index.html`).
