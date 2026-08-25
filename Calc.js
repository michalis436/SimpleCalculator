function multiply(number1, number2){

    return number1*number2;

}

function divide(number1, number2){

    if(number2 == 0)
        return undefined;
    return  number1/number2;

}

function add(number1, number2){

    return number1 + number2;

}

function subtract(number1, number2){

    return number1 - number2;

}

function getNumber(input) {

    if (input === "π" || input === "pi" || input === "Pi") {
        return Math.PI;
    }

    if(input === "e"){
        return Math.E;
    }

    return Number(input);
}

document.getElementById("additionButton").onclick = function(){

    let number1 = getNumber(document.getElementById("number1").value);
    let number2 = getNumber(document.getElementById("number2").value);

    let result = add(number1,number2);

    document.getElementById("result").textContent = result;

};

document.getElementById("subtractButton").onclick = function(){

    let number1 = getNumber(document.getElementById("number1").value);
    let number2 = getNumber(document.getElementById("number2").value);

    let result = subtract(number1,number2);

    document.getElementById("result").textContent = result;

};

document.getElementById("multiplyButton").onclick = function() {

    let number1 = getNumber(document.getElementById("number1").value);
    let number2 = getNumber(document.getElementById("number2").value);

    let result = multiply(number1, number2);

    document.getElementById("result").textContent = result;
};


document.getElementById("divideButton").onclick = function() {

    let number1 = getNumber(document.getElementById("number1").value);
    let number2 = getNumber(document.getElementById("number2").value);

    let result = divide(number1, number2);

    document.getElementById("result").textContent = result;
};

document.getElementById("clearButton").onclick = function() {

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    document.getElementById("result").textContent="";

};

let selectedInput = null;

document.getElementById("number1").onfocus = function() {

    selectedInput = this;

};

document.getElementById("number2").onfocus = function() {

    selectedInput = this;

};

document.getElementById("piButton").onclick = function() {

    if (selectedInput != null) {

        selectedInput.value = "π";

    }

};

document.getElementById("eButton").onclick = function() {

     if(selectedInput != null){

        selectedInput.value = "e";

    }

}