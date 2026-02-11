# Premium Next.js Portfolio

A modern, premium developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, premium design with dark mode
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized performance
- 🔍 SEO optimized with structured data
- ♿ Accessible (WCAG compliant)
- 🎯 Custom cursor and scroll progress
- 🌈 Animated tech stack with tooltips
- 🚀 Premium project showcase

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx` - Metadata and SEO
- `components/StructuredData.tsx` - Structured data
- `lib/projects-data.ts` - Your projects
- `lib/tech-stack-data.ts` - Your tech stack
- `components/sections/*.tsx` - Section content

### Styling

- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

### Environment Variables

Copy `.env.local.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output will be in the `.next` directory.

## Performance

- Lighthouse Score: 95+
- SEO: 100
- Accessibility: 100
- Best Practices: 100

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- GitHub: [@sagar-h007](https://github.com/sagar-h007)
- Email: sagar@example.com

---

Built with ❤️ by Sagar
