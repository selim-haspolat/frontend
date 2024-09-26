import mongoose from "mongoose";

const { Schema } = mongoose;

const Blog = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imagePath: {
      type: String,
    },
  },
  { timestamps: true }
);
