import { Router } from "express";
import { addBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/blog.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router();


router.post("/add", authentication, addBlog)

router.get("/getBlog/:id", getBlog);

router.get("/all", getAllBlogs);

router.delete("/del/:id", deleteBlog);

router.patch("/update/:id", authentication, updateBlog);

export default router;