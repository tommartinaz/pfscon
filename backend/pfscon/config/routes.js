const scenarios = require('../controllers/scenarios');
const slots = require('../controllers/slots');
const tables = require('../controllers/tables');
const vendors = require('../controllers/vendors');

module.exports = (app) => {
    app.get('/scenarios', scenarios.getAllScenarios);
    app.get('/scenarios/:id', scenarios.getOneScenario);

    app.get('/slots', slots.getAllSlots);
    
    app.get('/tables', tables.getAllTables);
    app.get('/tables/:id', tables.getOneTable);

    app.get('/vendors', vendors.getAllVendors);
    app.get('/vendors/:id', vendors.getOneVendor);
}