import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, this is your GG backend!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
