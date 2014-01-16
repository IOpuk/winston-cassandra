var fs = require('fs');
var path = require('path');
var Cassandra = require('../index.js');

var config = {
  "host": "localhost",
  "host2": "localhost",
  "port": 9042,
  "username": "cassandra",
  "password": "cassandra",
  "keyspace": "logging",
  "consistency": Cassandra.types.consistencies.one
};

if (fs.existsSync(path.resolve(__dirname, './localConfig.json'))) {
  var localConfig = require('./localConfig.json');
  Cassandra.extend(config, localConfig);
}

module.exports = config;