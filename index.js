const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 9000;

app.listen(PORT, error => {
    if(!error) console.log("Application is listening on port ", PORT);
    else console.log("ERROR: ", error);
})

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the root URL...");
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).json({message: "I'll take that..."});
})

module.exports = app;