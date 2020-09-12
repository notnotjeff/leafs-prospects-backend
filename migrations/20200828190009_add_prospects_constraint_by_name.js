
exports.up = function(knex) {
  return knex.schema.alterTable('prospects', function(t) {
    t.unique(['last_name', 'first_name', 'draft_year'])
  })
};

exports.down = function(knex) {
  knex.schema.table('prospects', function (table) {
    table.dropUnique(['last_name', 'first_name', 'draft_year'])
  })
};
