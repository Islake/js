//Write a program that prompts for three integers.
//The program prints the sum, product and average of the numbers to the HTML document.
'use strict';
'use strict';

const num1 = parseInt(prompt('Type first number'));
const num2 = parseInt(prompt('Type second number'));
const num3 = parseInt(prompt('Type third number'));

const sum = num1 + num2 + num3;
const prod = num1 * num2 * num3;
const avg = sum / 3;

// display the sum, product, and average
const resultString = 'Sum: ' + sum + ', Product: ' + prod + ', Average: ' + avg;
document.querySelector('#target').innerHTML = resultString;

