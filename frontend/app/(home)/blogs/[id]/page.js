"use client";

import instance from "@/helper/axios-intance";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ImageRef from "@/helper/image-ref";
import Loading from "@/components/Loading";

const BlogDetail = ({ params }) => {
  const [blog, setBlog] = useState(null);

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

  if (!blog) {
    return <Loading />;
  }

  return (
    <div className="flex gap-14">
      <div className="flex-[3] flex flex-col gap-20">
        <h1 className="text-6xl font-bold border-b">{blog?.title}</h1>
        <p className="text-justify text-lg">{blog?.content}</p>
      </div>
      <div className="flex-[2]">
        <Image
          className="w-full sticky top-0"
          src={ImageRef(blog?.imagePath)}
          alt={blog.title}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
