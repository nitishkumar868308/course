"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        title: "Empowering Through Innovation",
        description: "Building cutting-edge software solutions for modern businesses.",
        image: "/images/carousel/carousel-01.png",
    },
    {
        title: "Digital Transformation Experts",
        description: "We help brands grow with technology and creativity.",
        image: "/images/carousel/carousel-02.png",
    },
    {
        title: "Your Success, Our Mission",
        description: "Partner with us for strategic growth and scalable tech.",
        image: "/images/carousel/carousel-03.png",
    },
    {
        title: "Online Course",
        description: "Let's Start",
        image: "/images/carousel/carousel-04.png",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, []);

    const slide = slides[currentSlide];

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-all duration-1000"
                priority // always load hero image fast
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                </h1>
                <p className="text-white text-lg md:text-xl mb-6">{slide.description}</p>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
                    Get Started
                </button>
            </div>
        </div>
    );
}
