// object literal
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'unemployed'
};

// function constructor
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	// this.calculateAge = function() {
	//   console.log(2017 - this.yearOfBirth);
 //  }
}

Person.prototype.calculateAge = function() {
	  console.log(2017 - this.yearOfBirth);
  }

Person.prototype.lastName = "Schmidt";

// instantiation
var john = new Person('John', 1990, 'unemployed');

john.calculateAge();
console.log(john.lastName);