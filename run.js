const fs = require('fs');
const brain = require('brain.js');
const networkJSON = JSON.parse(fs.readFileSync('./messages-network.json'));
const network = new brain.recurrent.LSTM();

network.fromJSON(networkJSON);
console.log(network.run('hi'));
