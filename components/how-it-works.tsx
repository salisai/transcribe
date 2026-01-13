"use client";

import { motion } from "framer-motion";
import { Link2, Sparkles, FileText, ArrowRight } from "lucide-react";

export default function HowItWorks() {
    const features = [
        {
            icon: <Link2 className="w-5 h-5" />,
            title: "Simplicity First",
            description: "Just paste a YouTube URL. No complex upload processes or file conversions needed.",
            color: "bg-blue-50 text-blue-700 border-blue-100"
        },
        {
            icon: <Sparkles className="w-5 h-5" />,
            title: "Intelligent Extraction",
            description: "Our AI identifies the core arguments, ignoring fluff and repetitions to save your time.",
            color: "bg-amber-50 text-amber-700 border-amber-100"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            title: "Premium Formatting",
            description: "Get a beautifully structured article with distinct headings, key takeaways, and summaries.",
            color: "bg-emerald-50 text-emerald-700 border-emerald-100"
        },
    ];

    return (
        <section id="features" className="py-24 bg-[#FAFAF9] border-y border-[#E2E8F0]/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold text-[#1F2937] tracking-tight mb-4">
                            Designed for deep work, not just skimming.
                        </h2>
                        <p className="text-[#6B7280] text-lg leading-relaxed">
                            We don't just transcribe. We transform chaotic video content into structured, high-signal knowledge that you can actually retain.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all group"
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center border mb-6 ${feature.color}`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-bold text-[#1F2937] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-[#6B7280] leading-relaxed text-sm mb-6">
                                {feature.description}
                            </p>

                            <div className="flex items-center text-[#1F2937] text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
