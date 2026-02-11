"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Users, BookOpen } from "lucide-react";

export function About() {
    const principles = [
        { icon: Zap, text: "Problem-Solving First", color: "text-yellow-400" },
        { icon: Rocket, text: "Performance Matters", color: "text-indigo-400" },
        { icon: Users, text: "Open Collaboration", color: "text-green-400" },
        { icon: BookOpen, text: "Continuous Learning", color: "text-purple-400" },
    ];

    return (
        <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold mb-16"
                    >
                        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            This is me.
                        </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-white">
                                Hi, I'm Sagar.
                            </h3>
                            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                                <p>
                                    I'm a software developer dedicated to crafting efficient solutions
                                    for complex technical challenges. I specialize in backend
                                    development, distributed systems, and creating tools that empower
                                    other developers.
                                </p>
                                <p>
                                    My approach focuses on building scalable, high-performing
                                    applications that solve real-world problems. I have extensive
                                    experience working with Python, C++, JavaScript, and various modern
                                    frameworks.
                                </p>
                                <p>
                                    I believe in continuous learning and collaboration. The developer
                                    community has taught me so much, and I'm committed to giving back
                                    through open source contributions and knowledge sharing.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
                        >
                            <h4 className="text-xl font-semibold text-indigo-400 mb-6">
                                Core Principles
                            </h4>
                            <ul className="space-y-6">
                                {principles.map((principle, index) => {
                                    const Icon = principle.icon;
                                    return (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="flex items-center space-x-4"
                                        >
                                            <div
                                                className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700 ${principle.color}`}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg text-slate-200">
                                                {principle.text}
                                            </span>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
