import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    let { name, email, password, image } = body;

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

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = password;

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
    console.error("🔥 REGISTER ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}