document.write("<b>Zadanie3:</b>");
document.write("</br> <br>");

function funckja2(){
    let roz = prompt("Podaj długość tablicy");
    let liczby = prompt("Podaj wartosci");

    let tablica=liczby.split(" ");
    tablica.length=roz;
     
document.getElementById("wynik2").innerHTML="<br>"+tablica.join(", ") + "<br><br>"+"dlugosc tablicy: "+tablica.length;
     for(i=0;i<tablica.length;i++){
         tablica[i]=parseInt(tablica[i]);
    }



   var x=tablica.sort()
   document.getElementById("wynik2").innerHTML+="<br> <br> Tablica posortowana"+x.join(", ");
   
   

   x.reverse();

   document.getElementById("wynik2").innerHTML+="<br><br> Tablia malejaco";
    
   for (var x = 0, ln = tablica.length; x < ln; x++) {
    setTimeout(function(y) {    
      document.getElementById("wynik2").innerHTML+=" "+tablica[y];
    }, x * 1000, x); 
  }
   
}