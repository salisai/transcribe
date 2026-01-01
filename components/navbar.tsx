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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                scrolled 
                    ? "h-16 py-0 rounded-2xl mx-4 mt-3 left-4 right-4 border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm" 
                    : "h-20 py-4 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-heading font-medium text-charcoal hover:text-black transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-sm font-heading font-medium text-charcoal hover:text-black">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="btn-3d px-6 h-10 text-sm font-heading font-medium rounded-xl">
                            Start Free
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
