"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import { Scene3D } from "@/components/scene-3d";

export function EarlyAccessForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            <Scene3D />
            <div className="absolute inset-0 bg-accent/5" />
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                        Join the Revolution.
                    </h2>
                    <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
                        Be among the first to experience Glip6. Get early access and shape the future of digital work.
                    </p>

                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center gap-4 text-green-400"
                        >
                            <CheckCircle className="w-12 h-12" />
                            <p className="text-xl font-medium">You're on the list! We'll be in touch.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all shadow-[0_0_15px_rgba(83,91,242,0.1)] focus:shadow-[0_0_25px_rgba(83,91,242,0.3)]"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                            >
                                {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Waitlist"}
                            </button>
                        </form>
                    )}

                    {status === "error" && (
                        <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
