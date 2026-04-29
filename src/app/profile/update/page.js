"use client";

export default function ProfilePage() {
  return (
    <div className="w-full flex justify-center items-start pt-20 min-h-screen">

      <div className="flex flex-col items-center text-center gap-5">

        <img
          src="https://i.pravatar.cc/150?img=12"
          className="w-28 h-28 rounded-full object-cover"
        />

        <h2 className="text-xl font-semibold">
          Nusrat
        </h2>

        <p className=  bg-gray-400 text-black >
          nusrat@gmail.com
        </p>

        <button className="btn btn-primary px-6">
          Update Profile
        </button>

      </div>

    </div>
  );
}