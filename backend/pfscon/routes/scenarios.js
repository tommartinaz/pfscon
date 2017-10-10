var knex = require('../db/knex');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    knex('scenarios')
        .select()
        .then(scenarios => res.send(scenarios));
});

router.get('/:id', (req, res) => {
    knex('scenarios')
        .select()
        .where('id', req.params.id)
        .then(scenario => res.send(scenario));
});

module.exports = router;