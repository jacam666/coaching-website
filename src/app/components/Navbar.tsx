"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }


    return (
        <div className="w-full bg-opacity-90 backdrop-blur-md  mt-4">
            <nav>
                <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <img src="/jc-logo-yellow.svg" alt="JC Logo" className="h-10 w-10 mr-2" />
                                <span className="text-gray-900 font-bold text-xl">Coaching</span>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="text-yellow-400 hover:text-yellow-300 focus:outline-none focus:text-blue-600 transition-colors duration-200"
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
                                <Link href="/" className="text-gray-900 hover:text-white">Home</Link>
                                <Link href="/about" className="text-gray-900 hover:text-white">About</Link>
                                <Link href="/services" className="text-gray-900 hover:text-white">Services</Link>
                                <Link href="/contact" className="text-gray-900 hover:text-white">Contact</Link>
                                <Link href="/meals" className="text-gray-900 hover:text-white">Meal Ideas</Link>
                                <Link href="/why-exercise" className="text-gray-900 hover:text-white">Why Exercise</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

            {/* Mobile menu, toggle based on menu state. */}
            {isMobileMenuOpen && (
                <div className="md:hidden ">
                    <div className=" pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="/about" className="text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="/services" className="text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                        <Link href="/contact" className="text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                        <Link href="/meals" className="text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Meal Ideas</Link>
                        <Link href="/why-exercise" className="text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Why Exercise</Link>
                    </div>
                </div>
            )}
        </div>
    );
}