import express from "express";
import multer from "multer";
import Blog from "../models/blog.js";
import fs from "fs";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

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
    cb(null, `${Date.now()}`);
  },
});

// File filter: Sadece resim dosyalarını kabul et
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(createError(400, "Only .png, .jpg and .jpeg format allowed!"), false);
  }
};

// Multer ayarları
const upload = multer({
  fileFilter,
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Max 5 MB
  },
});

router.post("/", verifyAdmin, upload.single("photo"), async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const file = req.file;

    const imagePath = `/uploads/${file.filename}`;

    const blog = new Blog({
      title,
      content,
      createdBy: 1,
      // createdBy: req.user._id,
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

router.get("/:id", async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(createError(404, "Blog not found"));
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
