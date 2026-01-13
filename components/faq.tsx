"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "How does the transcription process work?",
        answer: "Simply paste a YouTube URL into our dashboard. Our AI automatically processes the video, extracts key insights, removes filler content, and generates a structured article with summaries and distinct headings."
    },
    {
        question: "What is the difference between the Basic and Pro plans?",
        answer: "The Basic plan is perfect for students and researchers, offering 5 videos per month up to 1 hour each. The Pro plan unlocks unlimited videos, longer durations (up to 4 hours), deep analysis features, and priority support for power users."
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period."
    },
    {
        question: "What formats can I export my summaries to?",
        answer: "All plans support exporting to Markdown, which is compatible with popular note-taking apps like Obsidian, Notion, and Logseq. We focus on clean, portable formats that fit your workflow."
    },
    {
        question: "Is there a limit on video length?",
        answer: "Yes, the Free tier supports videos up to 30 minutes. The Basic plan increases this to 1 hour, while the Pro plan handles extensive content up to 4 hours in length."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-[#FAFAF9]">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#6B7280]">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-[#1F2937] text-lg">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="flex-shrink-0 ml-4"
                                >
                                    <Plus className="w-5 h-5 text-[#6B7280]" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-[#6B7280] leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
