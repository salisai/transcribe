"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Lock, User, Chrome, Github, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="min-h-screen relative flex items-center justify-center p-6 bg-[#FDFCFB]">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0.5, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-white rounded-3xl border border-[#E5E5E5] p-10 shadow-2xl space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <Logo />
                        <div className="text-center">
                            <h1 className="text-3xl font-heading font-bold text-[#0A0A0A]">Create your account</h1>
                            <p className="text-[#525252] mt-2">Start converting lectures today</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <Button variant="outline" className="h-12 border-[#E5E5E5] bg-white text-[#0A0A0A] font-heading font-medium hover:bg-gray-50 flex items-center justify-center gap-3">
                            <Chrome className="w-5 h-5" />
                            Continue with Google
                        </Button>
                        <Button variant="outline" className="h-12 border-[#E5E5E5] bg-white text-[#0A0A0A] font-heading font-medium hover:bg-gray-50 flex items-center justify-center gap-3">
                            <Github className="w-5 h-5" />
                            Continue with GitHub
                        </Button>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#E5E5E5]"></div>
                        </div>
                        <span className="relative bg-white px-4 text-xs font-heading font-medium text-[#A3A3A3] uppercase tracking-widest">or</span>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-heading font-medium text-[#525252] ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3]" />
                                <Input
                                    type="text"
                                    placeholder="John Doe"
                                    className="h-12 pl-11 rounded-lg border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-heading font-medium text-[#525252] ml-1">Email address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3]" />
                                <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="h-12 pl-11 rounded-lg border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-heading font-medium text-[#525252] ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3]" />
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="h-12 pl-11 pr-11 rounded-lg border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3A3A3] hover:text-[#525252]"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <Button className="w-full btn-3d h-12 text-base font-heading font-medium shadow-lg">
                            Create account
                        </Button>
                    </form>

                    <p className="text-center text-sm text-[#737373]">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#0A0A0A] font-medium hover:underline">Log in</Link>
                    </p>
                </div>
            </motion.div>
        </main>
    );
}
