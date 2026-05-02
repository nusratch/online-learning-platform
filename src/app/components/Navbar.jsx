"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    loadUser();

    window.addEventListener("storage", loadUser);

    const interval = setInterval(loadUser, 500);

    return () => {
      window.removeEventListener("storage", loadUser);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 shadow-sm bg-white sticky top-0 z-50"
    >
      <h1 className="text-lg sm:text-xl font-bold text-blue-600 cursor-pointer">
        SkillSphere
      </h1>

      <div className="flex gap-2 sm:gap-4 items-center">
        <Link href="/" className="text-black hover:text-blue-500">
          Home
        </Link>

        <Link href="/courses" className="text-black hover:text-blue-500">
          Courses
        </Link>

        {user ? (
          <>
            <Link
              href="/profile"
              className="flex items-center gap-2 text-black hover:text-blue-500"
            >
              <img
                src={user.image || "https://i.pravatar.cc/150"}
                alt="user"
                className="w-8 h-8 rounded-full object-cover border"
              />
              <span className="hidden sm:block">My Profile</span>
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border text-black hover:bg-gray-100"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </motion.nav>
  );
}