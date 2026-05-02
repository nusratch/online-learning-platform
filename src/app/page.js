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

      <section className="py-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-black"
        >
          🔥 Popular Courses
        </motion.h2>

        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {topCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-10 text-black"
        >
          📌 Learning Tips
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-black">
              📖 Study Techniques
            </h3>
            <p className="text-gray-900">
              Break your learning into small chunks, practice daily, and revise
              regularly to master any skill faster.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-black">
              ⏰ Time Management
            </h3>
            <p className="text-gray-900">
              Set clear goals, avoid distractions, and use techniques like
              Pomodoro to stay productive.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
          🆕 New Releases
        </h2>

        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {courses.slice(3, 6).map((course) => (
            <div
              key={course.id}
              className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={course.image}
                className="w-full h-40 object-cover rounded-md mb-3"
              />

              <h3 className="font-semibold text-black">{course.title}</h3>

              <p className="text-sm text-gray-800">
                {course.instructor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-10 text-black"
        >
          🏆 Top Instructors
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "John Doe", img: "/a1.jpg", field: "Web Development" },
            { name: "Sarah Smith", img: "/a3.jpg", field: "UI/UX Design" },
            { name: "David Lee", img: "/a2.jpg", field: "Digital Marketing" },
          ].map((inst, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.08 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <img
                src={inst.img}
                alt="Instructor"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-black">
                {inst.name}
              </h3>
              <p className="text-gray-800 text-sm">{inst.field}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}