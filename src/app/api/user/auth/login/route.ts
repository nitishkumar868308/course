import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {

    await connectDB();

    const body = await req.json();

    const { email, password } = body;

    const user = await User.findOne({ email });

    if (!user) {
        return NextResponse.json({ message: "User not found", status: 404 }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return NextResponse.json({ message: "Invalid credentials", status: 401 }, { status: 401 });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });

    const res = NextResponse.json({
        message: "Login successful",
        status: 200,
        user: user,        // Include user data
        token: token,      // Include token data
    });

    res.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // Token expiry set to 7 days
    });

    return res;
}
