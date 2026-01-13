"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
    const tiers = [
        {
            name: "Starter",
            price: "0",
            description: "For casual learners",
            features: [
                "1 video per month",
                "Up to 30 minutes",
                "Basic summary",
            ],
            buttonText: "Start Free",
            buttonVariant: "outline" as const,
            highlighted: false,
        },
        {
            name: "Basic",
            price: "9",
            description: "For students & researchers",
            features: [
                "5 videos per month",
                "Up to 1 hour each",
                "Markdown export",
                "Priority processing",
            ],
            buttonText: "Get Started",
            buttonVariant: "default" as const,
            highlighted: true,
            badge: "Popular",
        },
        {
            name: "Pro",
            price: "29",
            description: "Power users",
            features: [
                "Unlimited videos",
                "Up to 4 hours each",
                "Deep analysis",
                "API access",
                "Priority support",
            ],
            buttonText: "Upgrade to Pro",
            buttonVariant: "default" as const,
            highlighted: false,
            dark: true,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-[#FAFAF9]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
                        Simple Pricing
                    </h2>
                    <p className="text-[#6B7280]">
                        Invest in your learning. Cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col p-8 rounded-xl border transition-all ${tier.highlighted
                                    ? "bg-white border-[#1F2937] shadow-lg relative"
                                    : "bg-white border-[#E2E8F0]"
                                }`}
                        >
                            {tier.badge && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1F2937] text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                    {tier.badge}
                                </span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-[#1F2937]">${tier.price}</span>
                                    <span className="text-sm text-[#6B7280]">/mo</span>
                                </div>
                                <p className="mt-3 text-sm text-[#6B7280]">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="flex-1 space-y-3 mb-8">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-[#2F7F6F] mt-0.5" />
                                        <span className="text-sm text-[#4B5563]">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={`w-full h-10 rounded-lg font-medium transition-all ${tier.highlighted
                                        ? "bg-[#1F2937] hover:bg-[#111827] text-white shadow-sm"
                                        : "bg-white border border-[#E2E8F0] text-[#1F2937] hover:bg-[#F9FAFB]"
                                    }`}
                            >
                                {tier.buttonText}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
