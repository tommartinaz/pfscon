
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vendors').del()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {name: 'Paizo', url: 'http://www.paizo.com'},
        {name: 'Wolf Lair', url: 'http://www.wolflair.com/'},
      ]);
    });
};
