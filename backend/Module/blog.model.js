import mongoose from "mongoose";

/*
* title
* dewscription
* createdBy

* ! controller
addBlog --> /add
getBlogs --> /all
getBlog --> /single/:id
updateBlog --> /edit:id
deleteBlog --> /delete/:id
 */

//! 2) define schema
let blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    createdBy: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
  }
);

//! 3) create a collection/model
let blogData = mongoose.model("Blogs", blogSchema);
//? users (lowercase + plural)

//! 4) EXPORT
export default blogData;
