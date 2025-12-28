# 🎉 2025 Commit Rewind

> A beautiful, animated year-in-review experience for developers. Share your coding journey on LinkedIn!

![Demo](demo.gif)

## ✨ Features

- 🖥️ **Terminal Boot Animation** - Classic hacker-style intro
- 📊 **Animated Stats** - Spring-powered counters showing your year
- 🐛 **Bug Timeline** - Scroll-triggered animations for every bug you crushed
- 🔥 **Production Moment** - That one dramatic incident we all remember
- 📈 **Developer Insights** - Beautiful glassmorphism cards with your stats
- 🎊 **Confetti Finale** - Share your wins on LinkedIn & Twitter

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Effects**: canvas-confetti
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/commit-rewind.git

# Navigate to project
cd commit-rewind

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your rewind!

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Main page with all sections
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & animations
├── components/
│   ├── TerminalBoot/         # Terminal intro animation
│   ├── CommitCounter/        # Animated counter section
│   ├── BugTimeline/          # Bug fix timeline
│   ├── ProductionMoment/     # Dramatic incident showcase
│   ├── Stats/                # Stats cards with glassmorphism
│   └── FinalCTA/             # Share buttons & confetti
├── lib/
│   ├── types.ts              # TypeScript type definitions
│   ├── mockData.ts           # Mock commit & bug data
│   └── hooks/                # Custom React hooks
│       ├── useTypewriter.ts
│       └── useReducedMotion.ts
└── package.json
```

## 🎨 Customization

### Mock Data

Edit `lib/mockData.ts` to customize:
- Commit messages
- Bug descriptions
- Production incidents
- Stats and metrics

### Animations

All animations respect `prefers-reduced-motion` for accessibility.

Customize animation timing in component files:
- Spring physics in [CommitCounter.tsx](components/CommitCounter/CommitCounter.tsx)
- Typing speed in [useTypewriter.ts](lib/hooks/useTypewriter.ts)
- Confetti settings in [FinalCTASection.tsx](components/FinalCTA/FinalCTASection.tsx)

### Colors

Theme colors defined in [globals.css](app/globals.css):
- Primary: Cyan (#06b6d4)
- Background: Black (#000000)
- Surfaces: Zinc variants

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

Contributions welcome! Please open an issue or PR.

### Ideas for Enhancement

- [ ] GitHub API integration for real commit data
- [ ] User input for custom stats
- [ ] Export as video/GIF
- [ ] Multiple theme options
- [ ] Sound effects (optional)
