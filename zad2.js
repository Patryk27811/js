tablicajs = [];

var input = document.getElementById("Text");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add();
    }
})

function add() {
    var value = document.getElementById("Text").value;
    if (isNaN(value)) {
        alert("Wprowadzaony tekst nie jest liczbą")
        value = "";
        document.getElementById("Text").value = "";
    } else {
        tablicajs.push(value);
        document.getElementById("Text").value = "";
        document.getElementById("values").innerHTML = tablicajs.join(";");
    }
}

function end() {
    var Tablicajsgt = tablicajs.map(function(x) { return parseInt(x, 10); });
    Tablicajsnt = Tablicajsgt.sort(function(a, b) { return a - b });

    let min = Tablicajsgt[0];
    let suma = 0;
    let count = 0;
    for (i = 0; i < Tablicajsgt.length; i++) { suma = suma + Tablicajsgt[i]; }
    let avg = suma / Tablicajsgt.length;
    let max = Tablicajsgt[(Tablicajsgt.length - 1)];
    for (i = 0; i < Tablicajsgt.length; i++) {
        if (Tablicajsgt[i] == 3) { count = count + 1; }
    }

    const median = arr => {
        let middle = Math.floor(arr.length / 2);
        arr = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
    };

    let mediana = median(Tablicajsgt);

    let powers = [];

    for (var i = 0; i < Tablicajsgt.length; i++) {
        powers[i] = (Tablicajsgt[i] ** 2);
    }

    let count2 = 0,
        count3 = 0,
        count1 = 0;

    for (var i = 0; i < Tablicajsgt.length; i++) {
        if ((Tablicajsgt[i] % 2) == 0) {
            count2 += 1;
        } else {
            count1 += 1;
        }
        if ((Tablicajsgt[i] % 3) == 0) {
            count3 += 1;
        }
    }





    document.getElementById('output').innerHTML = 'najwieksza: ' + max + '<br> najmniejsza: ' + min + "<br> srednia: " + avg + "<br> ilosc wystapien liczby 3: " + count + "<br> mediana: " + mediana;

    if (Tablicajsgt.length >= 3) {
        document.getElementById('output').innerHTML += '<br> 3 najwieksze elementy: ' + Tablicajsgt[(Tablicajsgt.length - 1)] + ' ' + Tablicajsgt[(Tablicajsgt.length - 2)] + ' ' + Tablicajsgt[(Tablicajsgt.length - 3)] + '<br> 3 najmniejsze elementy: ' + Tablicajsgt[0] + ' ' + Tablicajsgt[1] + ' ' + Tablicajsgt[2];
    } else {
        document.getElementById('output').innerHTML += "<br> Tablica nie zawiera wystarczająco dużo elementów, aby obliczyć 3 najwieksze i najmniejsze elementy";
    }

    document.getElementById('output').innerHTML += '<br> tablica podniesiona do kwadratu: <br>' + powers.join(", ") + "<br> liczba parzystych: " + count2 + "<br> liczba nieparzystych: " + count1 + "<br> liczba podzielnych przez 3: " + count3;
}