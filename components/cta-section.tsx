"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="py-24 bg-[#FAFAF9] border-y border-[#E2E8F0]/50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1F2937] tracking-tight"
                    >
                        Ready to learn faster?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#6B7280] leading-relaxed"
                    >
                        Join thousands of researchers turning video content into structured notes.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="pt-8"
                    >
                        <Button size="lg" className="btn-premium h-12 px-8 text-base">
                            Start Free Today
                        </Button>
                        <p className="mt-4 text-sm text-[#9CA3AF]">No credit card required. Cancel anytime.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
