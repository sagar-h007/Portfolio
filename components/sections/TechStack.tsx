"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Server,
    Smartphone,
    GitBranch,
    Container,
    Cpu,
    Layers,
} from "lucide-react";
import { techStackData, categories } from "@/lib/tech-stack-data";
import { useState } from "react";

// Map tech names to Lucide icons
const iconMap: Record<string, any> = {
    Python: Code2,
    "C++": Cpu,
    JavaScript: Code2,
    TypeScript: Code2,
    Dart: Code2,
    React: Layers,
    "Next.js": Layers,
    "Node.js": Server,
    Express: Server,
    FastAPI: Server,
    Flask: Server,
    MongoDB: Database,
    PostgreSQL: Database,
    MySQL: Database,
    Redis: Database,
    Docker: Container,
    Git: GitBranch,
    Flutter: Smartphone,
    default: Code2,
};

const proficiencyColors = {
    expert: "from-green-500 to-emerald-500",
    advanced: "from-blue-500 to-cyan-500",
    intermediate: "from-yellow-500 to-orange-500",
    learning: "from-purple-500 to-pink-500",
};

export function TechStack() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    return (
        <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-16">
                        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Tech Stack
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, categoryIndex) => {
                            const categorySkills = techStackData.filter(
                                (tech) => tech.category === category
                            );

                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                                    className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300"
                                >
                                    <h3 className="text-indigo-400 font-semibold uppercase tracking-wider mb-6 text-sm">
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {categorySkills.map((tech, techIndex) => {
                                            const Icon = iconMap[tech.name] || iconMap.default;
                                            const isHovered = hoveredTech === tech.name;

                                            return (
                                                <motion.div
                                                    key={tech.name}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                                                    }}
                                                    whileHover={{ scale: 1.1, y: -5 }}
                                                    onHoverStart={() => setHoveredTech(tech.name)}
                                                    onHoverEnd={() => setHoveredTech(null)}
                                                    className="relative flex flex-col items-center gap-2 cursor-default"
                                                >
                                                    <motion.div
                                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${proficiencyColors[tech.proficiency]
                                                            } p-[2px] relative`}
                                                        animate={{
                                                            boxShadow: isHovered
                                                                ? "0 0 30px rgba(99, 102, 241, 0.6)"
                                                                : "0 0 0px rgba(99, 102, 241, 0)",
                                                        }}
                                                    >
                                                        <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                                                            <Icon className="w-7 h-7 text-white" />
                                                        </div>
                                                    </motion.div>
                                                    <span className="text-xs text-center text-slate-300 font-medium">
                                                        {tech.name}
                                                    </span>

                                                    {/* Tooltip */}
                                                    {isHovered && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="absolute -top-20 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs whitespace-nowrap z-10 shadow-xl"
                                                        >
                                                            <div className="text-indigo-400 font-semibold mb-1">
                                                                {tech.proficiency.toUpperCase()}
                                                            </div>
                                                            {tech.yearsOfExperience && (
                                                                <div className="text-slate-400">
                                                                    {tech.yearsOfExperience}+ years
                                                                </div>
                                                            )}
                                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-700 rotate-45" />
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
