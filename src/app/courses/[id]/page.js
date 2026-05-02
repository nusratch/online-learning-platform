"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import courses from "../../data/courses";

export default function CourseDetails() {
  const router = useRouter();
  const params = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!params?.id) return;

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace(`/register?from=/courses/${params.id}`);
      return;
    }

    const id = Number(params.id);
    const foundCourse = courses.find((c) => c.id === id);

    if (!foundCourse) {
      router.replace("/courses");
      return;
    }

    setCourse(foundCourse);
  }, [params]);

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>

      <p className="text-gray-600 mb-2">
        👨‍🏫 Instructor: {course.instructor}
      </p>

      <p className="text-yellow-500 font-medium mb-2">
        ⭐ {course.rating}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        ⏱ Duration: {course.duration} | 🎯 Level: {course.level}
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {course.description}
      </p>

      <div className="bg-gray-100 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-3">
          📚 Course Curriculum
        </h2>

        <ul className="list-disc ml-5 space-y-2">
          <li>Introduction
            One of the biggest advantages of online education is flexibility. Students can learn at their own pace, making it easier to balance studies with work, family, or other responsibilities. It also offers a wide range of courses—from academic subjects to professional skills like programming, design, and business—helping individuals grow in their careers.
          </li>
          <li>Core Concepts
            One of the biggest advantages of online education is flexibility. Students can learn at their own pace, making it easier to balance studies with work, family, or other responsibilities. It also offers a wide range of courses—from academic subjects to professional skills like programming, design, and business—helping individuals grow in their careers.
          </li>
          <li>Hands-on Practice</li>
          <li>Projects</li>
          <li>Advanced Topics</li>
        </ul>
      </div>
    </div>
  );
}