"use client";

import { motion } from "framer-motion";
import { CoreValuesCircle } from "@/components/core-values-circle";

export default function AboutPage() {

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-heading font-bold tracking-tighter text-white mb-8"
                    >
                        WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GVS.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-muted max-w-3xl mx-auto leading-relaxed"
                    >
                        Gondovirtualsystems (GVS) is a forward-thinking software and hardware company.
                        Our mission is to revolutionize how people interact with technology.
                    </motion.p>
                </div>
            </section>

            {/* Story & Vision - Clean Minimal Layout */}
            <section className="py-32 px-4 border-t border-white/5">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Story */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                        <div className="md:w-1/3 sticky top-32">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter"
                            >
                                OUR<br />STORY
                            </motion.h2>
                            <div className="h-1 w-20 bg-accent mt-6" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:w-2/3 space-y-8 text-xl text-muted leading-relaxed font-light"
                        >
                            <p>
                                Originally founded in 2022 as <span className="text-white font-medium">AE (Arg Electronics)</span>, we realized that hardware was only half the equation. The digital world was becoming fragmented, with users juggling too many tools.
                            </p>
                            <p>
                                We evolved into <span className="text-white font-medium">GVS</span> to solve this. We are builders, dreamers, and problem-solvers dedicated to creating a "digital hometown" for the world.
                            </p>
                        </motion.div>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                        <div className="md:w-1/3 sticky top-32">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter"
                            >
                                OUR<br />VISION
                            </motion.h2>
                            <div className="h-1 w-20 bg-white mt-6" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:w-2/3 space-y-8 text-xl text-muted leading-relaxed font-light"
                        >
                            <p>
                                To shape the future of tech by merging <span className="text-white font-medium">human-centered design</span> with <span className="text-white font-medium">intelligent automation</span>.
                            </p>
                            <p>
                                Our flagship product, <strong className="text-white">Glip6</strong>, is the embodiment of this vision—a unified platform where work, social, and automation coexist.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </section>



            {/* Animated Divider */}
            <div className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px]"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"
                    />
                </div>
            </div>



            {/* Core Values */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-center mb-8">Core Values</h2>
                    <CoreValuesCircle />
                </div>
            </section>
        </div>
    );
}
