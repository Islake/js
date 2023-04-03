// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page in an ordered list
// (<ol>) in alphabetical order. (2p)

'use strict';

let numParticipants = parseInt(prompt('Enter the number of participants:'));

let participants = [];

for (let i = 1; i <= numParticipants; i++) {
  let name = prompt(`Enter the name of participant ${i}:`);
  participants.push(name);
}

participants.sort();

let listItems = '';
for (let i = 0; i < participants.length; i++) {
  listItems += `<li>${participants[i]}</li>`;
}

document.querySelector('#target').innerHTML = `<ol>${listItems}</ol>`;
