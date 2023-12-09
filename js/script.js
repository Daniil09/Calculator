let buttonPlus = document.getElementById("Plus");
let buttonMinus = document.getElementById("Minus");
let buttonMulti = document.getElementById("Multiply");
let buttonDiv = document.getElementById("Divided");
let inputFirstNum = document.getElementById("FirstNumber");
let inputSecNum = document.getElementById("SecondNumber");
let output = document.getElementById("Result");
function fold() {
    let Num1 = Number(inputFirstNum.value);
    let Num2 = Number(inputSecNum.value);
    let Res = Num1 + Num2;
    output.value = Res;
}
function subtract() {
    let Num1 = Number(inputFirstNum.value);
    let Num2 = Number(inputSecNum.value);
    let Res = Num1 - Num2;
    output.value = Res;
}
function multiply() {
    let Num1 = Number(inputFirstNum.value);
    let Num2 = Number(inputSecNum.value);
    let Res = Num1 * Num2;
    output.value = Res;
}
function divide() {
    let Num1 = Number(inputFirstNum.value);
    let Num2 = Number(inputSecNum.value);
    let Res = Num1 / Num2;
    output.value = Res;
}
buttonPlus.addEventListener("click", fold);
buttonMinus.addEventListener("click", subtract);
buttonMulti.addEventListener("click", multiply);
buttonDiv.addEventListener("click", divide);