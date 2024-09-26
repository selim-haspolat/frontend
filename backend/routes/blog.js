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

