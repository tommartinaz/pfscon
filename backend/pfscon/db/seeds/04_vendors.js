
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vendors').del()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {name: 'Paizo', url: 'http://www.paizo.com'},
        {name: 'Wolf Lair', url: 'http://www.wolflair.com/'},
        {name: 'Game Depot', url: 'http://www.gamedepot.com'},
        {name: 'Frog God Games', url: 'http://www.talesofthefroggod.com/'},
        {name: 'Miniature Market', url: 'https://www.miniaturemarket.com/'},
        {name: 'Dapper Devil', url: 'http://dapperdevil.com/'},
        {name: 'Imperial Outpost Games', url: 'http://imperialoutpostgames.com/'}
      ]);
    });
};
