"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Youtube, TrendingUp, History, CreditCard, ChevronDown, X, Play } from "lucide-react";
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
        { label: "Videos This Month", value: "2 / 5", icon: <History className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Total Converted", value: "12", icon: <TrendingUp className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-50" },
        { label: "Current Plan", value: "Starter", icon: <CreditCard className="w-5 h-5" />, color: "text-purple-600", bg: "bg-purple-50", action: "Upgrade" },
    ];

    const articles = [
        { id: "dQw4w9WgXcQ", title: "Effective Learning Systems for Modern Researchers", status: "complete", timestamp: "Dec 24, 2024" },
        { id: "abcd123", title: "The Future of Artificial Intelligence in Academic Writing", status: "processing", timestamp: "Dec 28, 2024" },
        { id: "efgh456", title: "Quantum Computing: From Basics to Advanced Principles", status: "complete", timestamp: "Dec 15, 2024" },
        { id: "ijkl789", title: "Neuroscience of Memory and Information Retention", status: "complete", timestamp: "Dec 10, 2024" },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            {/* Top Navigation */}
            <nav className="h-20 border-b border-[#E5E5E5] bg-white sticky top-0 z-40 px-8">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-6">
                        <Button variant="ghost" className="hidden md:flex text-sm font-heading font-medium text-[#525252]">Help & Support</Button>
                        <Avatar className="h-9 w-9 border border-[#E5E5E5]">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-8 py-12">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-heading font-bold text-[#0A0A0A]">Dashboard</h1>
                        <p className="text-[#525252] mt-2">Manage your converted lectures and insights</p>
                    </div>
                    <Button
                        onClick={() => setIsInputExpanded(!isInputExpanded)}
                        className={`btn-3d h-12 px-6 rounded-xl font-heading font-medium flex items-center gap-2 transition-all shadow-xl ${isInputExpanded ? "scale-95 opacity-50" : ""}`}
                    >
                        {isInputExpanded ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        Convert New Video
                    </Button>
                </header>

                {/* Usage Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -2 }}
                            className="bg-white border border-[#E5E5E5] rounded-2xl p-6 flex items-center gap-5 shadow-sm"
                        >
                            <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                                {stat.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[#A3A3A3] text-sm font-medium">{stat.label}</p>
                                <div className="flex items-baseline justify-between mt-1">
                                    <span className="text-2xl font-heading font-bold text-[#0A0A0A]">{stat.value}</span>
                                    {stat.action && (
                                        <Link href="/settings" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider hover:underline">
                                            {stat.action}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {isInputExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: "auto", marginBottom: 48 }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-white rounded-2xl border-2 border-[#0A0A0A] p-10 shadow-2xl relative">
                                <button
                                    onClick={() => setIsInputExpanded(false)}
                                    className="absolute top-6 right-6 text-[#A3A3A3] hover:text-[#0A0A0A] transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="max-w-2xl mx-auto space-y-6">
                                    <div className="text-center space-y-2">
                                        <h2 className="text-2xl font-heading font-bold">New Conversion</h2>
                                        <p className="text-[#525252]">Paste the YouTube URL of the lecture you'd like to convert.</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="relative">
                                            <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
                                            <Input
                                                value={url}
                                                onChange={(e) => setUrl(e.target.value)}
                                                placeholder="https://www.youtube.com/watch?v=..."
                                                className="h-16 pl-12 rounded-xl border-[#E5E5E5] text-lg font-inter focus:border-[#0A0A0A] focus:ring-0 transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                        <Button size="lg" className="w-full btn-3d h-16 rounded-xl text-lg font-heading font-bold shadow-2xl">
                                            Convert to Article
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-heading font-bold text-[#0A0A0A]">Your Articles</h2>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E5E5] rounded-lg">
                            <Search className="w-4 h-4 text-[#A3A3A3]" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="bg-transparent border-none outline-none text-sm font-inter w-32 md:w-48 placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {articles.map((article, index) => (
                            <VideoCard
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                status={article.status as "complete" | "processing"}
                                timestamp={article.timestamp}
                            />
                        ))}
                    </div>

                    {articles.length === 0 && (
                        <div className="py-24 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-gray-200">
                            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                                <History className="w-10 h-10 text-gray-300" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-[#0A0A0A]">No articles yet</h3>
                            <p className="text-[#A3A3A3] mt-2 mb-8">Convert your first YouTube video to get started</p>
                            <Button variant="outline" onClick={() => setIsInputExpanded(true)}>Get Started</Button>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
