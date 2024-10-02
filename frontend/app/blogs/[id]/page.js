"use client";

import instance from "@/helper/axios-intance";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ImageRef from "@/helper/image-ref";

const BlogDetail = ({ params }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await instance.get(`/blog/${params.id}`);
        setBlog(response.data.data);
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-right",
          icon: "❌",
        });
      }
    };

    fetchPost();
  }, []);

  console.log(blog);

  return (
    <div className="flex gap-10">
      <div>
        <h1 className="text-6xl font-bold">{blog?.title}</h1>
      </div>
      <div><Image src={ImageRef(imagePath)} alt={blog.title} width={1000} height={1000}/></div>
    </div>
  );
};

export default BlogDetail;
