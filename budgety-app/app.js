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
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// [1 2 3 4 5] next ID = 6
			// [1 2 4 6 8] next ID = 9
			// ID = last ID + 1 (only way to make it work in case items are deleted)

			if (data.allItems[type].length > 0) {
				// CREATE NEW ID
			ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}

			// CREATE NEW ITEM BASED ON 'INC' OR 'EXP'
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			// PUSH NEW ITEM INTO DATA STRUCTURE
			// since exp & inc are arrays (see above var data), type will be array, too
			data.allItems[type].push(newItem);

			// RETURN NEW ITEM
			return newItem;
		},

		testing: function(){
			console.log(data)
		}
	};

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
		var input, newItem;
		// get input data
		input = UICtrl.getinput();
		console.log(input);
		// add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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