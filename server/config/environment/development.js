'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/grouphack-dev'
  },

  database: {
    url: 'postgresql://localhost:5432/grouphack-dev',
    username: undefined,
    password: undefined
  },

  seedDB: true
};
