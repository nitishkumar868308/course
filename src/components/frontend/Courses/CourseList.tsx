"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import CourseSearch from "./CourseSearch";
import CourseFilters from "./CourseFilters";

const allCourses = [
    {
        title: "React Basics",
        description: "Learn the basics of React.js and build UI components.",
        image: "/images/cards/card-01.jpg",
        price: "₹1,999",
        category: "Web Development",
    },
    {
        title: "Machine Learning",
        description: "Intro to ML with Python and scikit-learn.",
        image: "/images/cards/card-02.jpg",
        price: "₹3,999",
        category: "Data Science",
    },
    // add more...
];

export default function CourseList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [...new Set(allCourses.map((c) => c.category))];

    const filteredCourses = allCourses.filter((course) => {
        const matchesCategory =
            selectedCategory === "All" || course.category === selectedCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-10 px-4 md:px-12 lg:px-20">
            <div className="mb-6">
                <CourseSearch onSearch={setSearchQuery} />
            </div>
            <div className="mb-8">
                <CourseFilters
                    categories={categories}
                    selected={selectedCategory}
                    onChange={setSelectedCategory}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
}
