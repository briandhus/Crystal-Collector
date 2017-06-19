var score = 0;
var wins = 0;
var losses = 0;

// computer generates random number between 19 + 120.

var computerNumber = Math.floor((Math.random() * 102) + 19);

$('#targetScore').text(computerNumber);
console.log(computerNumber);

console.log
// make 4 chrystals for player to click
// each chrystal is assigned a random value between 1 + 12.
// player clicks chrystals and the assigned number gets added to a total.
// Play continues until player reaches computer number
   // if player goes over computer number, then player loses and that is added to the loss column
   // if player reaches random computer number, then player wins and it's added to the win column.
// chrystals are assigned a new value at the end of the game
// computer generates new number at the end of each game.