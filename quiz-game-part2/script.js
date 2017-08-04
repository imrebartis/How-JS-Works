/* Console quiz game

8. After u display the result, display the next random question, so that the game never ends.

9. Include the option to quit the game if the user writes 'exit'.

10. Track the user's score (hint: use closures). 

11. Display score in the console.

*/


// IIFE, i.e. wrapping the whole code into (function(){})();

(function(){

function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}


Question.prototype.displayQuestion = function(){
	console.log(this.question);
	for (var i=0; i<this.answers.length; i++){
		console.log(i + ':' + this.answers[i]);
	}
}


Question.prototype.checkAnswer = function(ans, callback){
	var sc;
	if (ans === this.correct) {
		console.log('right');
		sc = callback(true); // callback is the keepScore function
		} else {
			console.log('wrong, try again');
			sc = callback(false);
		}
	this.displayScore(sc);
};

Question.prototype.displayScore = function(score){
	console.log('Score: ' + score);
	console.log('----------------------------');

}

var q1 = new Question('Isn\'t JS really something?', ['yes', 'no'], 1);
var q2 = new Question('What\'s the name of the game?', ['quidditch', 'baseball', 'football'], 2);
var q3 = new Question('What does best describe coding?', ['donno', 'ghastly', 'weird', 'magical'], 2);

var questions = [q1, q2, q3];

function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


function nextQuestion(){
	var n = Math.floor(Math.random() * questions.length);
	questions[n].displayQuestion();
	var answer = prompt('Please select the correct answer.');

	if(answer !== 'exit') {
	 questions[n].checkAnswer(parseInt(answer), keepScore); // parseInt turns string into a number
	 nextQuestion();
	}
}

nextQuestion();

})();

