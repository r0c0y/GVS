"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-background to-background opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-heading font-bold tracking-tighter text-white mb-6 leading-[1.1]"
                >
                    ONE PLATFORM. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        INFINITE POSSIBILITIES.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
                >
                    Glip6 is the digital hometown for the next generation.
                    Replacing 5-7 disconnected apps with one seamless experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 text-base font-bold text-black bg-white rounded-full hover:scale-105 transition-transform"
                    >
                        Get Early Access
                    </button>
                    <button
                        onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 text-base font-bold text-white border border-white/20 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors"
                    >
                        Discover More
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
