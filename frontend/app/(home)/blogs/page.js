"use client";

import BlogCard from "@/components/BlogCard";
import instance from "@/helper/axios-intance";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await instance.get("/blog");
        setBlogs(response.data.data);
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
              blog={blog}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BlogPage;
