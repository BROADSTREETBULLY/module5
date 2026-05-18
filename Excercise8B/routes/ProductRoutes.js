const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", (req, res) => {
  productController.getAll(req, res);
});

router.get("/categories", (req, res) => {
  productController.getCategories(req, res);
});

router.get("/category/:category", (req, res) => {
  productController.getByCategory(req, res);
});

module.exports = router;
