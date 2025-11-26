"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";

export function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

                {/* Brand */}
                <div className="flex flex-col gap-6 md:w-1/3">
                    <div>
                        <span className="text-2xl font-heading font-bold text-white">GVS</span>
                        <p className="text-muted text-sm mt-2">© 2025 Gondovirtualsystems MUi. All rights reserved.</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-4 md:items-end">
                    <h4 className="text-white font-bold">Connect</h4>
                    <div className="flex items-center gap-4">
                        <MagneticButton>
                            <Link href="mailto:gondovirtualsystems@gmail.com" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link href="https://wa.me/263718864863" target="_blank" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <MessageCircle className="w-5 h-5" />
                            </Link>
                        </MagneticButton>
                        <div className="w-[1px] h-5 bg-white/10 mx-2" />
                        <MagneticButton>
                            <Link href="#" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link href="#" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link href="#" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </footer>
    );
}
