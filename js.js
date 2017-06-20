var equation = "";
function equationBuilder(number) {equation += number;  document.getElementById("screen").innerHTML = equation;}
function runEquals() {  equals = eval(equation);  document.getElementById("screen").innerHTML = equals;}
function runClear() {  equation = 0;  document.getElementById("screen").innerHTML = " ";}
