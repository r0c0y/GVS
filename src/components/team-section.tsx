"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Scene3D } from "@/components/scene-3d";

const team = [
    {
        name: "Revelations A. Gondo",
        role: "Founder & Lead Developer",
        bio: "Lead Developer of Glip6. Oversees technical direction and MVP development.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Priyanshu",
        role: "Web Developer & Chief Researcher",
        bio: "Company website development, pitch decks, and grant applications.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Blessing Chikotora",
        role: "Tester & Refiner",
        bio: "Ensures product quality through rigorous testing and refinement.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Anotidaishe Magobeya",
        role: "Tester & Refiner",
        bio: "Focuses on user experience testing and product stability.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    },
];

export function TeamSection() {
    return (
        <section id="team" className="py-24 px-4 relative overflow-hidden border-t border-white/5">
            <Scene3D />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Minds Behind Glip6</h2>
                    <p className="text-muted text-lg max-w-2xl">
                        Built by Gondovirtualsystems MUi - a team of young innovators united by a vision to shape the future with technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                                <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
