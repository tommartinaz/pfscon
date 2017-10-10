exports.up = function(knex, Promise) {
    return knex.schema.createTable('tables_scenarios_m2m', table => {
        table.increments();
        table.integer('table_id');
        table.integer('scenario_id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tables_scenarios_m2m');
};
