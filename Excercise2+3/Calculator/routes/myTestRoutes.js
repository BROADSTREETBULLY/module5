const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/test', (req, res) => {
    res.status(200).json({
        firstName: "Hannah",
        Location: "Geelong",
    });
});

module.exports = router;
