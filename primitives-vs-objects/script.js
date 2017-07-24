// primitives vs. objects (& functions)

// primitives
var a = 23;

var b = a;

a = 26;

console.log(a); //26
console.log(b); //23


// objects
var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age); //30
console.log(obj2.age); //30


// functions
var age = 27;

var obj = {
	name: 'Joni',
	city: 'Budapest'
};

function change(a, b) {
	a = 30;
	b.city = "Sao Paolo"
};

change(age, obj);

console.log(age); //27 (doesn't change)
console.log(obj.city); //Sao Paolo (it changes)