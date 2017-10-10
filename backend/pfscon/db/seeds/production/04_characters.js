exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function() {
      // Inserts seed entries
      return knex('characters').insert([{
          "name": "Obat Al Badaz",
          "race_id": 7,
          "class_id": 2,
          "alignment_id": 6,
          "level": 15
        },
        {
          "name": "Chanos",
          "race_id": 7,
          "class_id": 8,
          "alignment_id": 1,
          "level": 14
        },
        {
          "name": "Barbazel",
          "race_id": 4,
          "class_id": 6,
          "alignment_id": 2,
          "level": 12
        },
        {
          "name": "Muiran",
          "race_id": 1,
          "class_id": 10,
          "alignment_id": 6,
          "level": 11
        },
        {
          "name": "Cort",
          "race_id": 6,
          "class_id": 4,
          "alignment_id": 3,
          "level": 6
        },
        {
          "name": "Garth",
          "race_id": 7,
          "class_id": 4,
          "alignment_id": 5,
          "level": 8
        },
        {
          "name": "Mathishard Forme",
          "race_id": 7,
          "class_id": 2,
          "alignment_id": 3,
          "level": 1
        },
        {
          "name": "Bombax",
          "race_id": 10,
          "class_id": 1,
          "alignment_id": 6,
          "level": 8
        },
        {
          "name": "Jakori Al Badaz",
          "race_id": 7,
          "class_id": 6,
          "alignment_id": 6,
          "level": 8
        },
        {
          "name": "Eina Lightfingers",
          "race_id": 9,
          "class_id": 7,
          "alignment_id": 5,
          "level": 8
        },
        {
          "name": "Lorric Gunderson",
          "race_id": 7,
          "class_id": 3,
          "alignment_id": 5,
          "level": 7
        },
        {
          "name": "Oolish",
          "race_id": 6,
          "class_id": 13,
          "alignment_id": 4,
          "level": 1
        },
        {
          "name": "Teeleh",
          "race_id": 8,
          "class_id": 3,
          "alignment_id": 4,
          "level": 5
        },
        {
          "name": "Arta Myrdhyn",
          "race_id": 7,
          "class_id": 12,
          "alignment_id": 2,
          "level": 5
        }
      ]);
    });
};
