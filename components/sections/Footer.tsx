"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <div className="text-center md:text-left">
                        <p className="text-slate-400 flex items-center gap-2 justify-center md:justify-start">
                            Designed & Built by Sagar
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        </p>
                        <p className="text-slate-500 text-sm mt-1">© 2026 All rights reserved</p>
                    </div>

                    <div className="flex gap-6 text-sm text-slate-400">
                        <a
                            href="https://github.com/sagar-h007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            @sagar-h007
                        </a>
                        <a
                            href="#home"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Back to Top ↑
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
