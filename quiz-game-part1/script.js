/* Console quiz game

1. build a function constructor called Question to describe a question. A question should include:

a) question
b) the answers from which to choose the correct one
c) correct answer

2. Create a couple of questions using the constructor

3. Store them inside an array

4. Select a random question and console.log it, together with the possible answers (each question should have a number) (Hint: write

	a method for the Question objects for this task).

5. Use the prompt function to ask user for the correct answer. The user should input the number of the correct answer. 

6. Check if answer is correct & console.log whether correct or not (Hint: write a method for this).

7. Suppose this could would be a plugin for other programmers to use in their code. So make sure all your code is private & doesn't interfere
with others' code (Hint: use IIFE).


*/


// IIFE, i.e. wrapping the whole code into (function(){})();

(function(){


// step one
function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}


// step two
var q1 = new Question('Isn\'t JS really something?', ['yes', 'no'], 1);
var q2 = new Question('What\'s the name of the game?', ['quidditch', 'baseball', 'football'], 2);
var q3 = new Question('What does best describe coding?', ['donno', 'ghastly', 'weird', 'magical'], 2);

// step three
var questions = [q1, q2, q3];

// step 4
Question.prototype.displayQuestion = function(){
	console.log(this.question);
	for (var i=0; i<this.answers.length; i++){
		console.log(i + ':' + this.answers[i]);
	}
}

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

// step 5
var answer = parseInt(prompt('Please select the correct answer.')); // parseInt turns string into a number

// step 6
Question.prototype.checkAnswer = function(ans){
if (ans === this.correct) {
	console.log('right');
	} else {
		console.log('wrong, try again')
	}
};

questions[n].checkAnswer(answer);


})();

