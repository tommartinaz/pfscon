exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('slots').del()
      .then(function () {
        // Inserts seed entries
        return knex('slots').insert([
          {slot_num: 1, start_time: '0800', end_time: '1200'},
          {slot_num: 2, start_time: '1300', end_time: '1700'},
          {slot_num: 3, start_time: '1800', end_time: '2200'},
        ]);
      });
  };
  