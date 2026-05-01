"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import courses from "./data/courses";

export default function Home() {
  const topCourses = courses.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
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
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          📌 Learning Tips
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">📖 Study Techniques</h3>
            <p className="text-gray-600">
              Break your learning into small chunks, practice daily, and revise regularly to master any skill faster.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">⏰ Time Management</h3>
            <p className="text-gray-600">
              Set clear goals, avoid distractions, and use techniques like Pomodoro to stay productive.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
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
              <h3 className="text-lg font-semibold">{inst.name}</h3>
              <p className="text-gray-500 text-sm">{inst.field}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}