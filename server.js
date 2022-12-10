//Represents the server 
//Use command "json-server server.js" to create fake server for development. 
const aggregates = require('./generator.js');

module.exports = () => {
  const data = aggregates;
  return data;
};
