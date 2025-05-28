import React, { useEffect, useState } from "react";
import ContactPage from "./contact";
import { useParams } from "react-router-dom";
import Recommendation from "./recommanded";  // Import here

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-3xl text-center font-medium mt-6 mb-4 ">{blog.title}</h1>

        {/* Subtitle */}
        {blog.subtitle && (
          <p className="text-xl text-center mb-4">{blog.subtitle}</p>
        )}

        {/* Meta Info */}
        <div className="text-sm text-gray-500 text-center mb-6">
          <p>
            Posted on: {new Date(blog.postedOn).toLocaleDateString()} | {blog.readingTime}
          </p>
        </div>

        {/* Image */}
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-96 object-cover rounded mb-6"
          />
        )}

        {/* Long Description */}
        {blog.longDescription && (
          <div className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {blog.longDescription}
          </div>
        )}
      </div>

      {/* RECOMMENDATIONS HERE */}
      <Recommendation currentBlogId={id} />

      <section className="bg-gray-200 text-center p-10">
        <h1 className=" text-black px-8 py-3 rounded-lg text-center mb-6 text-2xl font-normal tracking-widest">JOIN THE BULLWORK FAMILY </h1>
        <button
          className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                     text-white px-8 py-3 rounded-lg
                     shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest mr-6"
        >
          ORDER
        </button>
        <button
          className="border-black px-8 py-3 rounded-lg
                     shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest"
        >
          Book Demo
        </button>
      </section>

      <ContactPage />
    </>
  );
}
