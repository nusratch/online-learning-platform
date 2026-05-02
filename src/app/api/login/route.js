import { NextResponse } from "next/server"
import clientPromise from "@/lib/db"

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    const client = await clientPromise
    const db = client.db("skillpshere")

    const user = await db.collection("users").findOne({ email })

    console.log("Typed Email:", email)
    console.log("Typed Password:", password)
    console.log("DB User:", user)

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 401 }
      )
    }

    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Password does not match" },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
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