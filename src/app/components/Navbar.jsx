"use client";
import Link from "next/link";

function Navbar() {
  const user = null;

  return (
    <div className="navbar bg-base-200 px-4 md:px-8">

      {/* LEFT */}
      <div className="flex-1 flex items-center gap-2">
        <img src="/logo.jpeg" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
        <Link href="/" className="text-lg md:text-xl font-bold">
          SkillSphere
        </Link>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/profile">My Profile</Link>

        {!user ? (
          <>
            <Link href="/login" className="btn btn-sm">Login</Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        ) : (
          <button className="btn btn-sm">Logout</button>
        )}
      </div>

      {/* MOBILE MENU */}
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-sm">☰</label>
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 right-0">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;