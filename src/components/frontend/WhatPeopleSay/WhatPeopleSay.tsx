"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Amit Sharma",
        title: "Software Engineer",
        image: "/images/user/user-01.jpg",
        quote: "This platform completely transformed my career. The mentors are top-notch and the content is gold!",
    },
    {
        name: "Riya Mehta",
        title: "UI/UX Designer",
        image: "/images/user/user-02.jpg",
        quote: "Loved every bit of the UI/UX design course. It helped me land a great job!",
    },
    {
        name: "Sagar Verma",
        title: "DevOps Specialist",
        image: "/images/user/user-03.jpg",
        quote: "The DevOps course gave me practical knowledge. Highly recommend to anyone serious about cloud!",
    },
];

const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
};

export default function WhatPeopleSay() {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                What People Say
            </h2>

            <div className="max-w-4xl mx-auto">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
                            <div className="flex justify-center mb-4">
                                <FaQuoteLeft className="text-blue-600 text-4xl" />
                            </div>
                            <p className="text-gray-700 text-lg mb-6 italic">{testimonial.quote}</p>
                            <div className="flex flex-col items-center">
                                <div className="relative w-16 h-16 mb-2">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500">{testimonial.title}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
