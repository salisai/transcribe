"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
    const tiers = [
        {
            name: "Starter",
            price: "0",
            description: "Perfect for trying out",
            features: [
                "1 video per month",
                "Up to 30 minutes",
                "Basic article format",
                "Text export",
            ],
            buttonText: "Start Free",
            buttonVariant: "outline" as const,
            highlighted: false,
        },
        {
            name: "Basic",
            price: "9",
            description: "Best for casual learners",
            features: [
                "5 videos per month",
                "Up to 1 hour each",
                "Enhanced formatting",
                "Priority processing",
                "Export to Markdown/PDF",
            ],
            buttonText: "Get Started",
            buttonVariant: "default" as const,
            highlighted: true,
            badge: "Popular",
        },
        {
            name: "Pro",
            price: "29",
            description: "For serious researchers",
            features: [
                "20 videos per month",
                "Up to 2 hours each",
                "Advanced formatting",
                "API access",
                "Custom templates",
                "Priority support",
            ],
            buttonText: "Upgrade to Pro",
            buttonVariant: "default" as const,
            highlighted: false,
            dark: true,
        },
    ];

    return (
        <section id="pricing" className="py-32 bg-[#FDFCFB]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-[#0A0A0A] mb-4"
                    >
                        Simple, Transparent Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#525252]"
                    >
                        Start free. Upgrade when you need more.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`flex-1 flex flex-col p-10 rounded-2xl border transition-all duration-300 relative ${tier.dark
                                    ? "bg-[#0A0A0A] text-white border-transparent shadow-2xl"
                                    : tier.highlighted
                                        ? "bg-white border-[#0A0A0A] shadow-xl"
                                        : "bg-white border-[#E5E5E5] hover:border-[#A3A3A3]"
                                }`}
                        >
                            {tier.badge && (
                                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#F5F5F5] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest border border-[#E5E5E5]">
                                    {tier.badge}
                                </span>
                            )}
                            <div className="mb-8">
                                <h3 className={`text-xl font-heading font-semibold mb-2 ${tier.dark ? "text-gray-400" : "text-gray-500"}`}>
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-heading font-bold">${tier.price}</span>
                                    <span className={`text-sm ${tier.dark ? "text-gray-400" : "text-gray-500"}`}>/month</span>
                                </div>
                                <p className={`mt-4 text-sm ${tier.dark ? "text-gray-400" : "text-gray-500"}`}>
                                    {tier.description}
                                </p>
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${tier.dark ? "bg-white/10 text-white" : "bg-[#F5F5F5] text-[#0A0A0A]"}`}>
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className={`text-sm ${tier.dark ? "text-gray-300" : "text-[#525252]"}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                size="lg"
                                variant={tier.buttonVariant}
                                className={`w-full h-12 rounded-lg font-heading font-semibold transition-all ${tier.dark
                                        ? "bg-white text-[#0A0A0A] hover:bg-gray-100"
                                        : tier.highlighted
                                            ? "btn-3d"
                                            : "border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-transparent"
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
