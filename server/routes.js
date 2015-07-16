/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var Sequelize = require('sequelize');

module.exports = function(app, db) {

  var Counter = db.define('counter', {});
  app.get('/', function(req, res) {
    // res.send("hello");
    // console.log("hello");
    // res.redirect('http://www.google.com');
    Counter.create({}).then(function(counter) {
      res.send({message: "hi", id: counter.get('id')});
    });
  });

  // Insert routes below
  // app.use('/api/things', require('./api/thing'));
  
  // // All undefined asset or api routes should return a 404
  // app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  //  .get(errors[404]);

  // // All other routes should redirect to the index.html
  // app.route('/*')
  //   .get(function(req, res) {
  //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  //   });
};
