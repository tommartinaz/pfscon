
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tables').del()
    .then(function () {
      // Inserts seed entries
      return knex('tables').insert([
        {table_num: 1, slot: 1},
        {table_num: 2, slot: 1},
        {table_num: 3, slot: 1},
        {table_num: 4, slot: 1},
        {table_num: 5, slot: 1},
        {table_num: 1, slot: 2},
        {table_num: 2, slot: 2},
        {table_num: 3, slot: 2},
        {table_num: 4, slot: 2},
        {table_num: 5, slot: 2},
        {table_num: 1, slot: 3},
        {table_num: 2, slot: 3},
        {table_num: 3, slot: 3},
        {table_num: 4, slot: 3},
        {table_num: 5, slot: 3},
      ]);
    });
};
