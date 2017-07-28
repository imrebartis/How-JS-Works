// EXPLICIT BINDING

// CALL (invoking function immediately)

// var sayName = function(lang1, lang2, lang3){
// 	console.log('My name is ' + this.name + " and I know " + lang1 + ", " + lang2 + " & " + lang3);
// };

// var malibu = {
// 	name: 'Malibu',
// 	age: 20
// }

// var languages = ['JS', 'Rails', 'Python'];

// sayName.call(malibu, languages[1], languages[0], languages[2]); // My name is Malibu and I know Rails, JS & Python


// APPLY (PASSING IN AN ARRAY OF ARGUMENTS) (invoking function immediately)

// var sayName = function(lang1, lang2, lang3){
// 	console.log('My name is ' + this.name + " and I know " + lang1 + ", " + lang2 + " & " + lang3);
// };

// var malibu = {
// 	name: 'Malibu',
// 	age: 20
// }

// var languages = ['JS', 'Rails', 'Python'];

// sayName.apply(malibu, languages); // My name is Malibu and I know JS, Rails & Python


// BIND (USED FOR CREATING NEW FUNCTIONS U CAN CALL LATER)

var sayName = function(lang1, lang2, lang3){
	console.log('My name is ' + this.name + " and I know " + lang1 + ", " + lang2 + " & " + lang3);
};

var malibu = {
	name: 'Malibu',
	age: 20
}

var languages = ['JS', 'Rails', 'Python'];

var newFn = sayName.bind(malibu, languages[1], languages[0], languages[2]); 
console.log('------------------');
newFn(); // My name is Malibu and I know Rails, JS & Python
