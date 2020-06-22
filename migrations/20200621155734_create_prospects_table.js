exports.up = function (knex) {
  return knex.schema.createTable("prospects", function (table) {
    table.increments("id");
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("league", 255).notNullable();
    table.string("ep_url", 255).notNullable();
    table.string("statline_url", 255).notNullable();
    table.string("game_statline_url", 255);
    table.string("league_id", 255);
    table.string("position", 255).notNullable();
    table.string("shoots", 255).notNullable();
    table.string("dob", 255).notNullable();
    table.integer("draft_year");
    table.integer("draft_round");
    table.integer("draft_pick");
    table.decimal("age");
    table.integer("games_played");
    table.integer("goals");
    table.integer("assists");
    table.integer("points");
    table.integer("shots");
    table.decimal("goals_pg");
    table.decimal("assists_pg");
    table.decimal("points_pg");
    table.decimal("shots_pg");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("prospects");
};
