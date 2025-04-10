import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    description: string;
    image: string;
    price: string;
    category: string;
};

export default function CourseCard({ title, description, image, price, category }: Props) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-xl">
            <div className="relative w-full h-48">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 flex-1">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-blue-600">{price}</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">{category}</span>
                </div>
            </div>
        </div>
    );
}
