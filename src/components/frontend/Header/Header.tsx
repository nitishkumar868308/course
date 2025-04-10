"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-xl font-bold text-blue-600">
                    <Link href="/">Course</Link>
                </div>
                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/aboutUs">About</Link>
                    <Link href="/courses">Courses</Link>
                    <Link href="/contactUs">Contact</Link>
                </nav>
                <div className="hidden md:flex">
                    <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Login
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white px-4 pb-4 shadow-md">
                    <nav className="flex flex-col gap-3 mt-2 text-gray-700">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/login" className="text-blue-600 font-semibold">
                            Login
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
