"use client";

import Button from "@/components/Button";
import instance from "@/helper/axios-intance";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateBlogPage = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null); // Önizleme URL'si

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title || !content) {
      return toast("Please fill all fields", {
        icon: "❌",
        position: "top-right",
      });
    }

    const formData = new FormData();

    formData.append("photo", file); // 'photo' backenddeki dosya alanı
    formData.append("title", title); // Blog başlığı
    formData.append("content", content); // Blog içeriği

    try {
      // Tek bir API isteği ile hem fotoğraf hem de blog post'u gönderiliyor
      const response = await instance.post("/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast("Blog uploaded successfully", {
        icon: "🚀",
        position: "top-right",
      });
    } catch (error) {
      toast(error.response.data.message, {
        icon: "❌",
        position: "top-right",
      });
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile); // Dosyayı ayarla

    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    }
  };
  return (
    <div>
      <div className="flex gap-10">
        <label
          htmlFor="uploadFile1"
          className={`bg-white flex-1 text-gray-500 font-semibold text-base rounded h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]`}
          style={{
            backgroundImage: previewUrl ? `url(${previewUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 mb-2 fill-gray-500"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
              data-original="#000000"
            />
            <path
              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
              data-original="#000000"
            />
          </svg>
          Upload file
          <input
            type="file"
            id="uploadFile1"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <p className="text-xs font-medium text-gray-400 mt-2">
            PNG, JPG SVG, WEBP, and GIF are Allowed.
          </p>
        </label>
        <div className="flex-1 flex flex-col gap-5">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="border p-2 rounded-lg outline-none"
            placeholder="Title"
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="border p-2 rounded-lg outline-none min-h-36"
            placeholder="Content"
          />
        </div>
      </div>
      <div className={"p-5 flex justify-end"}>
        <Button onClick={handleSubmit}>Upload Blog</Button>
      </div>
    </div>
  );
};

export default CreateBlogPage;
