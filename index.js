const express = require("express");
const mongoose = require("mongoose");
const blogHandler = require("./routeHandler/blogHandler");

const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

// database connection with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g7zap.mongodb.net/myBlog?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

// Application routes
app.use("/api", blogHandler);

// root api
app.get("/", (req, res) => {
  res.send("My Blog Server is running");
});

app.listen(port, () => {
  console.log("my blog running on port", port);
});
