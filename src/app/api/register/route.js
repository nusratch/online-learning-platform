import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, image } = body;

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
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    }

    await db.collection("users").insertOne({
      name,
      email,
      password,
      image: image || "",
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}