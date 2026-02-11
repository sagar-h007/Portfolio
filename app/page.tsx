"use client";

import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <CustomCursor />
            <ScrollProgress />
            <Navigation />
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
}
