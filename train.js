const brain = require('brain.js');
const fs = require('fs');

const network = new brain.recurrent.LSTM();

const text = fs.readFileSync('./convo.txt', 'utf8').replace(/(\d{2}\s\w{3}\s\d{4},\s\d{2}:\d{2})|(\w{3}\s\d{2}:\d{2})/g, '');
const lines = text.split('\n');
const filtered = lines.filter(function (el) {
  return el != '';
});

const userOne = [];
const userTwo = [];

for (let i = 0; i < filtered.length; i++) {
  if (i % 2 === 0) {
    userOne.push(filtered[i]);
  } else {
    userTwo.push(filtered[i]);
  };
};

const data = [];
for (let i = 0; i < userOne.length; i++) {
  data.push({ input: userOne[i], output: userTwo[i]})
};

console.log("Training, please stand by!")
network.train(data);
console.log('Done training!');

const networkJSON = JSON.stringify(network.toJSON());
fs.writeFileSync('messages-network.json', networkJSON);
