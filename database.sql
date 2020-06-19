CREATE DATABASE leafs_prospects;

CREATE TABLE prospects(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  league VARCHAR(30),
  position VARCHAR(30),
  shoots VARCHAR(30),
  age DECIMAL,
  draft_year INT,
  draft_round INT,
  draft_pick INT,
  games_played INT,
  goals INT,
  assists INT,
  points INT,
  shots INT,
  goals_pg DECIMAL,
  assists_pg DECIMAL,
  points_pg DECIMAL,
  shots_pg DECIMAL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  date DATE,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  league VARCHAR(30),
  shots INT,
  goals INT,
  assists INT,
  points INT,
  penalty_minutes INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);