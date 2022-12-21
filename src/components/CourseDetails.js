import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import jsPDF from "jspdf";

const CourseDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const detail = useLoaderData();
  const {
    category,
    description,
    instructor,
    picture,
    price,
    ratings,
    title,
    id,
  } = detail;

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text(title, 10, 10);
    doc.save(`${title}.pdf`);
  };

  return (
    <div className="w-3/4 h-screen mx-auto my-10">
      {loading ? (
        <div className="flex my-4 justify-center">
          <progress className="progress progress-primary w-56"></progress>
        </div>
      ) : (
        <>
          <div className="card lg:card-side bg-orange-200 shadow-xl">
            <figure className="w-full p-6">
              <img src={picture} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left">
                {title}
                <FaFilePdf
                  className="cursor-pointer"
                  onClick={downloadPdf}
                ></FaFilePdf>
              </h2>
              <p className="text-left">{description}</p>
              <p className="text-left">Category: {category}</p>
              <p className="text-left">Instructor: {instructor}</p>
              <p className="text-left">Price: ${price}</p>
              <p className="text-left">Ratings: {ratings}</p>

              <div className="card-actions justify-end">
                <Link to="/check-out" state={{ id, title, price }}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
