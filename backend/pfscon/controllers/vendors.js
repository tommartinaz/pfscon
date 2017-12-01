const knex = require('../db/knex');

module.exports = {
    getAllVendors: (req, res) => {
        knex('vendors')
            .select()
            .then(vendors => res.send(vendors));
    },

    getOneVendor: (req, res) => {
        knex('vendors')
            .select()
            .where('id', req.params.id)
            .then(vendor => res.send(vendor));
    }
}