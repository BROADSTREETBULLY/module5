const express = require("express");
const cors = require("cors");
const app = express();

const calculatorRoutes = require("./routes/calculatorRoutes");
app.use(cors())
app.use(express.json());
app.use("/calculator", calculatorRoutes);

module.exports = app;
