import { Router } from "express";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controller/blog.controller.js";

let router = Router();

router.post("/add", addBlog);
router.get("/all", getBlogs);

router.get("/one/:id", getBlog);

router.patch("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

export default router;
