"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !image || !password) {
      toast.error("All fields are required ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          image,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Registration successful 🎉");

        localStorage.setItem(
          "user",
          JSON.stringify({ name, email, image })
        );

        router.push("/login");
      } else {
        toast.error(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.success("Logged in with Google ✅");

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Google User",
        email: "google@gmail.com",
        image: "https://i.pravatar.cc/150?img=3",
      })
    );

    router.push("/");
  };

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

          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="btn btn-primary w-full mt-2 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-3 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}