const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const myProductSchema = mongoose.Schema({
  title: {
    type: String,
    enum: ["Books", "Electronics"],
    required: true,
    name: String,
    required: true,
  },
  order_type: {
    enum: ["Buy now", "pre-order"],
  },
  category: {
    type: String,
  },
  sub_category: {
    type: String,
  },
  leaf_category: {
    type: String,
  },
  sub_title: {
    type: String,
    options: true,
  },
  author_name: [
    {
      author: ObjectId(),
      title: String,
      type: String,
      body: String,
    },
  ],
  translator_name: [
    {
      translator: ObjectId(),
      title: String,
      type: String,
      body: String,
    },
  ],
  editor_name: [
    {
      editor: ObjectId(),
      title: String,
      type: String,
      body: String,
    },
  ],
  language: [
    {
      type: String,
    },
  ],
  binding: [
    {
      type: String,
    },
  ],
  price: {
    type: String,
  },
  discount: {
    type: String,
  },
  discount_amount: {
    type: String,
  },
  isbn: {
    type: String,
  },
  pon: {
    type: String,
  },
  weight: {
    type: String,
    options: true,
  },
  cover_image: {
    type: String,
    required: true,
  },
  look_inside: {
    type: String,
    index: true,
  },
  stock_manage: {
    type: String,
  },
  product_number: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    index: true,
  },
  createdby: {
    type: String,
  },
  createdat: {
    type: String,
  },
});

module.exports = myProductSchema;
