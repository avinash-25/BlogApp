import { Router } from "express";
import { addBlog, deleteBlog, getAllBlogs, getBlog } from "../controllers/blog.controller.js";

const router = Router();


router.post("/add", addBlog)

router.get("/getBlog/:id", getBlog);

router.get("/all", getAllBlogs);

router.delete("/del/:id", deleteBlog);

export default router;