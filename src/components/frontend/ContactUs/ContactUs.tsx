"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left - Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Let&apos;s build something great together
                    </h2>
                    <p className="text-lg text-gray-600">
                        We’d love to hear from you! Whether you have a question about services,
                        pricing, or anything else, our team is ready to answer all your questions.
                    </p>

                    <div className="space-y-6 mt-8">
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Email</p>
                                <p className="text-gray-600">contact@criveratechnologies.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Phone</p>
                                <p className="text-gray-600">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Address</p>
                                <p className="text-gray-600">
                                    2nd Floor, Tech Park, Sector 62, Noida, Uttar Pradesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Contact Form */}
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                rows={4}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
