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
            className="bg-white rounded-2xl border border-[#E5E5E5] p-6 transition-all hover:shadow-md hover:border-[#D4D4D4] group"
        >
            <div className="flex gap-6">
                <div className="w-32 h-20 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden relative">
                    {thumbnail ? (
                        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-50 uppercase font-heading font-bold text-gray-300">
                            Thumb
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-lg text-[#0A0A0A] line-clamp-2 mb-2 group-hover:text-[#525252] transition-colors leading-snug">
                        {title}
                    </h3>
                    <div className="flex items-center gap-4">
                        {status === "complete" ? (
                            <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-50 border-none px-3 py-1 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Complete
                            </Badge>
                        ) : (
                            <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-50 border-none px-3 py-1 flex items-center gap-1.5">
                                <RotateCw className="w-3.5 h-3.5 animate-spin" />
                                Processing
                            </Badge>
                        )}
                        <span className="text-sm text-[#A3A3A3] flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {timestamp}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex gap-2">
                    <Link href={`/article/${id}`}>
                        <Button variant="outline" size="sm" className="h-9 px-4 rounded-lg border-[#E5E5E5] font-heading font-medium text-sm disabled:opacity-50" disabled={status !== "complete"}>
                            View Article
                        </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-lg text-[#A3A3A3] hover:text-red-500 hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>
                <Link href={`https://youtube.com/watch?v=${id}`} target="_blank" className="text-[#A3A3A3] hover:text-[#0A0A0A] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
