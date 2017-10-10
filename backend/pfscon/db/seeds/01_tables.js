
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tables').del()
    .then(function () {
      // Inserts seed entries
      return knex('tables').insert([
        {table_num: 1, slot: 1, date: '10/12/17', start_time: '0900', end_time: '1300'},
        {table_num: 2, slot: 1, date: '10/12/17', start_time: '0900', end_time: '1300'},
        {table_num: 3, slot: 1, date: '10/12/17', start_time: '0900', end_time: '1300'},
        {table_num: 4, slot: 1, date: '10/12/17', start_time: '0900', end_time: '1300'},
        {table_num: 5, slot: 1, date: '10/12/17', start_time: '0900', end_time: '1300'},
        {table_num: 1, slot: 2, date: '10/12/17', start_time: '1600', end_time: '2000'},
        {table_num: 2, slot: 2, date: '10/12/17', start_time: '1600', end_time: '2000'},
        {table_num: 3, slot: 2, date: '10/12/17', start_time: '1600', end_time: '2000'},
        {table_num: 4, slot: 2, date: '10/12/17', start_time: '1600', end_time: '2000'},
        {table_num: 5, slot: 2, date: '10/12/17', start_time: '1600', end_time: '2000'},
      ]);
    });
};
