# Sagar Portfolio - Setup Guide

## 🚀 Quick Start

This portfolio comes in three versions:
1. **Static HTML** - Ready to deploy, no build required
2. **React with Framer Motion** - Advanced animations (this guide)
3. **Content Document** - All copy and specifications

---

## 📦 React Version Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Create a new Next.js project:**
```bash
npx create-next-app@latest sagar-portfolio
cd sagar-portfolio
```

2. **Install dependencies:**
```bash
npm install framer-motion
# or
yarn add framer-motion
```

3. **Copy the component:**
- Copy `sagar-portfolio-react.jsx` content to `app/page.js` (for App Router)
- Or `pages/index.js` (for Pages Router)

4. **Update Tailwind config** (`tailwind.config.js`):
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
        },
        indigo: {
          500: '#6366f1',
          400: '#818cf8',
          300: '#a5b4fc',
        },
        purple: {
          500: '#8b5cf6',
        },
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
```

5. **Update global CSS** (`app/globals.css` or `styles/globals.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-slate-900 text-white;
}

html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-indigo-500 rounded;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-purple-500;
}
```

6. **Run development server:**
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your portfolio!

---

## 🎨 Customization Guide

### Colors
The portfolio uses a consistent color scheme. Update in `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  // etc.
}
```

### Content
Edit these sections in the React component:

1. **Hero Section** - Name, tagline, description
2. **About Section** - Personal bio and principles
3. **Skills** - Technology categories
4. **Projects** - Project details (title, description, tech, links)
5. **Experience** - Work history
6. **Contact** - Email and social links

### Fonts
To change fonts, update in `app/layout.js`:
```javascript
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})
```

---

## 📁 File Structure

```
sagar-portfolio/
├── app/
│   ├── page.js          # Main portfolio component
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── public/
│   ├── images/          # Your images
│   └── resume.pdf       # Your resume
├── components/          # Additional components
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Traditional Hosting
```bash
npm run build
npm run export  # Creates 'out' folder
# Upload 'out' folder to your hosting
```

---

## 🎭 Animation Customization

### Adjust Animation Speed
```javascript
// Find these in the component:
transition={{ duration: 0.6 }}  // Change to your preference
```

### Disable Animations
Set `once: false` in viewport options:
```javascript
viewport={{ once: false }}
```

### Add New Animations
Use Framer Motion variants:
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

<motion.div {...fadeInUp}>
  Content
</motion.div>
```

---

## 🔧 Performance Optimization

### Image Optimization
Use Next.js Image component:
```javascript
import Image from 'next/image'

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
  priority  // For hero images
/>
```

### Code Splitting
Components auto-split in Next.js. For manual control:
```javascript
import dynamic from 'next/dynamic'

const Projects = dynamic(() => import('./components/Projects'))
```

### Analytics
Add to `app/layout.js`:
```javascript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 📱 Mobile Responsiveness

The portfolio is fully responsive. Test breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Adjust in component with Tailwind responsive classes:
```javascript
className="text-base md:text-lg lg:text-xl"
```

---

## 🐛 Troubleshooting

### Framer Motion not working
Ensure you're using client component:
```javascript
'use client'  // Add at top of file

import { motion } from 'framer-motion'
```

### Animations laggy
Reduce animation complexity or:
```javascript
// Use GPU-accelerated properties only
transform: translateY(0)  // ✅ Good
top: 0                    // ❌ Avoid
```

### Build errors
```bash
# Clear cache
rm -rf .next
npm install
npm run build
```

---

## 📧 Support & Contact

For questions about this portfolio:
- GitHub: [@sagar-h007](https://github.com/sagar-h007)
- Email: sagar@example.com

---

## 📄 License

This portfolio template is free to use and modify for personal use.

---

## 🎯 Next Steps

1. ✅ Customize content with your information
2. ✅ Add your actual projects with screenshots
3. ✅ Update social media links
4. ✅ Add your resume/CV PDF
5. ✅ Configure custom domain
6. ✅ Set up analytics
7. ✅ Add blog section (optional)
8. ✅ Implement contact form
9. ✅ Add testimonials section
10. ✅ Deploy to production!

---

## 🌟 Features Included

- ✅ Smooth scroll animations
- ✅ Mobile-responsive design
- ✅ Dark theme optimized
- ✅ Fast page loads
- ✅ SEO optimized
- ✅ Accessible (WCAG 2.1)
- ✅ Modern tech stack
- ✅ Easy to customize
- ✅ Production-ready
- ✅ GitHub integration

---

**Built with ❤️ by Sagar**
