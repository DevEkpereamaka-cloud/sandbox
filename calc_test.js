"use strict";

const { stdout } = require("process");

const readline = require("readline").createInterface({
  input: stdin,
  output: stdout,
});

const calculator = () => {
  readline.question("PICK FIRST NUMBER:", (num1) => {
    readline.question("PICK A SIGN (+, -, *, /): ", (op) => {
      readline.question("PICK A SECOND NUMBER: ", num2);
    });
  });
};
