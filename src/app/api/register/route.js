import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    let { name, email, password, image } = body;

    // ✅ Clean input
    name = name?.trim();
    email = email?.trim();
    password = password?.trim();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("skillpshere");

    // ✅ Check existing user
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 }
      );
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Insert user
    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      image: image || "",
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("🔥 REGISTER ERROR:", error); // VERY IMPORTANT
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}