import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog({ limit }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();
        setBlogs(limit ? data.slice(0, limit) : data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, [limit]);

  return (
    <>
      <h1 className="text-3xl mt-16 font-semibold text-center uppercase tracking-widest">
        READ OUR BLOGS
      </h1>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {blogs.map(({ id, title, description, imageUrl }) => (
            <div
              key={id}
              className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white max-w-xs mx-auto"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>

                <p className="text-gray-700 text-sm line-clamp-3 mb-2">
                  {description}
                </p>

                <Link
                  to={`/blogs/${id}`}
                  className="mt-auto text-center  text-violet-900 border border-t-violet-900 px-4 py-2 rounded-3xl hover:bg-violet-900 hover:text-white transition self-start text-sm"
>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
