let numbers = [];

function zad4() {


    for (var i = 0; i < 100; i++) {
        numbers[i] = Math.floor(Math.random() * 500);
    }
    var mixed = numbers.sort((a, b) => 0.6 - Math.random());
    let sort = numbers.sort(function(a, b) { return a - b });
    let max = sort[99];
    let min = sort[0];
    let rev = sort.reverse();
    let y;
    let repeat4;
    let cmax = 0;
    let nieparzyste = [],
        parzyste = [],
        przedzial515 = [],
        najmniejszaiobok = [],
        wieksze1 = [],
        newtable = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == max) {
            cmax++;
        }
        if (numbers[i] % 2 != 0) {
            parzyste.push(numbers[i]);
        }
        if (i % 2 != 0) {
            nieparzyste.push(numbers[i]);
        }
        if ((numbers[i] >= 5) && (numbers[i] < 15)) {
            przedzial515.push(numbers[i]);
        }
        if (numbers[i] == min) {
            najmniejszaiobok = [numbers[i], numbers[i + 1], numbers[i - 1]];
        }
        if (numbers[i] > 10) {
            wieksze1.push(numbers[i]);
        }
    }
    for (var i = 0; i < numbers.length; i++) newtable[i] = suma(i);

    function suma(max) {
        let gm = 0,
            g = 0;
        do {
            gm += numbers[i];
            g++;
        } while (g < (max + 1));
        return gm;
    }

    function getOccurrence(array, value) {
        return array.filter((v) => (v === value)).length;
    }

    for (i = 0; i < numbers.length; i++) {
        y = getOccurrence(numbers, i);
        if (y > 3) {
            repeat4 = i;
            break;
        }
    }
    console.log(numbers);

    document.getElementById('output4').innerHTML = 'max: ' + max + "<br> wystapienia największej liczby: " + cmax + '<br><br> liczby nieparzyste: <br>' + parzyste.join(", ") + "<br><br> liczby w nieparzystych indeksach: <br>" + nieparzyste.join(", ");
    if (przedzial515.length == 0) {
        document.getElementById('output4').innerHTML += "<br><br> nie ma liczb nalezacych do przedzialu <5, 15)";
    } else {
        document.getElementById('output4').innerHTML += "<br><br> liczby należące do przedzialu <5, 15): <br>" + przedzial515.join(', ');
    }
    if (najmniejszaiobok[2] == undefined) { najmniejszaiobok[2] = "nie ma poprzednika"; }
    document.getElementById('output4').innerHTML += "<br><br> najmniejsza liczba: " + najmniejszaiobok[0] + "<br> poprzednia: " + najmniejszaiobok[1] + "<br> nastepna: " + najmniejszaiobok[2];
    document.getElementById('output4').innerHTML += '<br><br> liczby wieksze od 10:<br>' + wieksze1.join(', ');
    document.getElementById('output4').innerHTML += '<br><br> nowa tablica (starą widać w konsoli)<br>' + newtable.join(', ') + '<br><br> tablica posortowana malejaco: <br>' + rev.join(', ');
    if (repeat4 == undefined) {
        document.getElementById('output4').innerHTML += '<br><br> nie ma liczby wystepujacej 3 lub wiecej razy w tablicy.';
    } else {
        document.getElementById('output4').innerHTML += "<br><br> liczba wystepujaca 3 lub wiecej razy w tablicy to: " + repeat4;
    }
}