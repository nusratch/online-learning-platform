"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Nusrat",
    email: "nusrat@gmail.com",
    image: "https://i.pravatar.cc/150?img=12"
  });

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedImage = localStorage.getItem("image");

    if (savedName || savedImage) {
      setUser({
        ...user,
        name: savedName || user.name,
        image: savedImage || user.image
      });
    }
  }, []);

  return (
    <div className="w-full min-h-[70vh] flex justify-center items-start pt-20">

      <div className="flex flex-col items-center text-center gap-6">

        <img
           src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          className="w-28 h-28 rounded-full object-cover"
        />

        <h2 className="text-xl font-semibold">
          {user.name}
        </h2>

        <p className="text-gray-500 border p-2 shadow rounded">
          {user.email}
        </p>

        <Link href="/profile/update">
          <button className="btn btn-primary px-6">
            Update Profile
          </button>
        </Link>

      </div>

    </div>
  );
}