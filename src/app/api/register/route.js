import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, image } = body;

    const clientPromise = (await import("@/lib/db")).default;
    const client = await clientPromise;
    const db = client.db("skillpshere");

    await db.collection("users").insertOne({
      name,
      email,
      password,
      image,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}