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

	var calculateTotal = function(type){
		var sum = 0;
		data.allItems[type].forEach(function(cur){
			sum += cur.value;
		});
		data.totals[type] = sum;
	};
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		// percentage is a value that doesn't exist first, that's why we use here -1
		// to make it clear it doesn't exist yet
		percentage: -1
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

		calculateBudget: function(){
			// calculate total income & expenses
			calculateTotal('exp');
			calculateTotal('inc');

			// calculate budget: inc - exp
			data.budget = data.totals.inc - data.totals.exp;

			// calculate percentage of inc spent
			if (data.totals.inc > 0){
				data.percentage = Math.round((data.totals.exp/data.totals.inc)*100);
			} else {
				data.percentage = -1;
			}
		},

		getBudget: function(){
			return {
				budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
			}
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

	return {
		getinput: function(){

			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				//value is turned from string into number
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
			}
		},

		addListItem: function(obj, type){
			var html, newHtml, element;
			// create HTML string with placeholder text
			if(type === 'inc') {
		     element = DOMstrings.incomeContainer;
			 html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			 } else if (type === 'exp') {
			 element = DOMstrings.expensesContainer;
			 html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">-%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			 }
			// replace placeholder with actual data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);

			// insert HTML into DOM
			// see documentation: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
		},

		clearFields: function() {
			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

			// 'tricking' var fields into becoming an array
			fieldsArr = Array.prototype.slice.call(fields);

			fieldsArr.forEach(function(current, index, array){
				current.value="";			
			});

			// move focus back to description field after adding list item
			fieldsArr[0].focus();
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

	var updateBudget = function(){

		// Calculate the budget
		budgetCtrl.calculateBudget();

		// Return the budget
		var budget = budgetCtrl.getBudget();

        // Display budget on UI
        console.log(budget);
	};

	var ctrlAddItem = function(){
		var input, newItem;
		// get input data
		input = UICtrl.getinput();
		// console.log(input);

		//add item only if there's actual data
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate & update budget
            updateBudget();
        }
	};

	return {
		init: function(){
			console.log('application\'s started');
			setUpEventListeners();
		}
	}

})(budgetController, UIController);

controller.init();