"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        {
            name: "About",
            subItems: [
                { name: "About Us", href: "/aboutUs" },
                { name: "Leadership", href: "/leadership" },
                { name: "Vision & Mission", href: "/vision" },
            ],
        },
        {
            name: "Academics",
            subItems: [
                { name: "Courses", href: "/courses" },
                { name: "Departments", href: "/departments" },
            ],
        },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contactUs" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Top Bar */}
            <div className="bg-blue-800 text-white text-sm py-2 px-4 flex justify-between items-center">
                <div>
                    📞 Toll-Free: <span className="font-semibold">1800-123-4567</span>
                </div>
                <div className="space-x-4 hidden md:flex">
                    <Link href="/erp" className="hover:underline">ERP Login</Link>
                    <Link href="/alumni" className="hover:underline">Alumni</Link>
                </div>
            </div>

            {/* Main Nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="w-32 h-10 relative">
                    <div className="w-32 h-10 relative">
                        <Link href="/">
                            <Image
                                src="/images/logo/piet.png"
                                alt="PIET Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                </div>


                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium relative">
                    {navItems.map((item) =>
                        item.subItems ? (
                            <div key={item.name} className="relative group">
                                <button className="flex items-center gap-1">
                                    {item.name} <ChevronDown size={16} />
                                </button>

                                <div className="absolute left-0 top-full mt-2 w-48 bg-white border shadow-md rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                                    {item.subItems.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            href={sub.href}
                                            className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        ) : (
                            <Link key={item.name} href={item.href}>
                                {item.name}
                            </Link>
                        )
                    )}
                </nav>



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
                        {navItems.map((item) =>
                            item.subItems ? (
                                <details key={item.name}>
                                    <summary className="cursor-pointer">{item.name}</summary>
                                    <div className="pl-4">
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block py-1 text-sm"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}

                    </nav>
                </div>
            )}


        </header>
    );
};

export default Header;
