// immediately invoked functions (IIFE)

// function game(){
// 	var score = Math.random() * 10;
// 	console.log(score >=5);
// }
// game();

(function(goodluck){
	var score = Math.random() * 10;
	console.log(score > 5 - goodluck);
	})(5);
