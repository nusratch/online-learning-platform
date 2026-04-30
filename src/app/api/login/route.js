import { NextResponse } from "next/server"
import clientPromise from "@/lib/db"

export async function POST(req) {
  const { email, password } = await req.json()

  const client = await clientPromise
  const db = client.db("skillSphere")

  const user = await db.collection("users").findOne({ email })

  if (!user || user.password !== password) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }

  return NextResponse.json({ user })
}