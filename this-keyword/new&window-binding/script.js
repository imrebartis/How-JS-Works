// NEW BINDING

var Animal = function(color, name, type){
	this.color = color;
	this.name = name;
	this.type = type
}

var zebra = new Animal('black&white', 'Zorba', 'zebra');

console.log('My pet is ' + zebra.color); // My pet is black&white

// WINDOW BINDING

var sayAge = function(){
	//add 'use strict' if u want to avoid window binding;
	console.log(this.age)
};

var me = {
	age: 82
}

sayAge.call(me); // 82
sayAge(); // undefined

window.age = 95;
sayAge() // 95

