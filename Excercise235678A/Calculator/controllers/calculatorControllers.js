const Calculator = require("../libraries/Calculator");
let calcObject = new Calculator();


const addNumbers = (req, res) => {
  // if (isNaN(parseInt(req.query.num1))) {
  //   res.status(500).json({ error: `num1 is not a number` });
  //   return;
  // }

  // if (isNaN(parseInt(req.query.num2))) {
  //   res.status(500).json({ error: `num2 is not a number` });
  //   return;
  // }

  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = calcObject.add(num1, num2);

  res.json({
    data: result,
  });

  res.status(200);
};

const subtractNumbers = (req, res) => {
  // if (isNaN(parseInt(req.query.num1))) {
  //   res.status(500).json({ error: `num1 is not a number` });
  //   return;
  // }

  // if (isNaN(parseInt(req.query.num2))) {
  //   res.status(500).json({ error: `num2 is not a number` });
  //   return;
  // }
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

 let result = calcObject.subtract(num1, num2)

  res.json({
    data: result,
  });

  res.status(200);
};

const divideNumbers = (req, res) => {
  // if (isNaN(parseInt(req.query.num1))) {
  //   res.status(500).json({ error: `num1 is not a number` });
  //   return;
  // }

  // if (isNaN(parseInt(req.query.num2))) {
  //   res.status(500).json({ error: `num2 is not a number` });
  //   return;
  // }
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = calcObject.divide(num1, num2)

  res.json({
    data: result,
  });

  res.status(200);
};

const multiplyNumbers = (req, res) => {
  // if (isNaN(parseInt(req.query.num1))) {
  //   res.status(500).json({ error: `num1 is not a number` });
  //   return;
  // }

  // if (isNaN(parseInt(req.query.num2))) {
  //   res.status(500).json({ error: `num2 is not a number` });
  //   return;
  // }
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = calcObject.multiply(num1, num2)

  res.json({
    data: result,
  });

  res.status(200);
};

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
};
