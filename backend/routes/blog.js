import express from "express";
import multer from "multer";
import Blog from "../models/blog.js";
import fs from "fs";

const router = express.Router();

// Eğer uploads klasörü yoksa oluştur
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Blog oluşturma ve fotoğraf yükleme route'u
router.post("/", upload.single("photo"), async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const file = req.file;

    if (!title || !content || !file) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Fotoğrafın yolu
    const imagePath = `/uploads/${file.filename}`;

    const blog = new Blog({
      title,
      content,
      createdBy: req.user._id,
      imagePath,
    });

    await blog.save();

    return res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
});

// Tüm blogları listeleme route'u
router.get("/", async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    return res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
