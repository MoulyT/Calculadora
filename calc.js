
let buffer="0";
let onGoingResult=0;
let previousOperation=null;

let calcResult=document.querySelector("calc__result");


function buttonClick(value) {
    if (isNaN(parseInt(value))){
        procesSymbol(value)
    } else{
        procesNumber(value)
    }
    screenRefresh()
}

function procesNumber(number){
    if (buffer=="0"){
        buffer=number
    } else{
        buffer=buffer+number
    }
   
}


function procesSymbol(value){
    switch (value) {
        case "AC":
            buffer="0";
            break
        case "C":
            if(buffer.length===1){buffer=0}
            else(buffer=buffer.substring(0,buffer.length-1))
            console.log("C")
            break;
        case ",":
            console.log("coma")
            break;
        case "=":
            if(previousOperation===null){return}
            doOperation(parseFloat(buffer))
            previousOperation=null;
            buffer=onGoingResult.toString;
            onGoingResult=0;

            console.log("igual")
            break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            procesMath(value);
            break;
    }
    
}

function procesMath(value){
    if(buffer===0){
        return;
    } 
    if(onGoingResult===0){
        onGoingResult=parseFloat(buffer)
    }
    else{
        doOperation(parseFloat(buffer))
    }
    previousOperation=value;

}

function doOperation(value){
    switch (value){
        case "+": onGoingResult=onGoingResult+value;
        case "-": onGoingResult=onGoingResult-value;
        case "*": onGoingResult=onGoingResult*value;
        case "/": onGoingResult=onGoingResult/value;
        case "%": onGoingResult=onGoingResult/100;
    }
    
}

function screenRefresh(){
    calcResult.innerText=buffer;
}

function init()
{
    console.log("Funcion init() se inicializo correctamente");
    const buttonList=document.querySelectorAll('button');
    const buttonArray=Array.from(buttonList);

    console.log(buttonArray);
    
    buttonArray.forEach(btn=>
        addEventListener("click", function(event){
            buttonClick(event.target.innerText)})  //VOLVER MAS TARDE, NO FUNCIONA MOULY
};

init();