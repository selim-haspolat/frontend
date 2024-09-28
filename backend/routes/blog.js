import express from "express";
import Blog from "../models/blog.js";

const router = express.Router();

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

router.post("/", async (req, res, next) => {
  try {
    const { title, content, photo } = req.body;

    if (!title || !content || !photo) {
      return res.status(400).json({
        success: false,
        message: "Lütfen tüm alanları doldurun",
      });
    }

    const blog = await Blog.create({
      title,
      content,
      photo,
    });

    return res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
});