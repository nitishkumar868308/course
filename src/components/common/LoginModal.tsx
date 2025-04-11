"use client";

import { useEffect, useRef, useState } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [view, setView] = useState<"login" | "signup" | "forgot">("login");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl relative animate-fade-in"
            >
                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* ==== LOGIN ==== */}
                {view === "login" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 font-medium">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex justify-between text-sm">
                                <span
                                    className="text-blue-600 hover:underline cursor-pointer"
                                    onClick={() => setView("forgot")}
                                >
                                    Forgot password?
                                </span>
                                <span
                                    className="text-blue-600 hover:underline cursor-pointer"
                                    onClick={() => setView("signup")}
                                >
                                    Create account
                                </span>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                            >
                                Sign In
                            </button>
                        </form>
                    </>
                )}

                {/* ==== SIGNUP ==== */}
                {view === "signup" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 font-medium">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <span
                                className="text-blue-600 text-sm hover:underline cursor-pointer"
                                onClick={() => setView("login")}
                            >
                                Already have an account? Login
                            </span>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                            >
                                Register
                            </button>
                        </form>
                    </>
                )}

                {/* ==== FORGOT PASSWORD ==== */}
                {view === "forgot" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <span
                                className="text-blue-600 text-sm hover:underline cursor-pointer"
                                onClick={() => setView("login")}
                            >
                                Back to Login
                            </span>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                            >
                                Send Reset Link
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
