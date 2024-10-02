'use client'

import instance from "@/helper/axios-intance";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BlogDetail = ({ params }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await instance.get(`/blog/${params.id}`);
        setPost(response.data.data);
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-right",
          icon: "❌",
        });
      }
    };

    fetchPost()
  }, []);

  console.log(post)

  return <div>BlogDetail</div>;
};

export default BlogDetail;
