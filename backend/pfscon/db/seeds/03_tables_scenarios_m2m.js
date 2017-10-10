
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tables_scenarios_m2m').del()
    .then(function () {
      // Inserts seed entries
      return knex('tables_scenarios_m2m').insert([
        {table_id: 1, scenario_id: 1},
        {table_id: 2, scenario_id: 2},
        {table_id: 3, scenario_id: 3},
        {table_id: 4, scenario_id: 7},
        {table_id: 5, scenario_id: 11},
        {table_id: 6, scenario_id: 8},
        {table_id: 7, scenario_id: 15},
        {table_id: 8, scenario_id: 13},
        {table_id: 9, scenario_id: 22},
        {table_id: 10, scenario_id: 26},
      ]);
    });
};
