"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Product", href: "/#product" },
        { name: "About", href: "/about" },
        { name: "Team", href: "/#team" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                    scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
                )}
            >
                <div className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="GVS Logo" className="w-10 h-10 rounded-lg object-contain" />
                    <Link href="/" className="text-2xl font-heading font-bold tracking-tighter text-white">
                        GVS
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link
                        href="/#contact"
                        className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors inline-block"
                    >
                        Early Access
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-heading font-bold text-white hover:text-accent transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-4 text-xl font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-colors mt-4"
                        >
                            Early Access
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
