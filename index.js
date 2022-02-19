const express = require("express");
const mongoose = require("mongoose");
const productHandler = require("./routeHandler/productHandler");

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
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g7zap.mongodb.net/myProduct?retryWrites=true&w=majority`,
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
app.use("/api", productHandler);

// root api
app.get("/", (req, res) => {
  res.send("My product Server is running");
});

app.listen(port, () => {
  console.log("my product running on port", port);
});
