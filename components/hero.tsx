"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, FileText, Video, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const containerVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };


    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#FDFCFB]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />

            <motion.div
                className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-6 md:space-y-8">
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#0A0A0A] leading-[1.2] tracking-tight"
                    >
                        Turn Your Lectures <br />
                        <span className="bg-gradient-to-r from-[#0A0A0A] to-[#525252] bg-clip-text text-transparent">Into Readable Articles</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-[#525252] max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Save hours of note-taking. Let AI transform any YouTube video into beautifully formatted articles ready to share.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 pt-4 md:pt-6">
                        <Button size="lg" className="btn-3d px-8 md:px-10 py-6 md:py-6 text-base md:text-base font-semibold rounded-3xl shadow-lg w-full sm:w-auto">
                            Start Free
                        </Button>
                        <Button size="lg" variant="ghost" className="px-8 md:px-10 py-6 md:py-6 text-base md:text-base font-semibold text-[#525252] hover:text-[#0A0A0A] border border-[#E5E5E5] rounded-3xl w-full sm:w-auto">
                            <Play className="w-5 h-5 mr-2 fill-current" />
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Bento Grid Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto mt-12 md:mt-20">
                    {/* Card 1: Article Output Mockup */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 bg-white rounded-2xl border border-[#E5E5E5] p-4 md:p-8 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-[#D4D4D4]"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <span className="ml-2 text-xs font-mono text-gray-400 uppercase tracking-widest">Article Preview</span>
                        </div>
                        <div className="space-y-4 font-inter text-gray-800">
                            <div className="h-6 w-3/4 bg-gray-100 rounded animate-pulse" />
                            <div className="h-4 w-full bg-gray-50 rounded" />
                            <div className="h-4 w-full bg-gray-50 rounded" />
                            <div className="h-4 w-5/6 bg-gray-50 rounded" />
                            <div className="mt-8 p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-400">
                                <span className="text-green-400"># Introduction to Quantum Mechanics</span><br />
                                The double-slit experiment demonstrates the...
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Video to Text Transformation */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8 flex flex-col items-center justify-center shadow-sm transition-all hover:shadow-xl hover:border-[#D4D4D4]"
                    >
                        <div className="relative mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center">
                                <Video className="w-8 h-8 text-[#0A0A0A]" />
                            </div>
                            <motion.div
                                animate={{ x: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#E5E5E5] shadow-sm flex items-center justify-center"
                            >
                                <ArrowRight className="w-4 h-4 text-[#A3A3A3]" />
                            </motion.div>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] flex items-center justify-center shadow-lg">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <p className="mt-6 text-sm font-heading font-medium text-[#0A0A0A]">Instant Transformation</p>
                    </motion.div>

                    {/* Card 3: Metrics */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8 shadow-sm transition-all hover:shadow-xl hover:border-[#D4D4D4]"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-yellow-50 text-yellow-600">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h4 className="font-heading font-semibold">Efficiency</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-3xl font-heading font-bold">2hr</span>
                                <span className="text-gray-400 text-sm mb-1">Video</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="h-full bg-[#0A0A0A]"
                                />
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-3xl font-heading font-bold text-gray-400">15m</span>
                                <span className="text-gray-400 text-sm mb-1">Read</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Feature list */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 bg-[#0A0A0A] rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden relative group transition-all"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                            <FileText className="w-48 h-48 text-white scale-150 transform translate-x-12 translate-y-12" />
                        </div>
                        <h3 className="text-white font-heading font-bold text-2xl mb-4">AI-Preserved Highlights</h3>
                        <p className="text-gray-400 max-w-md leading-relaxed mb-6 font-inter">
                            Our advanced transcription engine identifies key concepts, technical terms, and speaker shifts to create a publication-ready article.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur-sm border border-white/5">Auto-Summarization</div>
                            <div className="px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur-sm border border-white/5">Key Terms Extraction</div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
