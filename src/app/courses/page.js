"use client";

import { useState, useEffect, useRef } from "react";
import courses from "../data/courses";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const hasShown = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace("/login?from=/courses");
      return;
    }

    setIsAllowed(true);

    if (!hasShown.current) {
      toast.success("Here are all courses 📚");
      hasShown.current = true;
    }
  }, [router]);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!isAllowed) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] gap-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 animate-pulse">Checking access...</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6 max-w-7xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center"
      >
        All Courses
      </motion.h1>

      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg bg-white"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 sm:h-44 lg:h-48 object-cover"
              />

              <div className="p-3 sm:p-4">
                <h2 className="text-base sm:text-lg font-semibold line-clamp-2">
                  {course.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-500">
                  {course.instructor}
                </p>

                <p className="text-yellow-500 font-medium mb-3">
                  ⭐ {course.rating}
                </p>

                <Link href={`/courses/${course.id}`}>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    View Details
                  </button>
                </Link>

              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No courses found
          </p>
        )}
      </div>
    </div>
  );
}