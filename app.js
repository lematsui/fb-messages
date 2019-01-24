const brain = require('brain.js');

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

const output = network.run("bye!")

console.log(output);

