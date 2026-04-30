import { NextResponse } from "next/server"
import clientPromise from "@/lib/db"

export async function POST(req) {
  const { name, email, password } = await req.json()

  const client = await clientPromise
  const db = client.db("skillSphere")

  const existingUser = await db.collection("users").findOne({ email })

  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 })
  }

  await db.collection("users").insertOne({
    name,
    email,
    password,
  })

  return NextResponse.json({ message: "User created" })
}