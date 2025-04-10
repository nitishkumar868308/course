"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8 mt-10 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold text-blue-600 mb-2">Course</h2>
                    <p className="text-sm">Building the future, one line of code at a time.</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Courses</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-gray-500">
                        {/* Replace with actual social icons later */}
                        <a href="#" className="hover:text-blue-500">Facebook</a>
                        <a href="#" className="hover:text-blue-500">Twitter</a>
                        <a href="#" className="hover:text-blue-500">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
