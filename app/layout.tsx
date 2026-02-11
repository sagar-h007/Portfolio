import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'),
    title: {
        default: "Sagar - Software Developer & Open Source Contributor",
        template: "%s | Sagar",
    },
    description:
        "Full-stack software developer specializing in backend systems, distributed architectures, and developer tooling. Expert in Python, C++, JavaScript/TypeScript, React, Node.js, and building scalable solutions. Open source contributor focused on WebAssembly, systems programming, and modern web technologies.",
    keywords: [
        "Sagar software developer",
        "backend developer",
        "full stack engineer",
        "Python developer",
        "C++ developer",
        "JavaScript developer",
        "TypeScript developer",
        "React developer",
        "Node.js developer",
        "open source contributor",
        "distributed systems",
        "developer tools",
        "web development",
        "systems programming",
        "WebAssembly",
        "WASM",
        "portfolio",
        "software engineer",
    ],
    authors: [{ name: "Sagar", url: "https://github.com/sagar-h007" }],
    creator: "Sagar",
    publisher: "Sagar",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        title: "Sagar - Software Developer & Open Source Contributor",
        description:
            "Full-stack developer specializing in backend systems, distributed architectures, and developer tooling. Building scalable solutions with Python, C++, JavaScript, and modern frameworks.",
        siteName: "Sagar's Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Sagar - Software Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sagar - Software Developer & Open Source Contributor",
        description:
            "Full-stack developer specializing in backend systems, distributed architectures, and developer tooling.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png" }],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <StructuredData />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
