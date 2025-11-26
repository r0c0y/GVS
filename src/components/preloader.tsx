"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Counter animation
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-8xl md:text-[12rem] font-heading font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
                        >
                            {count}%
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-muted text-sm uppercase tracking-[0.5em] font-medium"
                        >
                            Loading Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
