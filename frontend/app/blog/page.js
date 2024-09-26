"use client";

import Button from "@/components/Button";
import axios from "axios";
import { useState } from "react";

const BlogPage = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // Önizleme URL'si

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Lütfen bir dosya seçin");
      return;
    }

    const formData = new FormData();
    formData.append("photo", file); // 'photo' backenddeki isimle eşleşmeli

    try {
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      console.log(response.data.filePath); // Yüklenen dosya yolunu al
    } catch (error) {
      console.error("Dosya yükleme hatası:", error);
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
      <label
        htmlFor="uploadFile1"
        className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
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

      {previewUrl && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={previewUrl}
            alt="Resim Önizlemesi"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      )}
      <img src="http://localhost:8080/uploads/1727359439359-240047192_882706022338576_8122133245121886458_n.jpg" />
      <Button onClick={handleSubmit} className={"m-10"}>
        Upload Foto
      </Button>
    </div>
  );
};

export default BlogPage;
