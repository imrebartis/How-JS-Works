// BUDGET CONTROLLER
//immediately envoked function expression (IIFE)
var budgetController = (function() {

	
})();

// UI CONTROLLER
var UIController = (function(){

	// code to come

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

	var ctrlAddItem = function(){
		// get input data
		// add the item to the budget controller
		// add the item to the UI
		// calculate budget
		// display budget
		console.log('hullo')
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event){

		if (event.charCode===13 || event.which===13) {
			ctrlAddItem();
		}
	})

})(budgetController, UIController);