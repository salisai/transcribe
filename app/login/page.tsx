"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <div className="w-full max-w-6xl mx-auto px-6 h-20 flex items-center">
                <Logo />
            </div>

            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-[400px]">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-semibold text-[#2F7F6F] tracking-tight mb-2">Welcome back</h1>
                        {/* Kept content as requested */}
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-[15px] font-medium text-[#374151]">Email</label>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-12 bg-[#F9FAFB] border-0 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[#E5E7EB] placeholder:text-gray-400 rounded-xl"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[15px] font-medium text-[#374151]">Password</label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="h-12 bg-[#F9FAFB] border-0 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[#E5E7EB] placeholder:text-gray-400 rounded-xl pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <div className="flex justify-end pt-1">
                                <Link href="#" className="text-sm font-medium text-[#0F3D3E] hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <Button className="w-full h-12 btn-premium rounded-xl text-[15px] font-semibold tracking-wide transition-all shadow-none">
                            Sign in
                        </Button>
                    </form>

                    <div className="relative flex items-center justify-center py-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#F3F4F6]"></div>
                        </div>
                        <span className="relative bg-white px-3 text-sm text-[#9CA3AF]">Or</span>
                    </div>

                    <div className="space-y-4">
                        <Button variant="outline" className="w-full h-12 border border-[#E5E7EB] bg-white text-[#374151] font-medium hover:bg-white hover:text-[#374151] rounded-xl flex items-center justify-center gap-3 transition-all shadow-none">
                            <Chrome className="w-5 h-5" />
                            <span className="text-[15px]">Google</span>
                        </Button>
                    </div>

                    <p className="text-center text-[15px] text-[#6B7280] mt-8">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-[#111827] font-semibold hover:underline decoration-2 underline-offset-2">Create one</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
