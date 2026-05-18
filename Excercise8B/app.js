const express = require("express");
const cors = require("cors");
const app = express();

const productRoutes = require("./routes/ProductRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/products", productRoutes);

module.exports = app;