
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       var self = this;
       document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

box5.clickMe();


// ES6
const box6 = {
    color: 'blue',
    position: 2,
    clickMe() {
        // no need to use var self = this anymore, yippee!!!
        document.querySelector('.blue').addEventListener('click', () => {
            const str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe();


/*
const box66 = {
    color: 'orange',
    position: 3,
    clickMe: () => {
    	// now that function() was replaced by () =>
    	// 'this' points to the global object (here window), which doesn't have a position or a color property : - (
        document.querySelector('.orange').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();

*/


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
    	 // 'this' points to the global object & not to new Person
    	 // that's why we have to use bind(this)
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

// we don't need to bind(this) anymore, yippee!!!

new Person('Mike').myFriends6(friends);

