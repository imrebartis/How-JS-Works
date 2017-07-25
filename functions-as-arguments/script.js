// passing functions as arguments

var years = [1994, 2004, 1974, 1954, 2010];

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
function fullAge(el){
	return el >= 18;
}

// callback function
function maxHeartRate(el){
	if (el>=18 && el <=81) {
	return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

// N.B. calculateAge & not calculateAge()
var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, fullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages); // [23, 13, 43, 63, 7]

console.log(fullAges); // [true, false, true, true, false]

console.log(rates); // [191, -1, 178, 165, -1]