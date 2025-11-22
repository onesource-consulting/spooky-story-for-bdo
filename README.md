# Echoes in the Static

A browser-based text horror game created for BDO's AI spooky story contest (Unsubmitted). Built with React, Tailwind CSS, and Framer Motion.

## Story

You are a radio operator trapped during a storm at Remote Outpost #12. Your shift has just begun, but something is wrong. The radio picks up signals that shouldn't exist. Voices that sound... off. As your sanity deteriorates, reality itself begins to unravel.

## Gameplay

Each turn, you can choose one of three actions:

1. **Scan Frequency** - Tune to a random radio frequency and listen to transmissions
2. **Reply** - Respond to the last transmission you received (risky!)
3. **Investigate** - Explore different parts of the outpost

The game features:
- 🎭 Unreliable narration that intensifies as your sanity drops
- 📻 10 different frequency types with unique transmissions
- 🏚️ 6 investigation locations with disturbing discoveries
- 👻 Random eerie events that occur during gameplay
- 💀 Multiple ways to meet your doom
- 🎨 Atmospheric CRT monitor visual effects

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v3** - Styling
- **Framer Motion** - Animations
- **100% Client-Side** - No backend required

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This game can be deployed to any static hosting platform:

### Netlify

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

Or use the Netlify CLI:
```bash
netlify deploy --prod
```

### Vercel

1. Push your code to a Git repository
2. Import your project on Vercel
3. Vercel will auto-detect Vite settings

Or use the Vercel CLI:
```bash
vercel --prod
```

### GitHub Pages, Cloudflare Pages, etc.

This project works with any static hosting service. Just build and upload the `dist/` folder.

## Game Design Features

### Sanity System
- Starts at 100%
- Decreases with each action
- Affects what you see and experience
- Triggers unreliable narration below 30%
- Game over at 0%

### Transmission Types
- **Static** - White noise with hidden voices
- **Whisper** - Barely audible warnings
- **Emergency** - Broken emergency broadcasts
- **Music** - Disturbing melodies
- **Voice** - Conversations that shouldn't exist
- **Numbers** - Mysterious number stations
- **Distress** - Desperate calls for help
- **Children** - Innocent voices with dark intentions
- **Your Voice** - You hear yourself from the past/future
- **Morse Code** - Coded messages

### Investigation Locations
- Window
- Door
- Basement
- Equipment Room
- Ceiling
- Logbook

Each location has multiple possible discoveries that randomize on each playthrough.

## Credits

Created as a Halloween horror game experience. Perfect for a spooky night!

## License

MIT - Feel free to use, modify, and share!

---

*"The storm shows no sign of stopping..."*
