"use client";

import { useState } from "react";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("image", image);
    alert("Profile Updated!");
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">

      <form
        onSubmit={handleUpdate}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md flex flex-col gap-5"
      >

        <h2 className="text-xl font-semibold text-center">
          Update Profile
        </h2>

        <input
          type="text"
          placeholder="Enter name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
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