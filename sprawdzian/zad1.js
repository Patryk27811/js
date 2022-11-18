var liczb1 = prompt("Podaj pierwszą liczbę");
var liczb2 = prompt("Podaj drugą liczbę");

const znak = prompt("Podaj co chcesz zrobić + lub -");
dodawanie = liczb1+liczb2;
switch (znak) {
    case '+':
      console.log(dodawanie);
      break;
    case '-':
        console.log(liczb1 - liczb2);
}