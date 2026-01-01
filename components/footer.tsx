import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "Examples", href: "#examples" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Docs", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Support", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "#" },
                { name: "Privacy", href: "#" },
                { name: "Terms", href: "#" },
            ],
        },
    ];

    return (
        <footer className="bg-white border-t border-gray-200 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Logo />
                        <p className="mt-4 text-gray-500 max-w-xs leading-relaxed">
                            Transforming lectures into structured knowledge. Articulate uses AI to preserve every insight from your favorite YouTube content.
                        </p>
                    </div>
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h4 className="font-heading font-semibold text-sm mb-6 uppercase tracking-wider text-gray-400">
                                {column.title}
                            </h4>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 hover:text-black transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Articulate. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                            Twitter
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
