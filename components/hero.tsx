"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, FileText, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
            {/* Soft ambient background */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(241,245,249,0.5))]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl mx-auto px-6 md:px-8 text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-[#2F7F6F]"></span>
                    <span className="text-sm font-medium text-[#4B5563]">AI-Powered Learning Assistant</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F2937] leading-[1.1] tracking-tight mb-8">
                    Turn messy lectures into <br className="hidden md:block" />
                    <span className="text-[#2F7F6F]">clear, readable notes.</span>
                </h1>

                <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed mb-10">
                    We extract the transcript, identify key concepts, and explain them in simple, human language. No more pausing and rewinding.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Button className="btn-premium h-12 px-8 text-base">
                        Start for free
                    </Button>
                    <Button variant="outline" className="h-12 px-8 rounded-lg border-[#E2E8F0] text-[#1F2937] hover:bg-transparent hover:text-[#1F2937] text-base font-semibold transition-all">
                        <Play className="w-4 h-4 mr-2 fill-current opacity-60" />
                        See how it works
                    </Button>
                </div>

                {/* Main Visual - A Clean Document Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="relative rounded-xl border border-[#E2E8F0] bg-white shadow-xl overflow-hidden">
                        {/* Browser Chrome / Header */}
                        <div className="h-10 bg-[#FAFAF9] border-b border-[#E2E8F0] flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
                                <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
                                <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
                            </div>
                            <div className="ml-4 h-5 w-64 bg-[#F1F5F9] rounded-md" />
                        </div>

                        {/* Content Split */}
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left: Video Placeholder */}
                            <div className="p-8 border-b md:border-b-0 md:border-r border-[#E2E8F0] bg-[#FAFAF9] flex flex-col items-center justify-center min-h-[400px]">
                                <div className="w-16 h-16 rounded-full bg-[#E2E8F0] flex items-center justify-center mb-4">
                                    <Play className="w-6 h-6 text-[#9CA3AF] ml-1" />
                                </div>
                                <p className="text-[#6B7280] font-medium">Original Video Source</p>
                                <p className="text-[#9CA3AF] text-sm mt-1">Paste a YouTube link</p>
                            </div>

                            {/* Right: Extracted Note */}
                            <div className="p-8 bg-white text-left">
                                <div className="flex items-center gap-2 mb-6">
                                    <Sparkles className="w-4 h-4 text-[#2F7F6F]" />
                                    <span className="text-xs font-semibold text-[#2F7F6F] uppercase tracking-wider">Generated Note</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-8 w-3/4 bg-[#1F2937] rounded-md opacity-90" /> {/* Heading */}
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-[#F3F4F6] rounded" />
                                        <div className="h-4 w-full bg-[#F3F4F6] rounded" />
                                        <div className="h-4 w-5/6 bg-[#F3F4F6] rounded" />
                                    </div>

                                    <div className="p-4 rounded-lg bg-[#FAFAF9] border border-[#E2E8F0] mt-6">
                                        <div className="h-4 w-1/3 bg-[#E5E7EB] rounded mb-3" />
                                        <div className="h-20 w-full bg-white border border-[#E2E8F0] rounded" /> {/* Chart placeholder */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
