"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/meals", label: "Meal Ideas" },
    { href: "/exercises", label: "Exercises" },
    { href: "/why-exercise", label: "Why Exercise" },
];

export default function Navbar({ className = "", buttonColor = "text-emerald-100 hover:text-white focus:text-white" }) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <div className="w-full mt-4 mb-2 relative z-20">
            <nav className={`${className}`}>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="glass-nav px-4 sm:px-6 bg-white/8 border-emerald-100/25 backdrop-blur-xl shadow-[0_10px_35px_-22px_rgba(0,0,0,0.9)]">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <Image src="/jc-logo-green.svg" alt="JC Logo" width={40} height={40} className="h-10 w-10 mr-2" />
                                <span className="text-emerald-100 font-bold text-xl tracking-tight">Coaching</span>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                    className={`${buttonColor} focus:outline-none transition-colors duration-200`}

                                aria-label="Toggle mobile menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="text-emerald-100 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full transition">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </nav>

            {/* Mobile menu, toggle based on menu state. */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 px-2">
                        <div className="rounded-2xl border border-emerald-100/20 bg-emerald-950/70 p-2 space-y-1 backdrop-blur-xl">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-emerald-100 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}