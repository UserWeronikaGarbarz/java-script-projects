//BUDGET CONTROLLER
var budgetController = (function() {
    

    
})();



//UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add_btn'
    }
    
    return  {
        getInput: function() {
            
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                //inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();



//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
        var DOM = UICtrl.getDOMstrings();
    
        var ctrlAddItem = function() {
        //get the field input data
        var input = UICtrl.getInput();
            console.log(input);
        //add the item to the budget controller
        //add the item to the UI
        //calculate the budget
        //display the budget on the UI
    }
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });

})(budgetController, UIController);