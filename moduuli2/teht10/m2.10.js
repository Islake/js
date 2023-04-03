// Write a voting program as described below for small-scale meeting use. (8p)
// The program asks for the number of candidates.
// Then the program asks for the names of the candidates: 'Name for candidate 1
// Store the candidates' names and initial vote count in objects like this:
// The program asks for the number of voters.
// The program asks each voter in turn who they will vote for.
// Voter should enter candidate name. If the voter enters an empty value instead of the voting number,
// it will be interpreted as an empty vote.
// The program announces the name of the winner and the results by printing it to the console:
// The winner is pamela with 3 votes.
// someArray.sort((a, b) => {
//    console.log(a, b);
//    return b - a;
// });

'use strict';

let candidates = [];

let numCandidates = parseInt(prompt('Enter the number of candidates:'));

for (let i = 1; i <= numCandidates; i++) {
  let name = prompt(`Enter the name of candidate ${i}:`);
  candidates.push({ name: name, votes: 0 });
}

let numVoters = parseInt(prompt('Enter the number of voters:'));

for (let i = 1; i <= numVoters; i++) {
  let vote = prompt(`Enter the name of the candidate you want to vote for (or leave empty for an empty vote):`);

  let candidate = candidates.find((c) => c.name === vote);
  if (candidate) {
    candidate.votes++;
  }
}

candidates.sort((a, b) => b.votes - a.votes);

if (candidates[0].votes === candidates[1].votes) {
  // Jos tulee tasatulos, aloitetaan alusta:
  alert('There is a tie, please vote again!');
  window.location.reload();
} else if (candidates[0].votes > 0) {
  // Jos löytyy voittaja:
  document.querySelector('#target').innerHTML = (`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
} else {
  // Jos kukaan ei saanut ääniä:
  document.querySelector('#target').innerHTML = ('No one received any votes.');
}

let results = '';
// Tulokset:
for (let i = 0; i < candidates.length; i++) {
  results += `${candidates[i].name}: ${candidates[i].votes} votes<br>`;
}
document.querySelector('#target2').innerHTML = ('Results:<br>' + results);
