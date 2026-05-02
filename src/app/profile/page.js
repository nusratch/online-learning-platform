"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);

      setUser({
        name: parsed.name || parsed.displayName || "User",
        email: parsed.email || "",
        image: parsed.image || ""
      });
    }
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <h2>No user data found</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md text-center">

        <h2 className="text-2xl font-semibold text-black mb-2">
          {user.name}
        </h2>

        <p className="text-gray-500 mb-2">
          {user.image || "No image URL added"}
        </p>

        <p className="text-gray-700 mb-6">
          {user.email}
        </p>

        <Link href="/profile/update">
          <button className="w-full py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Update Profile
          </button>
        </Link>

      </div>
    </div>
  );
}