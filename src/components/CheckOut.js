import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const location = useLocation();
  // const heading = location.state.title;
  // const priceValue = location.state.price;
  if (!location) {
    setLoading(true);
  }

  useEffect(() => {
    const courseId = location.state.id;
    fetch(`https://sams-teaching-server.vercel.app/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
    setLoading(false);
  }, [location]);

  return (
    <div>
      <h2>check out page</h2>
      <h2>course name: {course.title}</h2>
      <h2>price: ${course.price}</h2>
    </div>
  );
};

export default CheckOut;
