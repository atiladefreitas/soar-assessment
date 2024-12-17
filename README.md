# Finance Dashboard [ SOAR Assessment]

A modern and responsive finance dashboard built with Next.js, React, TypeScript and Tailwind CSS.

## Features

- 📊 Interactive charts and analytics
- 💳 Credit card management
- 📱 Responsive design
- 🔄 Quick transfer functionality
- 📈 Real-time balance tracking
- 📱 Mobile-first approach

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Linting:** Biome
- **Charts:** ApexCharts
- **Motion:** Framer Motion
- **Components:** Lucide Icons

## Why pnpm?

I chose pnpm for its:

- Faster installation times
- Efficient disk space usage through content-addressable storage
- Strict package management with better dependency resolution
- Built-in monorepo support

## Why Biome?

Biome offers:

- Single tool for formatting, linting and more
- Significantly faster than ESLint
- Zero configuration needed
- TypeScript support out of the box
- Consistent code style enforcement

## Installation

1. Clone the repository:

```bash
git clone https://github.com/atiladefreitas/soar-assessment
cd soar-assessment
```

2. Install pnpm (if not installed):

```bash
npm install -g pnpm
```

3. Install dependencies:

```bash
pnpm install # recomended
# or
yarn install
# or
npm install
```

4. Run the development server:

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## Project Structure

```
src/
├── app/              # App router pages
├── components/       # React components
├── mocks/           # Mock data
└── styles/          # Global styles
```
