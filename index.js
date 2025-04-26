const { config } = require("dotenv");
const express = require("express");

config();
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "Health Ok!" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER OPEN");
});
