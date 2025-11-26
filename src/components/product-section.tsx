"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const features = [
    {
        id: 1,
        title: "Unified Workspace",
        subtitle: "Seamlessly integrate tasks, docs, and AI tools",
        image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Social Hub",
        subtitle: "Real-time chat, voice spaces, and community",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Smart Automation",
        subtitle: "Automate workflows with intelligent controls",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
];

export function ProductSection() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section id="product" className="py-24 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Everything You Need. <br />
                        <span className="text-muted">In One Place.</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Experience the future of productivity. Glip6 consolidates your entire digital life into one powerful, cohesive platform.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[500px]">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={cn(
                                "relative flex-1 overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out group",
                                activeId === feature.id ? "flex-[3]" : "flex-1 hover:flex-[1.5]"
                            )}
                            onMouseEnter={() => setActiveId(feature.id)}
                            onMouseLeave={() => setActiveId(null)}
                            onClick={() => setActiveId(feature.id)}
                        >
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-3xl font-heading font-bold text-white mb-2">{feature.title}</h3>
                                <p className={cn(
                                    "text-gray-200 transition-all duration-500 overflow-hidden",
                                    activeId === feature.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0 md:group-hover:max-h-20 md:group-hover:opacity-100"
                                )}>
                                    {feature.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
