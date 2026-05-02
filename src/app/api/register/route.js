import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req) {
  try {
    console.log("STEP 1");

    const body = await req.json();
    console.log("STEP 2", body);

    const { name, email, password, image } = body;

    const client = await clientPromise;
    console.log("STEP 3 DB CONNECTED");

    const db = client.db("skillpshere");

    await db.collection("users").insertOne({
      name,
      email,
      password,
      image,
    });

    console.log("STEP 4 SAVED");

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log("ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}