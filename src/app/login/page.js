"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >

        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p className="text-gray-500 text-sm">
            Please sign in to continue
          </p>
        </div>

        <form className="flex flex-col gap-4">

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary w-full mt-2"
          >
            Sign In
          </motion.button>

        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>

      </motion.div>

    </div>
  );
}