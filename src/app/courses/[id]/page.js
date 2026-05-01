import courses from "../../data/courses";
import { notFound } from "next/navigation";

export default async function CourseDetails({ params }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  const course = courses.find((c) => c.id === id);

  if (!course) return notFound();

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

      <p className="text-gray-700 mb-6">
        {course.description}
      </p>

      <div className="bg-gray-100 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-3">
          📚 Course Curriculum
        </h2>

        <ul className="list-disc ml-5 space-y-2">
          <li>Introduction</li>
          <li>Core Concepts</li>
          <li>Hands-on Practice</li>
          <li>Projects</li>
          <li>Advanced Topics</li>
        </ul>
      </div>
    </div>
  );
}