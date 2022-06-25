const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.URL_BASE;
const app = express();
app.use(cors());
app.use(express.json())

app.get("/getUserId/:userId", (req, res) => {
    console.log(req.params);
  res.json("estas pegando como un campeon");
});
app.get("/", (req, res) => {
    console.log(req.params);
  res.json("estas pegando como un campeon");
});
app.post("/create-user", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
  console.log(`escuchando desde el puerto ${port}`);
});
