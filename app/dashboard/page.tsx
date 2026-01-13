"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Youtube, TrendingUp, History, BookOpen, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VideoCard from "@/components/video-card";
import Logo from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


export default function DashboardPage() {
    const [isInputExpanded, setIsInputExpanded] = useState(false);
    const [url, setUrl] = useState("");

    const stats = [
        { label: "Total Converted", value: "12", icon: <BookOpen className="w-4 h-4" /> },
        { label: "Learning Time Saved", value: "24h", icon: <History className="w-4 h-4" /> },
    ];

    const articles = [
        { id: "dQw4w9WgXcQ", title: "Effective Learning Systems for Modern Researchers", status: "complete", timestamp: "Dec 24, 2024" },
        { id: "abcd123", title: "The Future of Artificial Intelligence in Academic Writing", status: "processing", timestamp: "Dec 28, 2024" },
        { id: "efgh456", title: "Quantum Computing: From Basics to Advanced Principles", status: "complete", timestamp: "Dec 15, 2024" },
        { id: "ijkl789", title: "Neuroscience of Memory and Information Retention", status: "complete", timestamp: "Dec 10, 2024" },
    ];

    return (
        <div className="min-h-screen bg-[#FAFAF9]">
            {/* Top Navigation - Clean & Minimal */}
            <nav className="h-16 bg-white border-b border-[#E2E8F0] sticky top-0 z-40 px-6">
                <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="hidden md:flex text-sm font-medium text-[#6B7280] hover:text-[#111827]">Help</Button>
                        <Avatar className="h-8 w-8 border border-[#E2E8F0]">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="text-xs">JD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-12">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-[#1F2937] tracking-tight">Library</h1>
                        <p className="text-[#6B7280] mt-1">Manage your study materials and insights.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex gap-3 items-center">
                                <div className="p-2 rounded-md bg-[#F1F5F9] text-[#4B5563]">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">{stat.label}</p>
                                    <p className="text-lg font-semibold text-[#1F2937]">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conversion Section - Accordion Style or Clean Card */}
                <div className="mb-12">
                    {!isInputExpanded ? (
                        <button
                            onClick={() => setIsInputExpanded(true)}
                            className="w-full bg-white border border-dashed border-[#CBD5E1] rounded-xl p-8 flex flex-col items-center justify-center gap-4 text-[#6B7280] hover:bg-[#F9FAFB] hover:border-[#94A3B8] transition-all group"
                        >
                            <div className="h-12 w-12 rounded-full bg-[#F3F4F6] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Plus className="w-6 h-6 text-[#4B5563]" />
                            </div>
                            <span className="font-medium">Convert a new video</span>
                        </button>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-[#1F2937]">New Conversion</h2>
                                <button onClick={() => setIsInputExpanded(false)} className="text-[#9CA3AF] hover:text-[#1F2937]">Cancel</button>
                            </div>

                            <div className="max-w-2xl">
                                <p className="text-sm text-[#6B7280] mb-4">Paste a YouTube link to generate a comprehensive study guide.</p>
                                <div className="flex gap-3">
                                    <div className="relative flex-1">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                                            <Youtube className="w-5 h-5" />
                                        </div>
                                        <Input
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            placeholder="youtube.com/watch?v=..."
                                            className="pl-10 h-11 border-[#E2E8F0] focus-visible:ring-[#1F2937]"
                                        />
                                    </div>
                                    <Button className="h-11 bg-[#1F2937] hover:bg-[#111827] text-white px-6">
                                        Generate
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Articles Grid */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="pl-9 pr-4 py-2 bg-transparent border-none text-sm focus:outline-none text-[#374151] placeholder:text-[#9CA3AF] w-48"
                            />
                        </div>
                        <div className="flex gap-2">
                            {/* Filter/Sort buttons could go here */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <Link key={article.id} href={`/dashboard/article/${article.id}`}>
                                <div className="group bg-white rounded-lg border border-[#E2E8F0] p-5 hover:shadow-md transition-all hover:border-[#CBD5E1] h-full flex flex-col cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide border ${article.status === 'complete'
                                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                            : 'bg-amber-50 text-amber-700 border-amber-100'
                                            }`}>
                                            {article.status === 'complete' ? 'Ready' : 'Processing'}
                                        </div>
                                        <span className="text-xs text-[#9CA3AF] font-medium">{article.timestamp}</span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-[#1F2937] leading-snug mb-3 group-hover:text-[#2F7F6F] transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <div className="mt-auto pt-4 flex items-center text-sm text-[#6B7280] group-hover:text-[#374151]">
                                        <span>View notes</span>
                                        <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
