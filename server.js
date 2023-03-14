const express = require("express");

const app = express();

app.get("/add", (req, res) => {
    const {x, y} = req.query;
    const sum = parseInt(x) + parseInt(y);
    res.send(200, sum);
});

app.get("/subtract", (req, res) => {
    const {x, y} = req.query;
    const difference = parseInt(x) - parseInt(y);
    res.send(200, difference);
});

app.get("/multiply", (req, res) => {
    const {x, y} = req.query;
    const product = parseInt(x) * parseInt(y);
    res.send(200, product);
});

app.get("/", (req, res) => {
    res.send(200, "Hello World, this is becoming mmuch more fun!");
});

app.listen(8000, (req, res) => {
    console.log("Server connected on port 8000");
});
