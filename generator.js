//Represents the server 
//Run json-server generator.js to create fake server for development. 
const aggregates = require('./functions.js');

module.exports = () => {
  const data = aggregates;
  return data;
};
