exports.up = function(knex, Promise) {
    return knex.schema.createTable('slots', table => {
        table.increments();
        table.integer('slot_num').notNullable();
        table.datetime('start_time');
        table.datetime('end_time');
        table.integer('table_num');
        table.integer('scenario_num');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('slots');
};
