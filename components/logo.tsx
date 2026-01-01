import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                <span className="text-white font-heading font-bold text-lg relative z-10">A</span>
            </div>
            <span className="font-heading font-bold text-xl text-[#0A0A0A] tracking-tight">
                Articulate
            </span>
        </Link>
    );
}
