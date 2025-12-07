import { Router } from "express";
import { addBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/blog.controller.js";

const router = Router();


router.post("/add", addBlog)

router.get("/getBlog/:id", getBlog);

router.get("/all", getAllBlogs);

router.delete("/del/:id", deleteBlog);

router.patch("/update/:id", updateBlog);

export default router;