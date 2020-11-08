exports.up = function (knex) {
  return knex.schema.createTable("games", function (table) {
    table.increments("id");
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("league", 255).notNullable();
    table.string("date", 255).notNullable();
    table.datetime("date_time");
    table.integer("goals");
    table.integer("assists");
    table.integer("points");
    table.integer("shots");
    table.integer("penalty_minutes");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
