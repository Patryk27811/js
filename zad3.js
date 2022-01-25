tablicajs2 = [];
var input = document.getElementById("Text2");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add2();
    }
});

function clear2() {
    tablicajs2 = [];
    document.getElementById('values2').innerHTML = tablicajs2.join(',');
    document.getElementById('output2').innerHTML = "";
}

function add2() {
    var value2 = document.getElementById("Text2").value;
    if (isNaN(value2)) {
        tablicajs2.push(value2);
        wartosc2 = "";
        document.getElementById("Text2").value = "";
        document.getElementById("values2").innerHTML = tablicajs2.join(',');
    } else {

        alert('wprowadzona wartosc nie jest litera');
        value2 = "";
        document.getElementById("Text2").value = "";
    }

}

function end2() {
    if (tablicajs2.length < 10) {
        alert("Twoja tablica ma za mało liter");
        window.location.reload();
    } else {
        document.getElementById('output2').innerHTML += "Litery ze zmienionym rozmiarem: <br>"
        for (var i = 0; i < tablicajs2.length; i++) {
            if (tablicajs2[i] == tablicajs2[i].toUpperCase()) {
                tablicajs2[i] = tablicajs2[i].toLowerCase();
            } else if (tablicajs2[i] == tablicajs2[i].toLowerCase()) {
                tablicajs2[i] = tablicajs2[i].toUpperCase()
            }
            document.getElementById('output2').innerHTML += tablicajs2[i] + '';
        }
        var mixed = tablicajs2.sort((a, b) => 0.6 - Math.random());
        for (var i = 0; i < tablicajs2.length; i++) {
            tablicajs2[i] = tablicajs2[i].toLowerCase();
        }
        document.getElementById('output2').innerHTML += '<br> Litery w kolejności losowej: <br>' + tablicajs2.join(',');
    }
}