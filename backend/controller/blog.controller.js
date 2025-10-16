/*
* ! controller
addBlog --> /add
getBlogs --> /all
getBlog --> /single/:id
updateBlog --> /edit:id
deleteBlog --> /delete/:id
*/

import blogData from "../Module/blog.model.js";

export const addBlog = async (req, res) => {
  const { title, description, createdBy } = req.body;
  let newBlog = await blogData.create({ title, description, createdBy });
  res
    .status(201)
    .json({ success: true, message: "Blog added successfully", newBlog });
};

export const getBlogs = async (req, res) => {
  let blogs = await blogData.find();

  if (blogs.length === 0)
    return res.status(200).json({ success: false, message: "No users Found" });

  res.status(200).json({
    success: true,
    noOfBlogs: blogs.length,
    message: "users fetched",
    blogs,
  });
};

export const getBlog = async (req, res) => {
  console.log(req.params);
  let blogID = req.params.id;
  let blogs = await blogData.findById(blogID);

  if (!blogs)
    return res.status(404).json({ success: false, message: "No Blog Found" });
  res.status(200).json({ success: true, message: "Blogs found", blogs });
};

export const updateBlog = async (req, res) => {
  let blogID = req.params.id;

  let existIngBlog = await blogData.findById(blogID);
  if (!existIngBlog)
    return res.status(200).json({ success: false, message: "Blog Not Found" });

  let blog = await blogData.updateOne({ _id: blogID }, { $set: req.body });
  res.status(200).json({ success: true, message: "updated", blog });
};

export const deleteBlog = async (req, res) => {
  let blogID = req.params.id;

  let deleteBlog = await blogData.deleteOne({ _id: blogID });

  res.status(200).json({ success: true, message: "Blog deleted" }, deleteBlog);
};
