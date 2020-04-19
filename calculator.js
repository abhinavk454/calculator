let nowTotal=0;
let buffer="0";
let previousSigns;
const screen=document.querySelector(".screen");

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();//update the screen
}

function rerender(){//just updates the screen
    screen.innerText=buffer;
}

function handleNumber(value){
    if (buffer==="0"){
      buffer=value;
    } 
    else{
      buffer+=value;
    }
}

function mathOperation(value){
    if (previousSigns==="+"){
        nowTotal += value;
    }
    else if(previousSigns==="-"){
        nowTotal -= value;
    }
    else if(previousSigns==="*"){
        nowTotal *= value;
    }
    else{
        nowTotal /= value;
    }
}

function mathopr(value){
    console.log(value);
    if (buffer==="0"){
        return;
    }
    intBuffer=parseInt(value);
    if (nowTotal===0){
        newTotal=intBuffer;
    }
    else{
        mathOperation(intBuffer);
    }
    console.log(buffer);
    previousSigns=value;
    buffer="0";
}

function handleSymbol(value){
    console.log(value,buffer);
    switch (value){
        case "C":
            buffer="0";
            nowTotal=0;
            break;
        case "=":
            if(previousSigns===null){
                return;
            }
            mathOperation(parseInt(buffer));
            previousSigns=null;
            buffer=+newTotal;
            newTotal=0;
            break;
        case "←":
            if(buffer.length==1){
                buffer="0";
            }
            else{
                buffer=buffer.substring(0,buffer.length-1);
            }
            break;
        case "+":
        case "-":
        case "*":
        case "÷":
            mathopr(value);
            break;
    }
}

function startcal(){
    document.querySelector(".calculator-buttons").addEventListener("click",function(event){
        buttonClick(event.target.innerText);
    });
}

startcal();