"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name && !image) {
      toast.error("Enter at least one field ❌");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user")) || {};

    const updatedUser = {
      ...storedUser,
      name: name || storedUser.name,
      image: image || storedUser.image,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Profile updated successfully ✅");

    setTimeout(() => {
      router.push("/profile");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">

      <form
        onSubmit={handleUpdate}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
      >

        <h2 className="text-2xl font-semibold text-center">
          Update Profile
        </h2>

        <input
          type="text"
          placeholder="Enter name"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn btn-primary w-full mt-2">
          Update Information
        </button>

      </form>

    </div>
  );
}