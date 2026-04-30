"use client"

import { useEffect, useState } from "react"

export default function Navbar() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        setUser(null)
      }
    }

    checkUser()

    window.addEventListener("storage", checkUser)

    return () => window.removeEventListener("storage", checkUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    window.location.reload()
  }

  return (
    <div className="flex justify-between p-4">
      <div>SkillSphere</div>

      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/profile">My Profile</a>

        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </div>
    </div>
  )
}