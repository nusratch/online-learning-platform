"use client";

import { useParams } from "next/navigation";

function CourseDetails() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Course Details</h1>

      <p className="mt-4">Course ID: {id}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Course Curriculum</h2>
        <ul className="list-disc ml-5 mt-2">
          <li>Introduction</li>
          <li>Basics</li>
          <li>Advanced Topics</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;