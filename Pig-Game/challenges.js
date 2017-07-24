/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- A player looses his entire score when he rolls two 6 in a row. After that, it's the other player's turn

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;


// document.querySelector('#current-' + activePlayer).textContent = dice;

//if need to give also html selectors besides changing text, use innerHTML:

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


document.querySelector('.btn-roll').addEventListener('click', function(){

	if (gamePlaying){

		console.log('hi')

	var dice = Math.floor(Math.random()*6)+1;

	//Display result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	//Update score if rolled number was not 1

	if(dice === 6 && lastDice === 6) {
		//Player looses score
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent = '0';
		nextPlayer();
	} else if (dice !== 1) {
		//add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}
	else {
		nextPlayer();
	}

	lastDice = dice;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function(){

		if(gamePlaying){

		// add current score to global score
		scores[activePlayer] += roundScore;

		// update UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// check if player won the game

		if (scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = "Winner";
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false; //thus we stop the game
		} 

		else {
			// next player
		nextPlayer();
		}
	}
});

function nextPlayer(){
		//next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //if it's 0, it should be 1, otherwise it's 0
		roundScore = 0; //setting the score of the player who threw 1 back to 0

		document.getElementById('current-0').textContent = '0'; //setting the score of the player who threw 1 back to 0
		document.getElementById('current-1').textContent = '0'; //setting the score of the player who threw 1 back to 0

		//toggling the active class
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//hiding the dice before the other player throws it for the first time in his round
		document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
    roundScore = 0;
	activePlayer = 0;
	gamePlaying = true; //gamePlaying has to be set to true here, otherwise the gamePlaying if statements above won't work

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.querySelector('.dice').style.display = 'none';

	document.getElementById('name-0').textContent = "Player1";
	document.getElementById('name-1').textContent = "Player2";

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('acive');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active'); // adding back the active class to player 1

}
