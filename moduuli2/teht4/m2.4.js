// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the html page from the largest to the smallest. (2p)

'use strict';

let numbers = [];

while (true) {
  let input = prompt('Enter a number:');
  let number = parseInt(input);

  if (number === 0 || isNaN(number)) {
    break;
  }

  numbers.push(number);
}

numbers.sort(function(a, b){return b-a});
document.querySelector('#target').innerHTML = ('Numbers: ' + numbers.join(', '));
