import courses from "../data/courses";
import Link from "next/link";

function CoursesPage() {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {courses.map(course => (
        <div key={course.id} className="card bg-base-100 shadow-md">

          <figure>
            <img src={course.image} alt={course.title} />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{course.title}</h2>
            <p>{course.instructor}</p>
            <p>⭐ {course.rating}</p>

            <Link href={`/courses/${course.id}`}>
              <button className="btn btn-primary mt-2">View Details</button>
            </Link>
          </div>

        </div>
      ))}

    </div>
  );
}

export default CoursesPage;