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
    else if(operator == 'X' || operator == 'x')
    {
        return multiply(num1, num2)
    }
    else if(operator == '÷' && num2 != 0)
    {
        return divide(num1, num2)
    }
    else if(operator == '÷' && num2 == 0)
    {
        return "ERROR"
    }

}

//query selectors
const displayEL = document.getElementById("display")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const timesBtn = document.getElementById("times")
const divideBtn = document.getElementById("divide")
const nineBtn = document.getElementById("nine")
const eightBtn = document.getElementById("eight")
const sevenBtn = document.getElementById("seven")
const sixBtn = document.getElementById("six")
const fiveBtn = document.getElementById("five")
const fourBtn = document.getElementById("four")
const threeBtn = document.getElementById("three")
const twoBtn = document.getElementById("two")
const oneBtn = document.getElementById("one")
const zeroBtn = document.getElementById("zero")
const equalsBtn = document.getElementById("equals")
const deleteBtn = document.getElementById("delete")
const backBtn = document.getElementById("back")
const pointBtn  = document.getElementById("point")

//variable for index of the operator
let operatorIndex = 0;

//variable for operator count
let operatorCount = 0;

//variable count for decimal point
let pointCount = 0;

//function to populate display
function populate(element){
    element.addEventListener("click", function(){
        //if clear button clicked
        if(element == deleteBtn) 
            clear()
        //if backspace button clicked
        else if(element == backBtn)
            backspace()
        //if operator button is clicked and ERROR is not currently displayed
        else if((element == plusBtn || 
                element == minusBtn || 
                element == timesBtn || 
                element == divideBtn) && 
                displayEL.value != 'ERROR')
            op(element.innerText);
        //if equals button clicked
        else if(element == equalsBtn)
            equals()
        //if decimal point number is clicked
        else if(element == pointBtn)
            decimal(element.innerText)
        //in any other situation
        else
            standard(element.innerText)
    })
}

//populate function calls
populate(plusBtn)
populate(minusBtn)
populate(timesBtn)
populate(divideBtn)
populate(nineBtn)
populate(eightBtn)
populate(sevenBtn)
populate(sixBtn)
populate(fiveBtn)
populate(fourBtn)
populate(threeBtn)
populate(twoBtn)
populate(oneBtn)
populate(zeroBtn)
populate(equalsBtn)
populate(deleteBtn)
populate(backBtn)
populate(pointBtn)

//Arrays to store keyboard buttons' event codes
let numbers = ["Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0"]
let operators = ["KeyX", "Minus", "Slash", "NumpadAdd"]
let actualizers = ["Backspace", "Equal", "Delete"]

//event listener for when a keyboard button is clicked
document.addEventListener('keydown', function(event){
    //if the button is a number button
    if(numbers.includes(event.code))
        standard(event.key)
    //if the button is an operator button
    else if(operators.includes(event.code)){
        if(event.code != "Slash")
            op(event.key)
        else
            op(divideBtn.innerText)
        
    }
    //if the button is a button to delete, backspace or equals
    else if(actualizers.includes(event.code))
    {
        if(event.code == "Delete")
            clear()
        else if(event.code == "Backspace")
            backspace()
        else
            equals()
    }
    //if the button is the period or decimal point
    else if(event.code == "Period")
    {
        decimal(event.key)
    }
} );


//function to be called everytime an operator button is clicked
function op(element){
    operatorCount++
            if(operatorCount > 1)
            {
                let string = String(displayEL.value)
                let string1 = string.slice(0, operatorIndex-1)
                let operator = string.slice(operatorIndex-1, operatorIndex)
                let string2 = string.slice(operatorIndex, string.length)
                number1 = operate(Number(string1), operator, Number(string2))
                if(number1 % 1 != 0 && number1 != "ERROR")
                {
                    number1 = number1.toFixed(8)
                    pointCount = 1;
                }
                else{
                    number1
                }
                displayEL.value = number1
                displayEL.value += element
                operatorCount = 1
                operatorIndex = displayEL.value.length
            }
            else{
            displayEL.value += element
            let string = String(displayEL.value)
            operatorIndex = string.length
            string = string.slice(0, string.length - 1)
            number1 = Number(string)
            }
            pointCount = 0;
}

//function to update the displace when a number is clicked
function standard(digit){
    if(displayEL.value != 'ERROR')
        displayEL.value += digit
}


//function to clear display and rest all counts
function clear()
{
    displayEL.value = ""
    operatorIndex = 0
    operatorCount = 0
    pointCount = 0
}


//function that deletes the last digit on the display
function backspace()
{
    let string = String(displayEL.value)
    if(string != 'ERROR'){
        string = string.slice(0, string.length - 1)
        displayEL.value = string
    }
    else{
       displayEL.value = ""
    }
}

//function that updates the display when equal button pressed
function equals()
{
    if(operatorIndex != 0){
        let string = String(displayEL.value)
        let newString = string.slice(operatorIndex, string.length)
        let operator = string[operatorIndex-1]
        number2 = Number(newString)
        let solution = operate(number1, operator,number2)
        if(solution % 1 != 0 && solution != "ERROR")
        {
                solution = solution.toFixed(8)
                pointCount = 1;
        }
        else{
            solution = solution
            pointCount = 0
        }
        displayEL.value = solution
    }
    operatorIndex = 0
    operatorCount = 0
}

//function that adds a decimal point to the display
function decimal(element)
{
    if (pointCount < 1){
        displayEL.value += element
        pointCount++
    }
}