"use strict";

var txt = "const - Tej zmiennej nie mozna zmienić";
var txt2 = "var - to mozesz sobie na luzie zmienić";
var txt3 = "let - to mozesz sobie na luzie zmienić";
document.write(txt + "<br>");
document.write(txt2 + "<br>");
document.write(txt3 + "<br>" + "<br>" + "<br>" + "<br>");

for (var i = 10; i >= 0; i--) {
  document.write(i + "<br>");
}

var tab = new Array();

for (var i = 0; i < 6; i++) {
  var x = prompt("wpisz liczbe");
  tab.push(x);
}

tab = tab.map(Number);
tab = tab.sort();
console.log(tab);
document.getElementById("dupa").innerHTML = tab.join(", ");

function usunostatni() {
  tab.pop();
  document.getElementById("dupa").innerHTML = tab.join(",");
}