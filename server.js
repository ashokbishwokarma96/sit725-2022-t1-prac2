var express = require("express");
var app = express();
var port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App listening to:${port}`);
});

const addNumbers = (num1, num2) => {
  var numberOne = parseInt(num1);
  var numberTwo = parseInt(num2);
  var result = numberOne + numberTwo;
  return result;
};
app.get("/addTwoNumbers", (req, res) => {
  var numOne = req.query.numOne;
  var numTwo = req.query.numTwo;
  var result = addNumbers(numOne, numTwo);
  res.json({ statusCode: 200, data: result, message: "success" });
});
