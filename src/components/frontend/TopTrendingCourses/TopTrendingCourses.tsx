"use client";
import React from "react";
import Image from "next/image";

const courses = [
    {
        title: "Full Stack Web Development",
        description: "Master MERN stack and build real-world projects.",
        image: "/images/cards/card-01.jpg",
        originalPrice: 4999,
        discountedPrice: 1999,
    },
    {
        title: "Data Science & Machine Learning",
        description: "Learn Python, Pandas, and ML algorithms from scratch.",
        image: "/images/cards/card-02.jpg",
        originalPrice: 5999,
        discountedPrice: 2499,
    },
    {
        title: "UI/UX Design Mastery",
        description: "Create stunning user experiences with Figma & design thinking.",
        image: "/images/cards/card-03.png",
        originalPrice: 3999,
        discountedPrice: 1499,
    },
    {
        title: "DevOps with AWS & Docker",
        description: "CI/CD pipelines, AWS services, Docker & Kubernetes.",
        image: "/images/cards/card-03.jpg",
        originalPrice: 5499,
        discountedPrice: 2199,
    },
    {
        title: "UI/UX Design Mastery",
        description: "Create stunning user experiences with Figma & design thinking.",
        image: "/images/cards/card-02.png",
        originalPrice: 3999,
        discountedPrice: 1499,
    },
    {
        title: "DevOps with AWS & Docker",
        description: "CI/CD pipelines, AWS services, Docker & Kubernetes.",
        image: "/images/cards/card-01.png",
        originalPrice: 5499,
        discountedPrice: 2199,
    },
];


export default function TopTrendingCourses() {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                Top Trending Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Flex-grow area */}
                        <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {course.title}
                            </h3>
                            <p className="text-gray-600 text-sm flex-1">{course.description}</p>

                            {/* Price section */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-lg font-bold text-blue-600">
                                    ₹{course.discountedPrice}
                                </span>
                                <span className="text-sm line-through text-gray-400">
                                    ₹{course.originalPrice}
                                </span>
                            </div>


                            {/* Pushes button to bottom */}
                            <div className="mt-4">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}
