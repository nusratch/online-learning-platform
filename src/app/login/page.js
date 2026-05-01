"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        alert("Server error");
        return;
      }

      if (res.ok && data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));

        const params = new URLSearchParams(window.location.search);
        const redirect = params.get("from") || "/";

        window.location.href = redirect;
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Network error");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-gray-500 text-sm">
            Sign in to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}