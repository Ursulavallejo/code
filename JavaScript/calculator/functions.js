let operandoA;
let operandoB;
let operacion;


function init() {
    alert('Hej Hola! Min först räknare !!')
    //variables
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let addition = document.getElementById("addition");
    let difference = document.getElementById("difference");
    let multiplication = document.getElementById("multiplication");
    let division = document.getElementById("division");
    let equal = document.getElementById("equal");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let zero = document.getElementById("zero");

    //Events
    one.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    two.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    three.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    four.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    five.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    six.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    seven.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    eight.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nine.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    zero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function (e) {
        resetear();
    }
    addition.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    difference.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplication.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion= "/";
        limpiar();
    }
    equal.onclick = function (e) {
        operandoB = resultado.textContent;
        resolver();
    }
}

//Methods
function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;

    }
    resetear();
    resultado.textContent = res
}
