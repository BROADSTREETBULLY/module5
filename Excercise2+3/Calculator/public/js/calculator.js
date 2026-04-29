document.getElementById("equals").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const operator = document.getElementById("calc").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent = "ERROR";
    return;
  }


    let url = "";

    if (operator === "add") {
      url =
        "http://localhost:3100/calculator/add?num1=" + num1 + "&num2=" + num2;
    } else if (operator === "subtract") {
      url =
        "http://localhost:3100/calculator/subtract?num1=" +
        num1 +
        "&num2=" +
        num2;
    } else if (operator === "divide") {
      url =
        "http://localhost:3100/calculator/divide?num1=" +
        num1 +
        "&num2=" +
        num2;
    } else if (operator === "multiply") {
      url =
        "http://localhost:3100/calculator/multiply?num1=" +
        num1 +
        "&num2=" +
        num2;
    } else {
      document.getElementById("result").textContent = "ERROR";
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        document.getElementById("result").textContent = json.data;
      });
  });

