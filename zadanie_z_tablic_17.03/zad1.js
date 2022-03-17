document.write("<b>Zadanie1:</b>");
document.write("</br> <br>");

function funckja(){
    let roz = prompt("Podaj długość tablicy");
    let liczby = prompt("Podaj wartosci");

    let tablica=liczby.split(" ");
    tablica.length=roz;
     
document.getElementById("wynik").innerHTML="<br>"+tablica.join(", ") + "<br><br>"+"dlugosc tablicy: "+tablica.length;
     for(i=0;i<tablica.length;i++){
         tablica[i]=parseInt(tablica[i]);
    }



   var x=tablica.sort()
   document.getElementById("wynik").innerHTML+="<br> <br> Tablica posortowana"+x.join(", ");

   x.reverse();

   document.getElementById("wynik").innerHTML+="<br><br> Tablia malejaco" +x.join(", ");
    

  
   
}
