const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());

app.get("/prospects", async (req, res) => {
  try {
    const prospects = await db.select().from("prospects");
    res.json({ data: prospects });
  } catch (err) {
    console.log(err);
  }
});

app.get("/games", async (req, res) => {
  try {
    const games = await db.select().from("games");

    res.json({ data: games });
  } catch (err) {
    console.log(err);
  }
});

app.get("*", (req, res) => {
  res.send("404 Not Found");
});

const port = process.env.PORT || 5000;
app.listen(port);
// eslint-disable-next-line no-console
console.log(`Server listening on port ${port}`);

exports = module.exports = app;
