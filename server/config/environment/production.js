'use strict';

var dbUrl = process.env.DATABASE_URL.split("/");
var dbName = dbUrl.pop();
dbUrl = dbUrl.join("/");

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            "0.0.0.0",

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/grouphack'
  },

  database: {
    url: dbUrl,
    dbName: dbName,
    username: undefined,
    password: undefined
  },
};