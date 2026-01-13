"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Examples", href: "#examples" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
                ? "h-16 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-md"
                : "h-20 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-sm font-medium text-[#4B5563] hover:bg-transparent hover:text-[#4B5563]">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="btn-premium px-5 h-9 text-sm">
                            Start Free
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
