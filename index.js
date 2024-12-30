//addition function
function add(num1, num2){
    return num1 + num2
}

//subtraction function
function subtract(num1, num2){
    return num1 - num2
}

//multiplication function
function multiply(num1, num2){
    return num1 * num2
}

//division function
function divide(num1, num2){
    return num1 / num2
}


//variables for calculator operations
let number1 = ""
let operator = ""
let number2 = ""

//operation function
function operate(num1, operator, num2){
    if(operator == '+')
    {
        return add(num1, num2)
    }
    else if(operator == '-')
    {
        return subtract(num1, num2)
    }
    else if(operator == '*')
    {
        return multiply(num1, num2)
    }
    else if(operator == '/')
    {
        return divide(num1, num2)
    }

}

//query selectors
let displayEL = document.getElementById("display")
let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let timesBtn = document.getElementById("times")
let divideBtn = document.getElementById("divide")
let nineBtn = document.getElementById("nine")
let eightBtn = document.getElementById("eight")
let sevenBtn = document.getElementById("seven")
let sixBtn = document.getElementById("six")
let fiveBtn = document.getElementById("five")
let fourBtn = document.getElementById("four")
let threeBtn = document.getElementById("three")
let twoBtn = document.getElementById("two")
let oneBtn = document.getElementById("one")
let equalsBtn = document.getElementById("equals")
let deleteBtn = document.getElementById("delete")
let backBtn = document.getElementById("back")