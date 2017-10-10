exports.up = function(knex, Promise) {
    return knex.schema.createTable('tables', table => {
        table.increments();
        table.integer('table_num').notNullable();
        table.integer('slot');
        table.date('date');
        table.time('start_time');
        table.time('end_time');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tables');
};
