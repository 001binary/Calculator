const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const signs = document.querySelectorAll('.sign');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const point = document.querySelector('.point');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue;

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr)
        }

    })
}
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        atr = e.target.getAttribute('value');
        if(isFirstValue === true && isSecondValue === false){
            getSecondValue(atr)
        }

    })
}


function getFirstValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if (firstValue != ""  && sign != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
    }
}

function getsign(){
    for (let i=0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getsign();


function checkResultLength() {
    resultValue = JSON.stringify(resultValue)
    
    if (resultValue >= 8 ) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
        
    }
}

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+") {
        resultValue = firstValue + secondValue;
    } else if(sign === "-") {
        resultValue = firstValue - secondValue;
    } else if(sign === "x") {
        resultValue = firstValue * secondValue;
    } else if(sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
})

negative.addEventListener('click', () =>{
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != '' ) {
    resultValue = -resultValue;
}
result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != '' ) { 
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () =>{
     result.innerHTML = "0"

        firstValue = "";
        isFirstValue = false;
        secondValue = "";
        isSecondValue = false;
        sign = "";
        resultValue = 0;
})

point.addEventListener('click', (e) => {
    atr = e.target.getAttribute('value');
})