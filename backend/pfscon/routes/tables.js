var knex = require('../db/knex');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    knex.raw(`select t.slot, 
              t.start_time, 
              t.end_time, 
              t.table_num, 
              s.season,
              s.scenario_num,
              s.title,
              s.low_level,
              s.high_level,
              s.description
              from 
                (select * 
                    from tables_scenarios_m2m tm2m 
                    join tables on tables.id = tm2m.table_id) t
              join scenarios s on s.id = t.scenario_id 
              order by t.slot, s.id`)
        .then(data => res.send(data.rows));
});

router.get('/:id', (req, res) => {
    knex.raw(`select t.slot, 
              t.start_time, 
              t.end_time, 
              t.table_num, 
              s.season,
              s.scenario_num,
              s.title,
              s.low_level,
              s.high_level,
              s.description
              from 
                (select * 
                    from tables_scenarios_m2m tm2m 
                    join tables on tables.id = tm2m.table_id) t
              join scenarios s on s.id = t.scenario_id 
              where t.table_id = ${req.params.id}`)
        .then(data => res.send(data.rows));
});


module.exports = router;