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
    else if(operator == 'X')
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
let zeroBtn = document.getElementById("zero")
let equalsBtn = document.getElementById("equals")
let deleteBtn = document.getElementById("delete")
let backBtn = document.getElementById("back")
let pointBtn  = document.getElementById("point")

//variable for index of the operator
let operatorIndex = 0;

//variable for operator count
let operatorCount = 0;

//function to populate display
function populate(element){
    element.addEventListener("click", function(){
        if(element == deleteBtn)
        {
            displayEL.value = ""
            operatorIndex = 0
            operatorCount = 0
        }
        else if(element == backBtn)
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
        else if((element == plusBtn || 
                element == minusBtn || 
                element == timesBtn || 
                element == divideBtn) && displayEL.value != 'ERROR')
        {
            operatorCount++
            if(operatorCount > 1)
            {
                let string = String(displayEL.value)
                let string1 = string.slice(0, operatorIndex-1)
                let operator = string.slice(operatorIndex-1, operatorIndex)
                let string2 = string.slice(operatorIndex, string.length)
                number1 = operate(Number(string1), operator, Number(string2))
                number1 % 1 != 0 && number1 != "ERROR" ? number1 = number1.toFixed(8): number1
                displayEL.value = number1
                displayEL.value += element.innerText
                operatorCount = 1
                operatorIndex = displayEL.value.length
            }
            else{
            displayEL.value += element.innerText
            let string = String(displayEL.value)
            operatorIndex = string.length
            string = string.slice(0, string.length - 1)
            number1 = Number(string)
            }
            
        }
        else if(element == equalsBtn)
        {
            if(operatorIndex != 0){
                let string = String(displayEL.value)
                let newString = string.slice(operatorIndex, string.length)
                number2 = Number(newString)
                let solution = operate(number1, string[operatorIndex-1],number2)
                solution % 1 != 0 && solution != "ERROR" ? solution = solution.toFixed(8): solution
                displayEL.value = solution
            }
            operatorIndex = 0
            operatorCount = 0
        }
        else
        {
            if(displayEL.value != 'ERROR')
                displayEL.value += element.innerText
        }
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