"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="py-20 bg-gray-50 px-4 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image */}
                <div className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <Image
                        src="/images/user/owner_custom.png"
                        alt="About Us"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Right Side - Content */}
                <div>
                    <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2 block">
                        About Us
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Empowering Ideas into Reality
                    </h2>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        At Crivera Technologies, we don&apos;t just build software — we craft
                        experiences. Our mission is to transform your vision into scalable
                        digital solutions that truly make an impact.
                    </p>

                    <div className="grid gap-4">
                        <div className="flex items-start">
                            <span className="text-blue-600 text-xl font-bold mr-3">✓</span>
                            <p className="text-gray-800">
                                10+ Years of Industry Expertise
                            </p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-blue-600 text-xl font-bold mr-3">✓</span>
                            <p className="text-gray-800">
                                Agile Development with Cutting-edge Tech Stack
                            </p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-blue-600 text-xl font-bold mr-3">✓</span>
                            <p className="text-gray-800">
                                Dedicated Support & Strategic Consulting
                            </p>
                        </div>
                    </div>

                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
