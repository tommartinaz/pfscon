const knex = require('../db/knex');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    knex('slots')
        .select()
        .then(data => res.send(data));
});

module.exports = router;