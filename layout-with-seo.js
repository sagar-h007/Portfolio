// app/layout.js - Root Layout with SEO
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Sagar - Software Developer & Open Source Contributor',
    template: '%s | Sagar Portfolio'
  },
  description: 'Full-stack developer specializing in backend systems, distributed architectures, and developer tooling. Experienced in Python, C++, JavaScript, and building scalable solutions.',
  keywords: [
    'software developer',
    'backend developer',
    'full stack developer',
    'Python developer',
    'C++ developer',
    'JavaScript developer',
    'open source',
    'distributed systems',
    'developer tools',
    'web development',
    'systems programming',
    'React developer',
    'Node.js developer'
  ],
  authors: [{ name: 'Sagar' }],
  creator: 'Sagar',
  publisher: 'Sagar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Update with your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Sagar - Software Developer & Open Source Contributor',
    description: 'Full-stack developer specializing in backend systems, distributed architectures, and developer tooling.',
    siteName: 'Sagar Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Sagar - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar - Software Developer & Open Source Contributor',
    description: 'Full-stack developer specializing in backend systems, distributed architectures, and developer tooling.',
    creator: '@sagar_codes',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
