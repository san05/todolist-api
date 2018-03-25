'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://mongo.server/todolist-dev'
  },
  mocks: {
    // enable this for non mock api
    // api: true
    api: false
  },
  seedDB: true
};
