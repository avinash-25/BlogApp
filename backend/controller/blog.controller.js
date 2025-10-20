import blogData from "../Module/blog.model.js";
import expressAsyncHandler from "express-async-handler";

//! add blog

export const addBlog = expressAsyncHandler(async (req, res, next) => {
  // try {
  const { title, description, createdby } = req.body;
  let newBlog = await blogData.create({ title, description, createdby });

  res.status(201).json({
    success: true,
    message: "Blog added successfully",
    newBlog,
  });
  // } catch (error) {
  //   next(error);
  // }
});

//! Get all blogs

export const getBlogs = expressAsyncHandler(async (req, res, next) => {
  // try {
  let blogs = await blogData.find();

  if (blogs.length === 0)
    return res.status(200).json({ success: false, message: "No users Found" });

  res.status(200).json({
    success: true,
    noOfBlogs: blogs.length,
    message: "users fetched",
    blogs,
  });
  // } catch (error) {
  //   next(error);
  // }
});

//! Get one blog

export const getBlog = expressAsyncHandler(async (req, res, next) => {
  // try {
  console.log(req.params);
  let blogID = req.params.id;
  let blogs = await blogData.findById(blogID);

  if (!blogs)
    return res.status(404).json({ success: false, message: "No Blog Found" });
  res.status(200).json({ success: true, message: "Blogs found", blogs });
  // } catch (error) {
  //   next(error);
  // }
});

//! Update blog

export const updateBlog = expressAsyncHandler(async (req, res, next) => {
  // try {
  let blogID = req.params.id;

  let existIngBlog = await blogData.findById(blogID);
  if (!existIngBlog)
    return res.status(200).json({ success: false, message: "Blog Not Found" });

  let blog = await blogData.updateOne({ _id: blogID }, { $set: req.body });
  res.status(200).json({ success: true, message: "updated", blog });
  // } catch (error) {
  //   next(error);
  // }
});

//! delete blog

export const deleteBlog = expressAsyncHandler(async (req, res, next) => {
  // try {
  let blogID = req.params.id;

  let deleteBlog = await blogData.deleteOne({ _id: blogID });

  res.status(200).json({ success: true, message: "Blog deleted" }, deleteBlog);
  // } catch (error) {
  //   next(error);
  // }
});

//! express-async-handler :
/**
 * Function wrapper only works for async functions and after using this no need to write try-catch because
 * error object will be passed on to global error middleware automatically
 */
