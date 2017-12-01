const knex = require('../db/knex');

module.exports = {
    getAllScenarios: (req, res) => {
        knex('scenarios')
            .select()
            .orderBy('id')
            .then(scenarios => res.send(scenarios));
    },

    getOneScenario: (req, res) => {
        knex('scenarios')
            .select()
            .where('id', req.params.id)
            .then(scenario => res.send(scenario));
    }
}