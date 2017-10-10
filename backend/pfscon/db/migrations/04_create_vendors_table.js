exports.up = function(knex, Promise) {
    return knex.schema.createTable('vendors', table => {
        table.increments();
        table.string('name');
        table.string('url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('vendors');
};
