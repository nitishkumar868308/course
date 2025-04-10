"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const clients = [
    "/images/user/user-04.jpg",
    "/images/user/user-05.jpg",
    "/images/user/user-06.jpg",
    "/images/user/user-07.jpg",
    "/images/user/user-08.jpg",
];

export default function OurClients() {
    return (
        <section className="bg-white py-16 px-4 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                Our Clients
            </h2>

            <Marquee speed={50} pauseOnHover gradient={false}>
                {clients.map((logo, index) => (
                    <div key={index} className="mx-8 w-40 h-20 relative">
                        <Image src={logo} alt={`Client ${index + 1}`} fill className="object-contain" />
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
