import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CheckOut = (props) => {
  const location = useLocation();
  const [course, setCourse] = useState([]);
  console.log(course);

  useEffect(() => {
    const courseId = location.state.id;
    fetch(`http://localhost:5000/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div>
      <h2>check out page</h2>
      <h2>course name: {course.title}</h2>
      <h2>price: ${course.price}</h2>
    </div>
  );
};

export default CheckOut;
