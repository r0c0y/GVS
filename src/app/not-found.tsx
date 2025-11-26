"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
            {/* Background Glitch Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] animate-pulse" />
            </div>

            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-[10rem] md:text-[15rem] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none"
            >
                404
            </motion.h1>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center z-10"
            >
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Lost in the Void</h2>
                <p className="text-muted mb-8 max-w-md mx-auto">
                    The page you are looking for has drifted into deep space.
                    Let's get you back to base.
                </p>

                <Link
                    href="/"
                    className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform inline-block"
                >
                    Return Home
                </Link>
            </motion.div>
        </div>
    );
}
