const fs = require('fs');

const genders = ['Male', 'Female'];
const femaleNames = ['Ann', 'Helen', 'Bonny', 'Elen'];
const maleNames = ['John', 'Jim', 'Josh', 'Joan'];
const surnames = ['Smith', 'Bo', 'Alf', 'Lam', 'Tim'];

function randomChoice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function chooseName(gender) {
  if (gender === 'Male') return randomChoice(maleNames);
  return randomChoice(femaleNames);
}

const personList = [];

for (let i = 0; i < 20; i++) {
  let gender = randomChoice(genders);
  personList.push({
    gender,
    firstName: chooseName(gender),
    surname: randomChoice(surnames),
    age: Math.floor(Math.random() * 61 + 18),
  });
}

const data = JSON.stringify(personList);

fs.writeFile('people.json', data, (err) => {
  if (err) {
    throw err('Something went wrong');
  }
  console.log('File has been successfully generated! Check people.json');
});
