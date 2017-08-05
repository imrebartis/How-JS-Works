//immediately envoked function expression (IIFE)
var budgetController = (function() {

	var x = 2;

	return {
		publicOne: function(b) {
			return (x+b);
		}
	}
})();

var UIController = (function(){

	// code to come

})(); // budgetController.publicOne(3) will render 5

var controller = (function(budgetCtrl, UICtrl){

	var y = budgetCtrl.publicOne(5);

	return {
		publicTwo: function() {
			console.log(y);
		}
	}

})(budgetController, UIController); // controller.publicTwo() will render 7