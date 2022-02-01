const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  title: String,
});

const myBlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = myBlogSchema;
