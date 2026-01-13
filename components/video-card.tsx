"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trash2, Clock, CheckCircle2, RotateCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VideoCardProps {
    id: string;
    title: string;
    thumbnail?: string;
    status: "complete" | "processing";
    timestamp: string;
}

export default function VideoCard({ id, title, thumbnail, status, timestamp }: VideoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl border border-[#E2E8F0] p-6 transition-all hover:shadow-lg hover:border-[#CBD5E1] group"
        >
            <div className="flex gap-5">
                <div className="w-24 h-16 rounded-md bg-[#F3F4F6] flex-shrink-0 overflow-hidden relative border border-[#E5E7EB]">
                    {thumbnail ? (
                        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#F9FAFB] text-[10px] font-semibold text-[#9CA3AF] uppercase">
                            Video
                        </div>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-[#1F2937] line-clamp-2 mb-2 group-hover:text-[#2F7F6F] transition-colors leading-snug">
                        {title}
                    </h3>
                    <div className="flex items-center gap-3">
                        {status === "complete" ? (
                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-100 px-2 py-0.5 rounded text-[10px] font-medium flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                Ready
                            </Badge>
                        ) : (
                            <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-50 border-amber-100 px-2 py-0.5 rounded text-[10px] font-medium flex items-center gap-1">
                                <RotateCw className="w-3 h-3 animate-spin" />
                                Processing
                            </Badge>
                        )}
                        <span className="text-xs text-[#9CA3AF] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {timestamp}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                <div className="flex gap-2">
                    <Link href={`/article/${id}`}>
                        <Button variant="outline" size="sm" className="h-8 px-3 rounded-md border-[#E2E8F0] text-[#4B5563] hover:text-[#1F2937] hover:bg-[#F9FAFB] text-xs font-medium disabled:opacity-50" disabled={status !== "complete"}>
                            View Article
                        </Button>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-md text-[#9CA3AF] hover:text-[#EF4444] hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                    </Button>
                    <Link href={`https://youtube.com/watch?v=${id}`} target="_blank" className="text-[#9CA3AF] hover:text-[#1F2937] transition-colors p-2">
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
