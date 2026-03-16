const express = require("express");
const { add } = require("./utils");
const app = express();
app.get("/sum", (req, res) => {
    const result = add(5,3);
    res.send(`The sum of 5 and 3 is ${result}`);
});