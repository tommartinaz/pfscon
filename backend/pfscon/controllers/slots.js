const knex = require('../db/knex');

module.exports = {
    getAllSlots: (req, res) => {
        knex('slots')
            .select()
            .then(data => res.send(data));
    }
}