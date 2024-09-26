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
    photos: {
      type: String,
    },
  },
  { timestamps: true }
);
