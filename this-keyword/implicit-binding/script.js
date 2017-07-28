// IMPLICIT BINDING (look left of the dot at call time)


// 1a.

// var me = {
	// name: 'I',
	// age: 56,
	// sayName: function(){
	// 	console.log(this.name)
	// }
// }

// me.sayName(); // I


// 1b. 

// var sayNameMixin = function(obj){
// 	obj.sayName = function(){
// 		console.log(this.name)
// 	}

// }

// var me = {
// 	name: 'I',
// 	age: 56
// }

// var u = {
// 	name: 'Iha',
// 	age: 58
// }
// sayNameMixin(me);
// me.sayName(); // I

// sayNameMixin(u);
// u.sayName(); // Iha


// 1c.

var Person = function(name, age){
	return {
			name: name,
			age: age,
			sayName: function(){
				console.log(this.name)
			},
			mother: {
				name: 'Lu',
				sayName: function(){
					console.log(this.name)
				}
			}
	}
};

var jim = Person('Jim', 41);

jim.sayName(); // Jim
jim.mother.sayName() // Lu



