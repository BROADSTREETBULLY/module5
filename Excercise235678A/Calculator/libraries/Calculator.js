const logging = require("./logging");
class Calculator {
  constructor() {
    this.logger = new logging();
  }

  add(num1, num2) {
    const value = num1 + num2;
    this.logger.log(value);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.logger.log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.logger.log(value);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.logger.log(value);
    return value;
  }
}

module.exports = Calculator;
