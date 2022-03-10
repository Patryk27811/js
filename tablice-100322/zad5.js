document.write("<b>Zadanie5:</b>");
document.write("</br> <br>");

function funckja(){
    let roz = prompt("Podaj długość tablicy");
    let liczby = prompt("Podaj wartosci");

    let tablica=liczby.split(" ")
    tablica.length=roz;

    document.getElementById("wynik").innerHTML=tablica.join(",")
}