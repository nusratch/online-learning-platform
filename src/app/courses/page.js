"use client";

import { useState, useEffect, useRef } from "react";
import courses from "../data/courses";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const hasShown = useRef(false);

  useEffect(() => {
    if (!hasShown.current) {
      toast.success("Here are all courses 📚");
      hasShown.current = true;
    }
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

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
        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 text-sm sm:text-base"
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
              className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition duration-300 bg-white"
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

                <p className="text-yellow-500 text-sm sm:text-base font-medium mb-3">
                  ⭐ {course.rating}
                </p>

                <Link href={`/courses/${course.id}`}>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base">
                    View Details
                  </button>
                </Link>

              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-sm sm:text-base text-gray-500">
            No courses found
          </p>
        )}
      </div>
    </div>
  );
}