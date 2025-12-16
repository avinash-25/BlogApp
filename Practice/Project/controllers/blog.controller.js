import blogModel from "../models/blog.model.js";
import asyncHander from 'express-async-handler';

//^ Add blog

export const addBlog = asyncHander(async (req, res) => {
        const { Author, title, description } = req.body;

    if (!Author || !title || !description) {
        res.status(400);
        throw new Error("Please provide all required fields");
    }

    let newBlog = await blogModel.create({
        Author,
        title,
        description,
    });

    res.status(201).json({
        success: true,
        message: "Blog added successfully",
        newBlog
    });
});

//^ Get Single Blog (By ID)

export const getBlog = asyncHander(async (req, res) => {
    const id = req.params.id;
    
    if (!id) {
        res.status(400);
        throw new Error("Blog ID is required");
    }
    const blog = await blogModel.findById(id);

    if (!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }
    res.status(200).json({
        success: true,
        blog
    });
});

//^ Get All Blogs

export const getAllBlogs = asyncHander(async (req, res) => {
    const blogs = await blogModel.find({});
    
    res.status(200).json({
        success: true,
        count: blogs.length,
        blogs
    });
    console.log("All blogs Fetched Succuessfully")
});


//^ Delete blog (By Id)

export const deleteBlog = asyncHander(async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(400);
        throw new Error("Blog not Found");
    }

    const del = await blogModel.findOneAndDelete(id);

    if (!del) {
        res.status(400);
        throw new Error("Blog not Found");
    }

    res.status(200).json({
        success: true,
        message: "Blog Deleted Successfully"
    })
})


//^ Update blog ( title, description)

export const updateBlog = asyncHander(async (req, res) => {
    const id = req.params.id;

    if (!id) res.status(400).json({message: "Blog id is required"})

    const { title, description } = req.body;
    
    const updatedBlog = await blogModel.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
    );

    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({
        message: "Blog updated successfully",
        blog: updateBlog
    })
})
