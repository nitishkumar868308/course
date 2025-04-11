"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LoginModal from "@/components/common/LoginModal";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-xl font-bold text-blue-600">
                    <Link href="/">Course</Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/aboutUs">About</Link>
                    <Link href="/courses">Courses</Link>
                    <Link href="/contactUs">Contact</Link>
                </nav>

                {/* Desktop Login Button */}
                <div className="hidden md:flex">
                    <button
                        onClick={() => setLoginModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white px-4 pb-4 shadow-md">
                    <nav className="flex flex-col gap-3 mt-2 text-gray-700">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link href="/aboutUs" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
                        <Link href="/contactUs" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        <button
                            className="text-blue-600 font-semibold text-left"
                            onClick={() => {
                                setLoginModalOpen(true);
                                setMobileMenuOpen(false);
                            }}
                        >
                            Login
                        </button>
                    </nav>
                </div>
            )}

            {/* Login Modal */}
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setLoginModalOpen(false)}
            />
        </header>
    );
};

export default Header;
