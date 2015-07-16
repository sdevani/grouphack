'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/grouphack-dev'
  },

  database: {
    url: 'localhost:5432',
    dbName: 'grouphack-dev',
    username: undefined,
    password: undefined
  },

  seedDB: true
};
