"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, CreditCard, PieChart, Shield, Bell, ChevronRight, Download, Check, AlertTriangle } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("account");

    const billingHistory = [
        { date: "Dec 28, 2024", amount: "$9.00", status: "Paid", invoice: "#INV-001" },
        { date: "Nov 28, 2024", amount: "$9.00", status: "Paid", invoice: "#INV-002" },
        { date: "Oct 28, 2024", amount: "$9.00", status: "Paid", invoice: "#INV-003" },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            {/* Top Navigation */}
            <nav className="h-20 border-b border-[#E5E5E5] bg-white sticky top-0 z-40 px-8">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard">
                            <Button variant="ghost" className="text-sm font-heading font-medium text-[#525252]">Back to Dashboard</Button>
                        </Link>

                        <Avatar className="h-9 w-9 border border-[#E5E5E5]">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-8 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl font-heading font-bold text-[#0A0A0A]">Settings</h1>
                    <p className="text-[#525252] mt-2">Manage your account preferences and subscription</p>
                </header>

                <Tabs defaultValue="account" className="space-y-8" onValueChange={setActiveTab}>
                    <TabsList className="bg-transparent border-b border-[#E5E5E5] w-full justify-start rounded-none h-auto p-0 gap-8">
                        <TabsTrigger
                            value="account"
                            className="px-0 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[#0A0A0A] data-[state=active]:bg-transparent text-[#525252] data-[state=active]:text-[#0A0A0A] font-heading font-bold transition-all"
                        >
                            <User className="w-4 h-4 mr-2" />
                            Account
                        </TabsTrigger>
                        <TabsTrigger
                            value="billing"
                            className="px-0 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[#0A0A0A] data-[state=active]:bg-transparent text-[#525252] data-[state=active]:text-[#0A0A0A] font-heading font-bold transition-all"
                        >
                            <CreditCard className="w-4 h-4 mr-2" />
                            Billing
                        </TabsTrigger>
                        <TabsTrigger
                            value="usage"
                            className="px-0 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[#0A0A0A] data-[state=active]:bg-transparent text-[#525252] data-[state=active]:text-[#0A0A0A] font-heading font-bold transition-all"
                        >
                            <PieChart className="w-4 h-4 mr-2" />
                            Usage
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="account" className="space-y-6 outline-none focus:ring-0">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl border border-[#E5E5E5] p-10 shadow-sm"
                        >
                            <div className="flex items-center gap-8 mb-12">
                                <Avatar className="h-24 w-24 border-2 border-[#E5E5E5]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <Button variant="outline" className="h-10 px-4 rounded-lg font-heading font-medium">Change Photo</Button>
                                    <p className="text-xs text-[#A3A3A3]">JPG, GIF or PNG. 1MB Max.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-heading font-bold text-[#0A0A0A]">Full Name</label>
                                    <Input defaultValue="John Doe" className="h-12 rounded-lg border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-heading font-bold text-[#0A0A0A]">Email Address</label>
                                    <Input defaultValue="john@example.com" disabled className="h-12 rounded-lg border-[#E5E5E5] bg-gray-50 text-[#A3A3A3]" />
                                </div>
                            </div>

                            <div className="mt-12 flex justify-end">
                                <Button className="btn-3d h-12 px-8 rounded-xl font-heading font-bold">Save Changes</Button>
                            </div>
                        </motion.div>

                        <div className="bg-white rounded-2xl border border-red-100 p-10 shadow-sm">
                            <h3 className="text-xl font-heading font-bold text-red-600 mb-2">Danger Zone</h3>
                            <p className="text-[#525252] mb-6">Permanently delete your account and all associated data. This action cannot be undone.</p>
                            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 font-heading font-bold border border-red-100 italic">Delete Account</Button>
                        </div>
                    </TabsContent>

                    <TabsContent value="billing" className="space-y-8 outline-none focus:ring-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                <div className="bg-[#0A0A0A] text-white rounded-2xl p-10 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <CreditCard className="w-32 h-32 scale-150 rotate-12" />
                                    </div>
                                    <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
                                        <div className="space-y-4">
                                            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest">Current Plan</span>
                                            <h3 className="text-4xl font-heading font-bold">Basic Monthly</h3>
                                            <p className="text-gray-400">Your plan renews on <span className="text-white font-medium">Jan 28, 2025</span></p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-400">Monthly Price</p>
                                            <p className="text-3xl font-heading font-bold">$9.00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl border border-[#E5E5E5] p-10 shadow-sm">
                                    <h3 className="text-xl font-heading font-bold text-[#0A0A0A] mb-8">Billing History</h3>
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="hover:bg-transparent border-[#E5E5E5]">
                                                <TableHead className="text-xs font-bold text-[#A3A3A3] uppercase tracking-widest">Date</TableHead>
                                                <TableHead className="text-xs font-bold text-[#A3A3A3] uppercase tracking-widest">Amount</TableHead>
                                                <TableHead className="text-xs font-bold text-[#A3A3A3] uppercase tracking-widest">Status</TableHead>
                                                <TableHead className="text-xs font-bold text-[#A3A3A3] uppercase tracking-widest text-right">Invoice</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {billingHistory.map((invoice) => (
                                                <TableRow key={invoice.invoice} className="hover:bg-gray-50 transition-colors border-[#F5F5F5]">
                                                    <TableCell className="font-medium text-[#0A0A0A]">{invoice.date}</TableCell>
                                                    <TableCell className="text-[#525252]">{invoice.amount}</TableCell>
                                                    <TableCell>
                                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                                            <Check className="w-3 h-3" />
                                                            {invoice.status}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="ghost" size="sm" className="h-8 gap-2 text-[#525252] hover:text-[#0A0A0A]">
                                                            <Download className="w-3.5 h-3.5" />
                                                            PDF
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl border border-[#E5E5E5] p-8 shadow-sm">
                                    <h4 className="font-heading font-bold text-sm text-[#0A0A0A] mb-6">Payment Method</h4>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FDFCFB] border border-[#E5E5E5] mb-6">
                                        <div className="w-12 h-8 rounded bg-gray-900 flex items-center justify-center">
                                            <div className="flex -space-x-1.5">
                                                <div className="w-4 h-4 rounded-full bg-red-500 opacity-90" />
                                                <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-90" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-heading font-bold">Mastercard •••• 4242</p>
                                            <p className="text-[10px] text-[#A3A3A3] uppercase font-bold tracking-wider">Expires 12/26</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full h-11 border-[#E5E5E5] font-heading font-bold text-sm">Update Method</Button>
                                </div>

                                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-amber-600 mb-4 shadow-sm">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-heading font-bold text-amber-900 mb-2">Need more power?</h4>
                                    <p className="text-xs text-amber-700/80 mb-6 leading-relaxed">Upgrade to the Pro plan for API access and custom templates.</p>
                                    <Button className="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white font-heading font-bold text-sm border-none">Upgrade Now</Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="usage" className="space-y-8 outline-none focus:ring-0">
                        <div className="bg-white rounded-2xl border border-[#E5E5E5] p-10 shadow-sm">
                            <h3 className="text-xl font-heading font-bold text-[#0A0A0A] mb-8">Usage This Month</h3>
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <h4 className="font-heading font-bold text-[#0A0A0A]">Video Transformations</h4>
                                            <p className="text-sm text-[#A3A3A3]">5 out of 5 videos used</p>
                                        </div>
                                        <span className="text-sm font-bold text-[#0A0A0A]">100%</span>
                                    </div>
                                    <Progress value={100} className="h-3 bg-red-100 [&>div]:bg-red-500" />
                                    <p className="text-xs font-medium text-red-600 flex items-center gap-1.5">
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        Quota reached. Upgrading recommended.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <h4 className="font-heading font-bold text-[#0A0A0A]">Processing Time</h4>
                                            <p className="text-sm text-[#A3A3A3]">2h 15m out of 5h total</p>
                                        </div>
                                        <span className="text-sm font-bold text-[#0A0A0A]">45%</span>
                                    </div>
                                    <Progress value={45} className="h-3 bg-gray-100 [&>div]:bg-[#0A0A0A]" />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <h4 className="font-heading font-bold text-[#0A0A0A]">Cloud Storage</h4>
                                            <p className="text-sm text-[#A3A3A3]">12.4 MB out of 100 MB</p>
                                        </div>
                                        <span className="text-sm font-bold text-[#0A0A0A]">12%</span>
                                    </div>
                                    <Progress value={12} className="h-3 bg-gray-100 [&>div]:bg-[#0A0A0A]" />
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
