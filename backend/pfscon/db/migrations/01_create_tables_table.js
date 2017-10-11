exports.up = function(knex, Promise) {
    return knex.schema.createTable('tables', table => {
        table.increments();
        table.integer('table_num').notNullable();
        table.integer('slot');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tables');
};
