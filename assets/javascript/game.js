$(document).ready(function(){

	var score = 0;
	var wins = 0;
	var losses = 0;

	// computer generates random number between 19 + 120.

	var computerNumber = Math.floor((Math.random() * 102) + 19);

	$('#targetScore').text(computerNumber);

	

	// make 4 crystals for player to click
	// each crystal is assigned a random value between 1 + 12.
	// player clicks crystals and the assigned number gets added to a total.
	var rubyValue = Math.floor((Math.random() * 12) + 1); 

	$('#ruby').on('click', function() {
		 score += rubyValue;
		 winChecker(score)
		$('#totalScore').text(score);
	});

	var diamondValue = Math.floor((Math.random() * 12) + 1); 

	$('#diamond').on('click', function() {
		 score += diamondValue;
		 winChecker(score)
		$('#totalScore').text(score);
	});

	var amberValue = Math.floor((Math.random() * 12) + 1); 

	$('#amber').on('click', function() {
		 score += amberValue;
		 winChecker(score)
		$('#totalScore').text(score);
	});

	var emeraldValue = Math.floor((Math.random() * 12) + 1); 

	$('#emerald').on('click', function() {
		 score += emeraldValue;
		 winChecker(score)
		$('#totalScore').text(score);
	});


var winChecker = function(score){
		if (score === computerNumber) {
			wins++;
			$("#wins").text("Wins: " + wins);
		} else if (score > computerNumber) {
			losses++;
			$("#losses").text("Losses: " + losses);
		} 
	
	}
})

// Play continues until player reaches computer number
   // if player goes over computer number, then player loses and that is added to the loss column
   // if player reaches random computer number, then player wins and it's added to the win column.
// crystals are assigned a new value at the end of the game
// computer generates new number at the end of each game.