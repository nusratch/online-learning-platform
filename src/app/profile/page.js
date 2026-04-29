"use client";

import Link from "next/link";

function ProfilePage() {
  // dummy user (later auth দিয়ে replace করবো)
  const user = {
    name: "Nusrat",
    email: "nusrat@gmail.com",
    image: "https://i.pravatar.cc/150"
  };

  return (
    <div className="flex justify-center mt-10 px-4">

      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6 text-center">

        <img
          src={user.image}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

        <Link href="/profile/update">
          <button className="btn btn-primary mt-5 w-full">
            Update Profile
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProfilePage;