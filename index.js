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
        if(element == deleteBtn)
        {
            displayEL.value = ""
            operatorIndex = 0
            operatorCount = 0
            pointCount = 0
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
                if(number1 % 1 != 0 && number1 != "ERROR")
                {
                    number1 = number1.toFixed(8)
                    pointCount = 1;
                }
                else{
                    number1
                }
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
            pointCount = 0;
        }
        else if(element == equalsBtn)
        {
            if(operatorIndex != 0){
                let string = String(displayEL.value)
                let newString = string.slice(operatorIndex, string.length)
                number2 = Number(newString)
                let solution = operate(number1, string[operatorIndex-1],number2)
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
        else if(element == pointBtn){
            if (pointCount < 1){
                displayEL.value += element.innerText
                pointCount++
            }
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
populate(pointBtn)