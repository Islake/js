// Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
// Prime numbers are numbers that are only divisible by 1 and itself.
// For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
// On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
// Print the result on the HTML document.


let luku = parseInt(prompt('Enter a number:'));
let isprime = true;

if (luku === 1) {
  isprime = false;
} else if (luku > 1) {
  for (let i = 2; i < luku; i++) {
    if (luku % i === 0) {
      isprime = false;
      break;
    }
  }
} else {
  isprime = false;
}

if (isprime) {
  document.querySelector('#target').innerHTML = (`${luku} is a prime number`);
} else {
  document.querySelector('#target').innerHTML = (`${luku} is not a prime number`);
}
