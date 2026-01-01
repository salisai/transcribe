"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Share2, FileDown, Copy, Menu, X, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Logo from "@/components/logo";

export default function ArticleViewPage({ params }: { params: { id: string } }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toc = [
        { title: "Introduction", href: "#intro" },
        { title: "The Quantum Enigma", href: "#quantum" },
        { title: "Information as a Fundamental", href: "#info" },
        { title: "The Double-Slit Experiment", href: "#double-slit" },
        { title: "Observer Influence", href: "#observer" },
        { title: "Conclusion", href: "#conclusion" },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Mobile Header */}
            <header className="md:hidden h-16 border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 bg-white z-50">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </header>

            {/* Sidebar (Left Panel) */}
            <aside className={`
        fixed inset-0 z-40 md:relative md:inset-auto md:w-80 md:flex flex-col bg-[#FDFCFB] border-r border-[#E5E5E5] transition-transform duration-300
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
                <div className="h-full flex flex-col p-8">
                    <Link href="/dashboard" className="hidden md:flex items-center gap-2 text-sm text-[#525252] hover:text-[#0A0A0A] transition-colors mb-12">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>

                    <div className="space-y-4 mb-12">
                        <h1 className="text-xl font-heading font-bold text-[#0A0A0A] leading-snug">
                            Effective Learning Systems for Modern Researchers
                        </h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                                <Clock className="w-3 h-3" />
                                Original: 1h 32m
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                                <Calendar className="w-3 h-3" />
                                Generated: Dec 28, 2024
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-[#E5E5E5] pt-12">
                        <h4 className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-[0.2em] mb-6">Contents</h4>
                        <nav className="space-y-1">
                            {toc.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="block py-2.5 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors border-l-2 border-transparent hover:border-[#E5E5E5] pl-4 -ml-px"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="mt-auto pt-8 border-t border-[#E5E5E5] hidden md:block">
                        <p className="text-[10px] text-[#A3A3A3] leading-relaxed">
                            TRANSCRIPTION ID: {params.id}<br />
                            ENGINE: GPT-4o-Turbo
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Sticky Action Bar */}
                <header className="h-20 glass sticky top-0 z-30 px-12 hidden md:flex items-center justify-between border-b border-[#E5E5E5]">
                    <span className="text-sm font-medium text-[#A3A3A3] truncate max-w-sm">
                        Effective Learning Systems for Modern Researchers
                    </span>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" className="rounded-lg h-9 gap-2 border-[#E5E5E5] font-heading font-medium text-xs">
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-lg h-9 gap-2 border-[#E5E5E5] font-heading font-medium text-xs">
                            <FileDown className="w-3.5 h-3.5" />
                            Markdown
                        </Button>
                        <Button size="sm" className="btn-3d rounded-lg h-9 gap-2 font-heading font-medium text-xs">
                            <FileDown className="w-3.5 h-3.5" />
                            PDF
                        </Button>
                    </div>
                </header>

                {/* Content Section */}
                <main className="flex-1 w-full max-w-3xl mx-auto px-6 md:px-12 py-16 font-source-serif">
                    <article className="prose prose-zinc prose-lg max-w-none">
                        <h1 id="intro" className="font-heading font-bold text-4xl mb-12 text-[#0A0A0A]">Introduction</h1>
                        <p className="text-xl text-[#525252] leading-[1.8] mb-8 italic">
                            "The goal of education is not the knowledge of facts, but of values."
                        </p>
                        <p className="text-lg text-[#0A0A0A] leading-[1.8] mb-8">
                            In this lecture, we explore the intersection of cognitive science and modern research practices. As the volume of information continues to grow exponentially, the ability to filter, synthesize, and retain knowledge has become a critical skill for any academic or professional.
                        </p>

                        <h2 id="quantum" className="font-heading font-bold text-3xl mt-16 mb-8 text-[#0A0A0A]">The Quantum Enigma</h2>
                        <p className="text-lg text-[#0A0A0A] leading-[1.8] mb-8">
                            The fundamental question of how we learn often leads to the core principles of physics. Information, at its most basic level, behaves in ways that mirror quantum mechanics. When we observe a piece of data, we inevitably change our own internal state—a cognitive "collapse of the wave function."
                        </p>
                        <ul className="space-y-4 mb-8 text-[#525252] list-disc pl-6 leading-relaxed">
                            <li>Non-locality of ideas across disciplines</li>
                            <li>Entanglement between memory and context</li>
                            <li>Superposition of multiple interpretations</li>
                        </ul>

                        <h2 id="info" className="font-heading font-bold text-3xl mt-16 mb-8 text-[#0A0A0A]">Information as a Fundamental</h2>
                        <p className="text-lg text-[#0A0A0A] leading-[1.8] mb-8">
                            Information isn't just something we process; it is a fundamental property of the universe. In the context of learning, we must treat information not as a passive resource but as an active agent that shapes our perspective.
                        </p>
                        <div className="bg-[#F5F5F5] rounded-xl p-8 border border-[#E5E5E5] mb-8">
                            <h4 className="font-heading font-bold mb-4 text-[#0A0A0A]">Key Takeaway</h4>
                            <p className="text-[#525252] text-balance leading-relaxed">
                                Successful researchers don't just collect information; they build information networks that evolve with their understanding.
                            </p>
                        </div>

                        <h2 id="double-slit" className="font-heading font-bold text-3xl mt-16 mb-8 text-[#0A0A0A]">The Double-Slit Experiment</h2>
                        <p className="text-lg text-[#0A0A0A] leading-[1.8] mb-8">
                            Thinking about learning through the lens of the double-slit experiment provides a powerful metaphor. Just as light can be both a wave and a particle, knowledge can be both a fleeting experience and a solid fact.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm text-gray-300 mb-8 overflow-x-auto shadow-2xl">
                            <pre className="whitespace-pre-wrap">
                                {`function calculateRetention(exposure, time) {
  const decayConstant = 0.5;
  return exposure * Math.exp(-decayConstant * time);
}`}
                            </pre>
                        </div>

                        <h2 id="conclusion" className="font-heading font-bold text-3xl mt-16 mb-8 text-[#0A0A0A]">Conclusion</h2>
                        <p className="text-lg text-[#0A0A0A] leading-[1.8] mb-12">
                            As we wrap up this exploration, remember that the tools you use to transform video into text are not just for convenience—they are cognitive enhancers. By converting lectures into readable form, you allow your brain to engage with the material at its own pace, facilitating deep work and long-term retention.
                        </p>
                    </article>
                </main>
            </div>
        </div>
    );
}
