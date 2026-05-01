"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 shadow-sm bg-white sticky top-0 z-50"
    >
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-lg sm:text-xl font-bold text-blue-600 cursor-pointer"
      >
        SkillSphere
      </motion.h1>

      <div className="flex gap-2 sm:gap-4 items-center">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/" className="text-sm sm:text-base hover:text-blue-500 transition">
            Home
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/courses" className="text-sm sm:text-base hover:text-blue-500 transition">
            Courses
          </Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            href="/login"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-blue-500 text-white text-sm sm:text-base hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            href="/register"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border text-sm sm:text-base hover:bg-gray-100 transition"
          >
            Register
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}