let numbers = [];

function zad4() {


    for (var i = 0; i < 100; i++) {
        liczby[i] = Math.floor(Math.random() * 500);
    }
    var mixed = tablicajs2.sort((a, b) => 0.6 - Math.random());
    let sort = numbers.sort(function(a, b) { return a - b });
    let max = sort[99];
    let min = sort[0];
    let desc = sort.reverse();
    let y;
    let repeat4;
    let cmax = 0
    let nieparzyste = [],
        parzyste = [],
        przedzial515 = [],
        namniejsz = [],
        wieksze1 = [],
        newtable = [];
}
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == max) cmax++;
    if (numbers[i] % 2 != 0) parzyste.push(numbers[i]);
    if (i % 2 != 0) nieparzyste.push(numbers[i]);
    if ((numbers[i] >= 5) && (numbers[i] < 15)) przedzial515.push(numbers[i]);
    if (numbers[i] == min) najminiejsza = [numbers[i], numbers[i + 1], numbers[i - 1]];
    if (numbers[i] > 10) wieksze1.push(numbers[i])
}