import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          Instructor: {course.instructor}
        </p>

        <p className="text-yellow-500 font-medium mb-3">
          ⭐ {course.rating}
        </p>

        <Link href={`/courses/${course.id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}