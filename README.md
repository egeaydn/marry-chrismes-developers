# 🎉 2025 Commit Rewind

> *A beautiful, animated year-in-review experience for developers. Share your coding journey on LinkedIn!*

<div align="center">
  
```
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║  Dear Developer,                                                           ║
║                                                                            ║
║  Hello ladies and gentlemen, I am Ege.                                    ║
║                                                                            ║
║  I hope that 2026 will bring us a wonderful and hopeful future with our   ║
║  loved ones, our friends, our family, and perhaps our significant other,  ║
║  but most importantly, I hope that this year will pass peacefully         ║
║  without any wars.                                                         ║
║                                                                            ║
║  This year has been exhausting for all of us, but life goes on.           ║
║                                                                            ║
║  With love,                                                                ║
║  Ege Aydın                                                                 ║
║                                                                            ║
║  December 28, 2025                                                         ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

</div>

---

![Demo](demo.gif)

## ✨ Features

- 🖥️ **Terminal Boot Animation** - Classic hacker-style intro
- 📊 **Animated Stats** - Spring-powered counters showing your year
- 🐛 **Bug Timeline** - Scroll-triggered animations for every bug you crushed
- 🔥 **Production Moment** - That one dramatic incident we all remember
- 📈 **Developer Insights** - Beautiful glassmorphism cards with your stats
- 🎊 **Confetti Finale** - Share your wins on LinkedIn & Twitter

## 🚀 Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router) with React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Effects** | canvas-confetti |
| **Deployment** | Vercel |

</div>

### Key Dependencies

```json
{
  "next": "16.1.1",
  "react": "19.2.3",
  "framer-motion": "^11.x",
  "canvas-confetti": "^1.x",
  "tailwindcss": "^4"
}
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/egeaydn/commit-rewind-2025.git

# Navigate to project
cd commit-rewind-2025

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your rewind!

## 📁 Project Architecture

```
commit-rewind-2025/
│
├── 📱 app/
│   ├── page.tsx              # 🎯 Main orchestrator - coordinates all sections
│   ├── layout.tsx            # 🎨 Root layout with fonts & metadata
│   └── globals.css           # 💅 Global styles, animations & accessibility
│
├── 🎨 components/
│   ├── TerminalBoot/
│   │   └── TerminalBoot.tsx  # ⌨️  Terminal intro with typing animation
│   │
│   ├── CommitCounter/
│   │   ├── CommitCounter.tsx          # 🔢 Individual animated counter
│   │   └── CommitCounterSection.tsx   # 📊 Counter section with particles
│   │
│   ├── BugTimeline/
│   │   └── BugTimelineSection.tsx     # 🐛 Scroll-triggered bug timeline
│   │
│   ├── ProductionMoment/
│   │   └── ProductionMomentSection.tsx # 🔥 Dramatic incident showcase
│   │
│   ├── Stats/
│   │   └── StatsSection.tsx           # 📈 Glassmorphism stats cards
│   │
│   └── FinalCTA/
│       └── FinalCTASection.tsx        # 🎊 Confetti finale + social links
│
├── 📊 lib/
│   ├── types.ts              # 📝 TypeScript type definitions
│   ├── mockData.ts           # 🎲 Mock commit, bug & stats data
│   └── hooks/
│       ├── useTypewriter.ts  # ⌨️  Character-by-character typing
│       └── useReducedMotion.ts # ♿ Accessibility motion detection
│
├── 🎯 public/                # Static assets & images
├── 📦 package.json           # Dependencies & scripts
├── 📝 README.md              # Documentation (you are here!)
└── ⚙️  tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Mock Data

Edit [lib/mockData.ts](lib/mockData.ts) to customize:
- 💬 Commit messages and types
- 🐛 Bug descriptions and severity
- 🔥 Production incidents
- 📊 Developer stats and metrics

### Animation Tuning

All animations respect `prefers-reduced-motion` for accessibility.

**Customize timing:**
- 🔢 Spring physics → [CommitCounter.tsx](components/CommitCounter/CommitCounter.tsx) - `stiffness` & `damping`
- ⌨️  Typing speed → [useTypewriter.ts](lib/hooks/useTypewriter.ts) - `speed` parameter (default: 40ms)
- 🎊 Confetti → [FinalCTASection.tsx](components/FinalCTA/FinalCTASection.tsx) - `particleCount` & `duration`

### Color Theme

Theme colors in [globals.css](app/globals.css):
```css
--color-primary: #06b6d4;    /* Cyan */
--color-background: #000000;  /* Black */
--color-surface: #18181b;     /* Zinc-900 */
```

## 🎭 Animation Showcase

| Section | Animation Type | Trigger |
|---------|---------------|---------|
| 🖥️ Terminal Boot | Character-by-character typing | On mount |
| 📊 Commit Counter | Spring physics (useSpring) | Scroll into view |
| 🐛 Bug Timeline | Staggered reveal | Scroll trigger |
| 🔥 Production Moment | Multi-phase (error→fix→success) | Scroll into view |
| 📈 Stats Cards | Glassmorphism + hover effects | Scroll trigger |
| 🎊 Final CTA | Canvas confetti | Auto on view |

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click!

### Manual Build

```bash
npm run build
npm start
```

## ♿ Accessibility

- ✅ Semantic HTML throughout
- ✅ `prefers-reduced-motion` support
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast (WCAG AA)
- ✅ Screen reader friendly

## 📝 License

MIT License - feel free to use this for your own year-in-review!

## 🤝 Contributing

Contributions welcome! Please check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Enhancement Ideas

- [ ] 🔗 GitHub API integration for real commit data
- [ ] 💾 LocalStorage for user input persistence
- [ ] 🎥 Export as video/GIF for LinkedIn
- [ ] 🎨 Multiple theme variants
- [ ] 🔊 Sound effects (opt-in)

---

<div align="center">

**Made with ❤️ by [Ege Aydın](https://github.com/egeaydn)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/egeaydin34/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/egeaydn)

*Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion*

**2025 → 2026 | Commit. Push. Repeat.** 🚀

</div>
