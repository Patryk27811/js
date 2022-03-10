let table = new Array(100);
table[0] = 0, table[1] = 1;

function zad5() {
    for (var i = 2; i < 100; i++) {
        table[i] = (table[i - 1] + table[i - 2]);
    }
    document.getElementById('output6').innerHTML += 'Ciąg fibonacciego:<br>' + table.join(', ');
    for (var i = 0; i < table.length; i++) {
        table[i] = Math.pow(2, i);
    }
    document.getElementById('output6').innerHTML += '<br><br>potegi liczby 2:<br>' + table.join(', ');
    table[0] = 3
    for (var i = 1; i < table.length; i++) {
        table[i] = (table[i - 1] + 3);
    }
    document.getElementById('output6').innerHTML += '<br><br> Ciąg liczb:<br>' + table.join(', ');

    function isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    table = [];

    var i = 3;
    do {
        if (isPrime(i) == true) {
            table.push(i);
        }

        i++
    } while (table.length < 100)
    document.getElementById('output6').innerHTML += '<br><br> pierwsze 100 liczb pierwszych:<br>' + table.join(', ');

}