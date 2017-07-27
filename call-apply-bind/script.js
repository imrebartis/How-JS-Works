// bind, call & apply

var john = {
	name: 'John',
	age: 27,
	job: 'unemployed',
	presentation: function(style, timeOfDay) {
		if(style === 'formal') {
			console.log('Good ' + timeOfDay + ", ladies and gentlemen! I\'m " + this.name + " and I\'m " + this.job + " and I'm " + this.age + " years old.")
		} else if(style === 'informal'){
			console.log('Hey, what\'s up? I\'m ' + this.name + " and I\'m a " + this.job + " and I'm " + this.age + " years old. Have a nice " + timeOfDay + "!")
		}
	}
}

var emily = {
	name: 'Amely',
	age: 16,
	job: 'kungfu fighter'
}
john.presentation('formal', 'wee hours');
john.presentation.call(emily, 'informal', 'night'); // Hey, what's up? I'm Amely and I'm a kungfu fighter and I'm 16 years old. Have a nice night!
john.presentation.apply(emily, ['informal', 'night']); // Hey, what's up? I'm Amely and I'm a kungfu fighter and I'm 16 years old. Have a nice night!

// Carrying, i.e. create a function based on another function, but with some preset parameters
var emilyInformal = john.presentation.bind(emily, 'informal'); // N.B. bind doesn't call the function immediately (it generates a copy
															  // of the function, so that we can  store it.															  
emilyInformal('day'); // Hey, what's up? I'm Amely and I'm a kungfu fighter and I'm 16 years old. Have a nice day!


var years = [1998, 2004, 1974, 1954, 2010];

function arrayCalc(arr, fn){
	var arrRes = [];
	for (var i=0; i<years.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

// callback function
function calculateAge(el){
	return 2017-el;
}

// callback function
function fullAge(limit, el){
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, fullAge.bind(this, 20)); // this is a COPY of the fullAge function, with 20 as preset argument for limit

console.log(ages); // [19, 13, 43, 63, 7]
console.log(fullJapan); // [false, false, true, true, false]