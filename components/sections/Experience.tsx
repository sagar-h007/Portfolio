"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
    const experiences = [
        {
            role: "Software Developer",
            company: "Freelance / Open Source",
            period: "Jan 2022 - Present",
            description:
                "Developed and maintained multiple open-source projects with focus on developer tooling. Built full-stack applications using modern JavaScript frameworks and Python.",
            highlights: [
                "Created tools used by 500+ developers",
                "Contributed to 15+ open-source repositories",
                "Mentored junior developers in systems programming",
            ],
        },
    ];

    return (
        <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-16">
                        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/50 transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                                                <Briefcase className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {exp.role}
                                            </h3>
                                        </div>
                                        <p className="text-indigo-400 font-medium text-lg">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-3 md:mt-0">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <ul className="space-y-3">
                                    {exp.highlights.map((highlight, hIndex) => (
                                        <motion.li
                                            key={hIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + hIndex * 0.1 }}
                                            className="flex items-start text-slate-400"
                                        >
                                            <span className="text-indigo-400 mr-3 mt-1">▸</span>
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
