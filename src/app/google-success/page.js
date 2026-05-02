"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoogleSuccess() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Google User",
        email: "google@gmail.com",
        image: "https://i.pravatar.cc/150?img=3",
      })
    );

    window.dispatchEvent(new Event("storage"));

    router.replace("/");
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="text-xl animate-pulse">Logging you in...</h2>
    </div>
  );
}