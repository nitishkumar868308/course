"use client";
import React from "react";
import Image from "next/image";

const recentlyViewed = [
    {
        title: "React for Beginners",
        image: "/images/cards/card-01.jpg",
        originalPrice: 2999,
        discountedPrice: 999,
    },
    {
        title: "Advanced Node.js",
        image: "/images/cards/card-02.jpg",
        originalPrice: 3999,
        discountedPrice: 1599,
    },
    {
        title: "UI/UX Design Bootcamp",
        image: "/images/cards/card-03.png",
        originalPrice: 3499,
        discountedPrice: 1299,
    },
    {
        title: "Python for Data Analysis",
        image: "/images/cards/card-01.png",
        originalPrice: 4499,
        discountedPrice: 1799,
    },
];

export default function RecentlyViewed() {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                Recently Viewed Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentlyViewed.map((course, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                    >
                        <div className="relative w-full h-40">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col flex-1 p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                {course.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-auto">
                                <span className="text-base font-bold text-blue-600">
                                    ₹{course.discountedPrice}
                                </span>
                                <span className="text-sm line-through text-gray-400">
                                    ₹{course.originalPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
