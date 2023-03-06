const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(200, "Hello World");
});

app.listen(8000, (req, res) => {
    console.log("Server connected on port 8000");
});
