"use strict";

var tab = new Array();

for (var i = 0; i < 6; i++) {
  var x = prompt("wpisz liczbe");
  tab.push(x);
} //! drugi sposób
//var y = prompt("Podaj liczbe").split(" "); //!tu bez pusza i normalnie dodaje do tablicy


tab = tab.map(Number); //!to jest młody konwertowanie na inty

tab = tab.sort(function (a, b) {
  return a - b;
}); //!sortowanie, bo sam sort jest rozjebany

console.log(tab);
document.getElementById("dupa2").innerHTML = tab.join(", "); //!wypisywanie wartości

function usunostatni() {
  tab.pop(); //!usuwanie ostatniego

  document.getElementById("dupa2").innerHTML = tab.join(",");
}