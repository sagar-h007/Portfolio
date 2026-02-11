"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/projects-data";

export function Projects() {
    return (
        <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-16">
                        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Selected Projects
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                                className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300"
                            >
                                {/* Project Icon Header */}
                                <div
                                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-black/20"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10">{project.icon}</span>
                                </div>

                                <div className="p-6">
                                    <div className="text-xs text-slate-500 font-mono mb-2">
                                        _{project.number}.
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-slate-900/50 border border-slate-700 rounded text-xs font-mono text-slate-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                                        >
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </motion.a>
                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
