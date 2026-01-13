import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-[#E2E8F0] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-xs">
                        <Logo />
                        <p className="mt-4 text-[#6B7280] text-sm leading-relaxed">
                            Articulate turns video chaos into structured knowledge. Built for serious learners.
                        </p>
                        <p className="mt-8 text-xs text-[#9CA3AF]">
                            © {new Date().getFullYear()} Articulate Inc.
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div>
                            <h4 className="font-semibold text-sm text-[#1F2937] mb-4">Product</h4>
                            <ul className="space-y-3">
                                <li><Link href="#features" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">Features</Link></li>
                                <li><Link href="#pricing" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">Pricing</Link></li>
                                <li><Link href="/login" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">Sign in</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm text-[#1F2937] mb-4">Legal</h4>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">Privacy</Link></li>
                                <li><Link href="#" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm text-[#1F2937] mb-4">Social</h4>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">Twitter</Link></li>
                                <li><Link href="#" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">GitHub</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
