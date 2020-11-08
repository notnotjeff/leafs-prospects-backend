exports.up = function(knex) {
  return knex.schema.alterTable('games', function(t) {
    t.unique(['last_name', 'first_name', 'date'])
  })
};

exports.down = function(knex) {
  knex.schema.table('games', function (t) {
    t.dropUnique(['last_name', 'first_name', 'date'])
  })
};

