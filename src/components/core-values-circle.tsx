"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Users, Zap, Target, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
    {
        id: "innovation",
        icon: Lightbulb,
        title: "Innovation",
        desc: "Pushing boundaries of what's possible.",
        position: "top-left"
    },
    {
        id: "user-centric",
        icon: Users,
        title: "User-Centric",
        desc: "Designing for humans, not just users.",
        position: "top-right"
    },
    {
        id: "efficiency",
        icon: Zap,
        title: "Efficiency",
        desc: "Streamlining complex workflows.",
        position: "bottom-left"
    },
    {
        id: "impact",
        icon: Target,
        title: "Impact",
        desc: "Creating technology that matters.",
        position: "bottom-right"
    },
];

export function CoreValuesCircle() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full py-20 flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-6xl mx-auto px-4 min-h-[600px] flex items-center justify-center">

                {/* Central Pulse Effect */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] animate-pulse" />
                </div>

                {/* Central Button */}
                <motion.button
                    layoutId="circle-expand"
                    onClick={() => setIsOpen(true)}
                    className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center group cursor-pointer shadow-2xl shadow-accent/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Play className="w-10 h-10 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />

                    {/* Ripple rings */}
                    <div className="absolute inset-0 rounded-full border border-white/20 scale-125 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 rounded-full border border-white/10 scale-150 opacity-0 group-hover:scale-175 group-hover:opacity-100 transition-all duration-700 delay-100" />
                </motion.button>

                {/* Values Items */}
                <div className="absolute inset-0 pointer-events-none">
                    {values.map((val, i) => {
                        const isLeft = val.position.includes("left");
                        const isTop = val.position.includes("top");

                        return (
                            <motion.div
                                key={val.id}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: isTop ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={cn(
                                    "absolute w-full md:w-80 p-6 pointer-events-auto flex flex-col gap-3",
                                    isLeft ? "md:right-[55%] text-right items-end" : "md:left-[55%] text-left items-start",
                                    isTop ? "bottom-[55%]" : "top-[55%]"
                                )}
                            >
                                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                                    <val.icon className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-1">{val.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Expanded Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        >
                            <motion.div
                                layoutId="circle-expand"
                                className="w-full max-w-4xl bg-black border border-white/10 rounded-3xl overflow-hidden relative aspect-video flex items-center justify-center"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                    className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>

                                <div className="text-center p-8">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                                    >
                                        THE GVS VISION
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-xl text-muted max-w-2xl mx-auto"
                                    >
                                        We are building the operating system for the future of work.
                                        Where boundaries dissolve and potential is unleashed.
                                    </motion.p>
                                </div>

                                {/* Decorative background for modal */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
