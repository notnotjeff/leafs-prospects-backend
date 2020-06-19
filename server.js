const express = require("express");
// const path = require("path");
const cors = require("cors")
const app = express();
const pool = require("./db");

// app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(express.json());

app.post("/prospects", async (req, res) => {
  const {
    first_name,
    last_name,
    league,
    position,
    shoots,
    age,
    draft_year,
    draft_round,
    draft_pick,
    games_played,
    goals,
    assists,
    points,
    shots,
    goals_pg,
    assists_pg,
    points_pg,
    shots_pg,
  } = req.body;

  try {
    const { rows: newProspect } = await pool.query(`
      INSERT INTO prospects
        (
          first_name,
          last_name,
          league,
          position,
          shoots,
          age,
          draft_year,
          draft_round,
          draft_pick,
          games_played,
          goals,
          assists,
          points,
          shots,
          goals_pg,
          assists_pg,
          points_pg,
          shots_pg,
          created_at,
          updated_at
        )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, NOW(), NOW())
      RETURNING *
    `,
    [
      first_name,
      last_name,
      league,
      position,
      shoots,
      age,
      draft_year,
      draft_round,
      draft_pick,
      games_played,
      goals,
      assists,
      points,
      shots,
      goals_pg,
      assists_pg,
      points_pg,
      shots_pg,
    ]);

    res.json(newProspect);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/prospects", async (req, res) => {
  try {
    const { rows: prospects } = await pool.query(`SELECT * FROM prospects`);
    res.json({ data: prospects });
  } catch (err) {
    console.log(err);
  }
});

app.post("/games", async (req, res) => {
  const {
    date,
    first_name,
    last_name,
    league,
    shots,
    goals,
    assists,
    points,
    penalty_minutes,
  } = req.body;

  try {
    const { rows: game } = await pool.query(`
      INSERT INTO games (date, first_name, last_name, league, shots, goals, assists, points, penalty_minutes, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW()) RETURNING *
    `,
    [
      date,
      first_name,
      last_name,
      league,
      shots,
      goals,
      assists,
      points,
      penalty_minutes,
    ]);

    res.json({ data: game });
  } catch (err) {
    console.log(err);
  }
});

app.get("/games", async (req, res) => {
  try {
    const { rows: games } = await pool.query(`SELECT * FROM games WHERE date >= CURRENT_DATE - 1`);

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
