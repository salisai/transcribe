"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="py-24 bg-[#F5F5F5] border-y border-[#E5E5E5]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-[#0A0A0A]"
                    >
                        Ready to transform your learning?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#525252]"
                    >
                        Join hundreds of students and researchers who are turning video lectures into structured knowledge.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="pt-4"
                    >
                        <Button size="lg" className="btn-3d px-12 py-8 text-lg rounded-xl shadow-2xl">
                            Start Free Today
                        </Button>
                        <p className="mt-4 text-sm text-[#A3A3A3]">No credit card required. Cancel anytime.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
