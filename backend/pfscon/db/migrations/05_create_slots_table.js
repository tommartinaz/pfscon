exports.up = function(knex, Promise) {
    return knex.schema.createTable('slots', table => {
        table.increments();
        table.integer('slot_num').notNullable();
        table.time('start_time');
        table.time('end_time');
        table.integer('table_num');
        table.integer('scenario_num');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('slots');
};
