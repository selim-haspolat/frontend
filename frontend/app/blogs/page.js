"use client";

import BlogCard from "@/components/BlogCard";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Blogları alma hatası:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              data={{
                title: blog.title,
                photo: `http://localhost:8080/${blog.photo}`,
                createdAt: blog.createdAt,
                createdBy: blog.createdBy,
              }}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BlogPage;
