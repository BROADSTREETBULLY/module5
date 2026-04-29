const express = require("express")

const router = express.Router();

router.get("/add", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 + num2;

    res.json({
        data: result,
    })

    res.status(200)
});

router.get("/subtract", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 - num2;

    res.json({
        data: result,
    })
    
    res.status(200)
});

router.get("/divide", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 / num2;

    res.json({
        data: result,
    })
    
    res.status(200)
});

router.get("/multiply", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 * num2;

    res.json({
        data: result,
    })
    
    res.status(200)
});

module.exports = router;