"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import courses from "./data/courses";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

export default function Home() {
  const topCourses = courses.slice(0, 3);
  const hasShown = useRef(false);

  useEffect(() => {
    if (!hasShown.current) {
      const user = localStorage.getItem("user");

      if (user) {
        const parsedUser = JSON.parse(user);
        toast.success(`Welcome ${parsedUser.name || "User"} 🎉`);
      } else {
        toast.success("Welcome to SkillSphere 🚀");
      }

      hasShown.current = true;
    }
  }, []);

  return (
    <>
      <Hero />

      <section className="py-12 px-4 bg-white">
        <motion.h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">
          🔥 Popular Courses
        </motion.h2>

        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {topCourses.map((course) => (
            <motion.div key={course.id}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-100">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          📌 Learning Tips
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-black">
              📖 Study Techniques
            </h3>
            <p className="text-gray-800">
              Break your learning into small chunks, practice daily, and revise regularly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-black">
              ⏰ Time Management
            </h3>
            <p className="text-gray-800">
              Set clear goals, avoid distractions, and use Pomodoro techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
          🆕 New Releases
        </h2>

        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {courses.slice(3, 6).map((course) => (
            <div key={course.id} className="bg-gray-100 p-4 rounded-xl shadow">
              <img
                src={course.image}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-black">
                {course.title}
              </h3>
              <p className="text-gray-700">
                {course.instructor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-900">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          🏆 Top Instructors
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "John Doe", img: "/a1.jpg", field: "Web Development" },
            { name: "Sarah Smith", img: "/a3.jpg", field: "UI/UX Design" },
            { name: "David Lee", img: "/a2.jpg", field: "Digital Marketing" },
          ].map((inst, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <img
                src={inst.img}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-black">{inst.name}</h3>
              <p className="text-gray-700 text-sm">{inst.field}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}