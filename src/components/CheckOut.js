import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // const heading = location.state.title;
  // const priceValue = location.state.price;

  useEffect(() => {
    const courseId = location.state.id;
    fetch(`https://sams-teaching-server.vercel.app/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [location]);

  return (
    <div
      className="h-screen"
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(24deg, rgba(2,0,36,1) 0%, rgba(130,130,199,1) 0%, rgba(0,212,255,1) 100%)",
      }}
    >
      {loading ? (
        <div className="flex py-2 justify-center">
          <progress className="progress progress-primary w-56"></progress>
        </div>
      ) : (
        <>
          <div className="pt-12">
            <h2 className="font-bold text-2xl my-5 uppercase">
              check out page
            </h2>
            <h2 className="font-bold text-2xl">Course name: {course.title}</h2>
            <h2 className="font-bold text-2xl">Price: ${course.price}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
