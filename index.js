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