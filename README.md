# NexusAI - AI-Powered Productivity Platform

A modern, responsive landing page for NexusAI, an AI productivity platform. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

![NexusAI Landing Page](https://img.shields.io/badge/Next.js-16.0.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)

## Overview

NexusAI is a fictional AI-powered productivity platform landing page showcasing modern web design principles and best practices. The landing page features smooth animations, responsive design, and an engaging user interface that demonstrates the capabilities of cutting-edge web technologies.

## Features

### Design & UI
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Dark Mode First** - Beautiful dark theme with custom color system using OKLCH
- **Smooth Animations** - Powered by Framer Motion for fluid user interactions
- **Modern Glassmorphism** - Frosted glass effects with backdrop blur
- **Custom Animations** - Floating elements, gradient shifts, and pulse effects

### Sections
1. **Hero Section** - Eye-catching introduction with animated dashboard preview
2. **Features Section** - Six key features with icons and descriptions
3. **Testimonials Section** - Customer reviews with ratings and avatars
4. **Pricing Section** - Three-tier pricing cards with feature lists
5. **Footer** - Comprehensive links, social media, and legal information

### Technical Features
- **React 19** with React Compiler for optimized performance
- **Next.js 16** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS 4** with custom design system
- **Framer Motion** for declarative animations
- **shadcn/ui** components (Button, Badge, Card)
- **Vercel Analytics** integration
- **SEO Optimized** with proper metadata

## Tech Stack

- **Framework:** Next.js 16.0.5
- **UI Library:** React 19.2.0
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x
- **Animations:** Framer Motion 12.23.24
- **Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Package Manager:** npm/yarn/pnpm/bun

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kanchansin/nexus-ai.git
cd nexus-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
ai-productivity-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── page.tsx              # Main page component
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── header.tsx            # Navigation header
│   │   ├── hero-section.tsx      # Hero section with CTA
│   │   ├── features-section.tsx  # Features grid
│   │   ├── testimonial-section.tsx # Customer testimonials
│   │   ├── pricing-section.tsx   # Pricing plans
│   │   └── footer.tsx            # Footer with links
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── components.json               # shadcn/ui configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Color System

The project uses a custom OKLCH color system for better color consistency:

### Light Mode
- Background: `oklch(0.99 0 0)`
- Foreground: `oklch(0.12 0 0)`
- Accent: `oklch(0.55 0.18 250)`

### Dark Mode
- Background: `oklch(0.08 0 0)`
- Foreground: `oklch(0.96 0 0)`
- Accent: `oklch(0.6 0.2 250)`

## Custom Animations

Three custom keyframe animations are included:

1. **float** - Smooth floating motion (6s loop)
2. **pulse-glow** - Pulsing opacity effect (4s loop)
3. **gradient-shift** - Animated gradient background (8s loop)

## Customization

### Changing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --accent: oklch(0.55 0.18 250);
  /* Add more color customizations */
}
```

### Modifying Content

Each section component can be easily modified:

- **Features:** Edit the `features` array in `features-section.tsx`
- **Testimonials:** Update the `testimonials` array in `testimonial-section.tsx`
- **Pricing:** Modify the `plans` array in `pricing-section.tsx`

### Adding Sections

Create a new component in `src/components/` and import it in `src/app/page.tsx`.

## Build & Deployment

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed with a production URL

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Performance Optimizations

- **React Compiler** enabled for automatic performance optimizations
- **Font Optimization** using `next/font` for Inter and Geist Mono
- **Image Optimization** ready (when images are added)
- **Code Splitting** automatic with Next.js App Router
- **Tailwind CSS Purging** removes unused styles in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance

## Screenshots

![Hero Section](./docs/hero-screenshot.png)
![Features Section](./docs/features-screenshot.png)

## Future Enhancements

Potential improvements for the landing page:

- [ ] Add contact form with validation
- [ ] Implement newsletter subscription
- [ ] Add blog section
- [ ] Create demo video modal
- [ ] Integrate CMS for content management
- [ ] Add A/B testing for CTAs
- [ ] Implement cookie consent banner
- [ ] Add more micro-interactions
- [ ] Create case studies section
- [ ] Add live chat integration

## License

This project is for educational/portfolio purposes.

## Author

Created as an internship assignment demonstrating modern web development skills.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for the component system
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for the icon set
- [Vercel](https://vercel.com/) for hosting platform

---

**Note:** This is a fictional product landing page created for demonstration purposes. NexusAI is not a real product or service.