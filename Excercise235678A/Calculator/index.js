const app = require("./app");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3100;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
