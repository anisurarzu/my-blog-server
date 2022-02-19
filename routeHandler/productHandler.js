const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const myProductSchema = require("../schemas/myProductSchema");

const Product = new mongoose.model("Product", myProductSchema);

// get all blogs

router.get("/myProduct", async (req, res) => {
  try {
    let product = await Product.find();
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});
// get single blogs by id
router.get("/myProduct/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});
// post api
router.post("/myProduct", async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(req.body);

  try {
    let product = await newProduct.save();
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});
// update blogs
router.put("/myProduct/:id", async (req, res) => {
  let productId = req.params.id;
  let updatedProduct = req.body;

  try {
    let product = await Product.findOneAndUpdate({ _id: productId }, updatedProduct, {
      upsert: true,
      new: true,
    });
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});
// delete blogs
router.delete("/myProduct/:id", async (req, res) => {
  let productId = req.params.id;

  try {
    let product = await Product.deleteOne({ _id: productId }).exec();
    if (product.deletedCount > 0) {
      res.send({ msg: "Product deleted successfully" });
    } else {
      res.status(500).send({ msg: "something error" });
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
