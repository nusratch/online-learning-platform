"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0";
    setIsLoggedIn(false);
  };

  return (
    <nav className="flex justify-between px-6 py-4">
      <h1>SkillSphere</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>

        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}