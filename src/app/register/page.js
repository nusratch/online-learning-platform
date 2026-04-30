"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })

    const data = await res.json()

    if (res.ok) {
      alert("Registration successful")
      router.push("/login")
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-gray-500 text-sm">
            Sign up to get started
          </p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <input type="text" placeholder="Full Name" className="input input-bordered w-full"
            onChange={(e)=>setName(e.target.value)} />

          <input type="email" placeholder="Email Address" className="input input-bordered w-full"
            onChange={(e)=>setEmail(e.target.value)} />

          <input type="password" placeholder="Password" className="input input-bordered w-full"
            onChange={(e)=>setPassword(e.target.value)} />

          <button className="btn btn-primary w-full mt-2">
            Register
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}