"use client";

import { motion } from "framer-motion";
import { Link2, Cpu, Download } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: <Link2 className="w-8 h-8" />,
            title: "Paste YouTube URL",
            description: "Simply copy and paste the link of any YouTube lecture or video you want to convert.",
            number: "01",
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "AI Processes Content",
            description: "Our advanced AI transcribes the audio, identifies key themes, and structures it into a readable article.",
            number: "02",
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: "Download Your Article",
            description: "Export your AI-generated article in PDF, Markdown, or copy it directly to your workspace.",
            number: "03",
        },
    ];

    return (
        <section id="features" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-[#0A0A0A]"
                    >
                        How It Works
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-[#0A0A0A] mx-auto mt-6"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group p-10 rounded-2xl border border-[#E5E5E5] transition-all hover:border-[#0A0A0A] hover:shadow-xl hover:-translate-y-2 bg-[#FDFCFB]"
                        >
                            <span className="absolute top-6 right-10 text-6xl font-heading font-black text-gray-50 group-hover:text-gray-100 transition-colors pointer-events-none">
                                {step.number}
                            </span>
                            <div className="mb-8 w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-[#0A0A0A] mb-4 relative z-10">
                                {step.title}
                            </h3>
                            <p className="text-[#525252] leading-relaxed relative z-10">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
