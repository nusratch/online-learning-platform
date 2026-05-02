"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoogleSuccess() {
  const router = useRouter();

  useEffect(() => {
    const existingUser = localStorage.getItem("user");

    if (!existingUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "User",
          email: "user@gmail.com",
          image: ""
        })
      );
    }

    window.dispatchEvent(new Event("storage"));
    router.replace("/");
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="text-xl animate-pulse">Logging you in...</h2>
    </div>
  );
}