var knex = require('../db/knex');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    knex('vendors')
        .select()
        .then(vendors => res.send(vendors));
});

router.get('/:id', (req, res) => {
    knex('vendors')
        .select()
        .where('id', req.params.id)
        .then(vendor => res.send(vendor));
});

module.exports = router;