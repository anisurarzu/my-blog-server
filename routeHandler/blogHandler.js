const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const myBlogSchema = require("../schemas/myBlogSchema");

const Blog = new mongoose.model("Blog", myBlogSchema);

// get all blogs

router.get("/myBlog", async (req, res) => {
  try {
    let blog = await Blog.find();
    res.send(blog);
  } catch (err) {
    res.send(err);
  }
});
// get single blogs by id
router.get("/myBlog/:id", async (req, res) => {
  try {
    let blog = await Blog.findOne({ _id: req.params.id });
    res.send(blog);
  } catch (err) {
    res.send(err);
  }
});
// post api
router.post("/myBlog", async (req, res) => {
  const newBlog = new Blog(req.body);
  console.log(req.body);

  try {
    let blog = await newBlog.save();
    res.send(blog);
  } catch (err) {
    res.send(err);
  }
});
// update blogs
router.put("/myBlog/:id", async (req, res) => {
  let blogId = req.params.id;
  let updatedBlog = req.body;

  try {
    let blog = await Blog.findOneAndUpdate({ _id: blogId }, updatedBlog, {
      upsert: true,
      new: true,
    });
    res.send(blog);
  } catch (err) {
    res.send(err);
  }
});
// delete blogs
router.delete("/myBlog/:id", async (req, res) => {
  let blogId = req.params.id;

  try {
    let blog = await Blog.deleteOne({ _id: blogId }).exec();
    if (blog.deletedCount > 0) {
      res.send({ msg: "Product deleted successfully" });
    } else {
      res.status(500).send({ msg: "something error" });
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
