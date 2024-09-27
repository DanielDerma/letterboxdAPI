require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const portApp = process.env.PORT || 4000;


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

const mongoURL = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=${dbName}`;


mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

app.listen(portApp, () => {
  console.log(`Server is running on port ${portApp}`);
});
