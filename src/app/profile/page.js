"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
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
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md text-center">

        <img
          src={user.image || "https://i.pravatar.cc/150"}
          alt="Profile"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />

        <h2 className="text-2xl font-semibold mb-1">
          {user.name || "User"}
        </h2>

        <p className="text-gray-500 mb-4">
          {user.email}
        </p>

        <Link href="/profile/update">
          <button className="btn btn-primary w-full">
            Update Profile
          </button>
        </Link>

      </div>
    </div>
  );
}