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
var database = new Sequelize(config.database.dbName, config.database.username, config.database.password, {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
});

// Setup server
var app = express();
require('./routes')(app, database);
require('./config/express')(app);
var server = require('http').createServer(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
