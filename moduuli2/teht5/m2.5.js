// Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and stops its
// operation and then prints all the given numbers to the console in ascending order. (2p)

'use strict';

let numbers = [];

while (true) {
  let input = prompt('Enter a number:');
  let number = parseInt(input);

  if (isNaN(number)) {
    alert('NOT a NUMBER!');
    window.location.reload();
    break;
  }

  if (numbers.includes(number)) {
    document.querySelector('#target').innerHTML = ('Number has already been given!');


    break;
  }

  numbers.push(number);
  numbers.sort(function(a, b){return a-b});
  document.querySelector('#target2').innerHTML = ('Numbers: ' + numbers.join(', '));
}


