const { config } = require("dotenv");
const express = require("express");

config();
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  return res.status(200).json({ message: "Health Ok!" });
});
app.get("/api/home", (req, res) => {
  return res.send("<h1>WELCOME TO PRODUCTION</h1");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("SERVER OPEN");
});
