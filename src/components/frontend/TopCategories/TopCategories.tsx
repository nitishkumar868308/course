"use client";
import React from "react";
import { Code, Brain, PenTool, Cloud, DatabaseZap, ShieldCheck } from "lucide-react";

const categories = [
    { name: "Web Development", icon: Code },
    { name: "Machine Learning", icon: Brain },
    { name: "UI/UX Design", icon: PenTool },
    { name: "Cloud Computing", icon: Cloud },
    { name: "Data Science", icon: DatabaseZap },
    { name: "Cybersecurity", icon: ShieldCheck },
];

export default function TopCategories() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-20 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Top Categories
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((cat, index) => {
                    const Icon = cat.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                                <Icon size={32} />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-700">{cat.name}</h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
