const express = require("express");
const router = express.Router();
const calculatorControllers = require("../controllers/calculatorControllers")

router.get("/add", (req, res) => {
    calculatorControllers.addNumbers(req, res)
});

router.get("/subtract", (req, res) => {
    calculatorControllers.subtractNumbers(req, res)
});

router.get("/divide", (req, res) => {
    calculatorControllers.divideNumbers(req, res)
});

router.get("/multiply", (req, res) => {
    calculatorControllers.multiplyNumbers(req, res)
});

module.exports = router;
