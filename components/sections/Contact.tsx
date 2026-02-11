"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/sagar-h007",
            icon: Github,
            color: "hover:bg-slate-700",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sagar-halladakeri-11949a369/",
            icon: Linkedin,
            color: "hover:bg-blue-600",
        },
    ];

    return (
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Let's Work Together
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Have a project in mind? Let's build something amazing together.
                    </p>

                    <motion.a
                        href="mailto:halladakerisagar@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors mb-12 group"
                    >
                        <Mail className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                        halladakerisagar@gmail.com
                    </motion.a>

                    <div className="flex justify-center gap-4 mt-16">
                        {socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-14 h-14 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center ${social.color} transition-all`}
                                    title={social.name}
                                    aria-label={social.name}
                                >
                                    <Icon className="w-5 h-5 text-slate-300" />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
