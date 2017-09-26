// BUDGET CONTROLLER
//immediately invoked function expression (IIFE)
var budgetController = (function(){

	//function constructor
	var Expense = function(id, description, value){
			this.id = id;
			this.description = description;
			this.value = value;
		};
	var Income = function(id, description, value){
			this.id = id;
			this.description = description;
			this.value = value;
		};	
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	}

})();

// UI CONTROLLER
var UIController = (function(){

	 var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

	return {
		getinput: function(){

			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			}
		},

		getDOMStrings: function(){
			return DOMstrings;
		}
	}

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
	// impporting getDOMStrings, so that we could use here DOM.inputBtn instead of '.add__btn'
	var DOM = UIController.getDOMStrings();

	var setUpEventListeners = function(){
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event){

		if (event.charCode===13 || event.which===13) {
			ctrlAddItem();
			}
		});
	};

	var ctrlAddItem = function(){
		// get input data
		var input = UICtrl.getinput();
		console.log(input);
		// add the item to the budget controller
		// add the item to the UI
		// calculate budget
		// display budget
	};

	return {
		init: function(){
			console.log('application\'s started');
			setUpEventListeners();
		}
	}

})(budgetController, UIController);

controller.init();