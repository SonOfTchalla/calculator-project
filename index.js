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
    else if(operator == '÷')
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
let zeroBtn = document.getElementById("zero")
let equalsBtn = document.getElementById("equals")
let deleteBtn = document.getElementById("delete")
let backBtn = document.getElementById("back")

//function to populate display
let operatorIndex = 0;
function populate(element){
    element.addEventListener("click", function(){
        if(element == deleteBtn)
        {
            displayEL.value = ""
        }
        else if(element == backBtn)
        {
            let string = String(displayEL.value)
            string = string.slice(0, string.length - 1)
            displayEL.value = string

        }
        else if(element == plusBtn || 
                element == minusBtn || 
                element == timesBtn || 
                element == divideBtn)
        {
            displayEL.value += element.innerText
            let string = String(displayEL.value)
            operatorIndex = string.length
            string = string.slice(0, string.length - 1)
            number1 = Number(string)
            
        }
        else if(element == equalsBtn)
        {
            let string = String(displayEL.value)
            let newString = string.slice(operatorIndex, string.length)
            number2 = Number(newString)
            displayEL.value = operate(number1, string[operatorIndex-1],number2)
        }
        else
        {
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