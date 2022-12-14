import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import CategoryName from "./CategoryName";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    fetch("https://sams-teaching-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex my-4 justify-center">
          <progress className="progress progress-primary w-56"></progress>
        </div>
      ) : (
        <>
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
                  <div className="card  bg-base-100 shadow-xl">
                    <figure>
                      <img src={course.picture} alt="" />
                    </figure>
                    <div className="card-body">
                      <h2 className="">{course.title}</h2>
                      <div className="card-actions justify-center mt-auto">
                        <button className="btn btn-sm btn-primary">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Courses;
