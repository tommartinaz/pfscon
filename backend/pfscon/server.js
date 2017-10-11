var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');
var scenarios = require('./routes/scenarios');
var tables = require('./routes/tables');
var vendors = require('./routes/vendors');
var slots = require('./routes/slots');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index', { title: 'DBConfig' });
})

app.use('/scenarios', scenarios);
app.use('/tables', tables);
app.use('/vendors', vendors);
app.use('/slots', slots);

app.listen(port, function() {
console.log("listening on port: ", port);
})
