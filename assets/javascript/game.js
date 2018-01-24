
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


// Play continues until player reaches computer number
	var winChecker = function(score){
	   // if player reaches random computer number, then player wins and it's added to the win column.
		if (score === computerNumber) {
			wins++;
			$("#wins").text("Wins: " + wins);
			reset();
			computerChoiceReset();
			crystalReset();
			
	   // if player goes over computer number, then player loses and that is added to the loss column
		} else if (score > computerNumber) {
			losses++;
			$("#losses").text("Losses: " + losses);
			reset();
			computerChoiceReset();
			crystalReset();		
		} 
	}

// total score gets reset
	var reset = function() {
		score = 0;
	}

// computer generates new number at the end of each game.
	var computerChoiceReset = function() {
		computerNumber = Math.floor((Math.random() * 102) + 19);
		$('#targetScore').text(computerNumber);
	}
		
// crystals values are reset and assigned a new value at the end of the game
	var crystalReset = function() {
		rubyValue = Math.floor((Math.random() * 12) + 1);
		$('#totalScore').text(score); 
		diamondValue = Math.floor((Math.random() * 12) + 1);
		$('#totalScore').text(score);
		amberValue = Math.floor((Math.random() * 12) + 1);
		$('#totalScore').text(score); 
		emeraldValue = Math.floor((Math.random() * 12) + 1); 
		$('#totalScore').text(score);
		console.log(rubyValue);
	}		
});
