import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import courses from "./data/courses";

export default function Home() {
  const topCourses = courses.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          🔥 Popular Courses
        </h2>

        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          📌 Learning Tips
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">📖 Study Techniques</h3>
            <p className="text-gray-600">
              Break your learning into small chunks, practice daily, and revise regularly to master any skill faster.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">⏰ Time Management</h3>
            <p className="text-gray-600">
              Set clear goals, avoid distractions, and use techniques like Pomodoro to stay productive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}