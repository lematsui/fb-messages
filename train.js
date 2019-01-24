const brain = require('brain.js');
const fs = require('fs');

const network = new brain.recurrent.LSTM();

network.train([
  { input: "hello", output: "hi!"},
  { input: "bye", output: "goodbye!"},
  { input: "goodbye", output: "bye"},
  { input: "hi", output: "hi!"},
  { input: "hi!", output: "hello!"},
  { input: "bye!", output: "goodbye!"},
  { input: "hello!", output: "hi!"},
]);

console.log('Done training!');

const networkJSON = JSON.stringify(network.toJSON());
fs.writeFileSync('messages-network.json', networkJSON);
