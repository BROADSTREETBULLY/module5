const express = require("express");
const cors = require("cors");
const router1 = require("./routes/myTestRoutes");
const calculatorRoutes = require('./routes/calculatorRoutes')

const app = express();

app.use(cors())
app.use("/", router1);
app.use('/calculator', calculatorRoutes);



const port = 3100


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

