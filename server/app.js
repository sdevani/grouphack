/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
// var dbConfig = require('../config/config.json')[process.env.NODE_ENV];
// console.log(dbConfig);

// Setup database
var Sequelize = require('sequelize');
var database;
if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  database = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  })
} else {
  // the application is executed on the local machine ... use mysql
  database = new Sequelize(config.database.dbName, config.database.username, config.database.password, {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
  });
}

// Setup server
var app = express();
require('./routes')(app, database);
require('./config/express')(app);
var server = require('http').createServer(app);

// Start server
var port = process.env.PORT;
server.listen(port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// Expose app
exports = module.exports = app;
