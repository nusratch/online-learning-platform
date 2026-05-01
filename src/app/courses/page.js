import courses from "../data/courses"

export default function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="border p-4 rounded-lg shadow">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">
              {course.title}
            </h2>
            <p className="text-sm text-gray-500">
              {course.instructor}
            </p>
            <p>⭐ {course.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}