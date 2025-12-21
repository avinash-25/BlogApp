import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      email: email,
      type: String,
      required: true,
      unique: true,
    },
    Author: {   
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema);
export default blogModel;