import { NextResponse } from "next/server"
import clientPromise from "@/lib/db"

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    const client = await clientPromise
    const db = client.db("skillSphere")

    const user = await db.collection("users").findOne({ email })

    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
      },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    )
  }
}