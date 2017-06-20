var equation = "";


function equationBuilder(number){
equation += number;
  document.getElementById("screen").innerHTML=equation;
}

function runEquals(){
    var equals = '(function equationBuilder() {})'
    var fct2 =eval (equals)
  };

function runClear() {
  document.container.calculator.screen.innerHTML=" ";
}
