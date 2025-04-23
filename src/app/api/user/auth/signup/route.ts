// app/api/user/auth/route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {

    await connectDB();

    const body = await req.json();
    const { name, email, password } = body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json(
            { message: "Email already in use", success: false },
            { status: 400 }
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: "7d" });

    const res = NextResponse.json(
        { message: "Signup successful", success: true }
    );
    res.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
    });

    return res;
}
