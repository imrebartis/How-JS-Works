///////////////////////////////////////
// Lecture: Hoisting

//function declaration:

calculateAge(1990)


function calculateAge(year) {
    console.log(2017-year)
}


//function expression (this will throw us an error message, so we have to call the function after the function expression):

// retirement(1990)

// var retirement = function(year) {
//     console.log(65 - (2016-year))
// }


// variables

//this will give us undefined
console.log(age)
var age = 23;

//global vs. local variable:
function foo(){
    var age = 65;
    console.log(age);
}

foo();
console.log(age);




///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the difference between execution stack and scope chain
//function third can access var d (its own var) and var a (global scope variable), but not var b nor var c

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(d+a);
}




///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // this prints out the john object
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this); //this will print out the window object
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge; //method borrowing, allowed by 'this'
mike.calculateAge();








