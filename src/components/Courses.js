import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryName from "./CategoryName";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="md:flex p-4">
        <div className="grow-0">
          <h2>Total Courses:{courses.length}</h2>
          {courses.map((course) => (
            <Link
              to={`/courses/${course.id}`}
              className="block p-2 bg-orange-300 my-2 rounded capitalize"
            >
              {course.category}
            </Link>
          ))}
        </div>
        <div className="grow grid md:grid-cols-3 p-4 gap-4">
          {courses.map((course) => (
            <Link to={`/courses/${course.id}`}>
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={course.picture} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{course.title}</h2>
                  <div className="card-actions justify-center mt-auto">
                    <button className="btn btn-primary">Details</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
