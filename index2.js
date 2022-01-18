var tab1 = [7,3,1,6,9,5,4,10,2,2];
// for(var i=0; i<10; i++) document.write(tab1[i]+" ");
tab1[6]=12;
document.write('<br> 5ta komórka = '+ tab1[4] + " a 7a komórka = <br>" );
var tab2=[];
document.write("Utworzona tablica nr2: <br> ");
// for(var i=0; i<10;i++){
//  tab2[i]=tab1[i]; document.write(tab2[i]+ " ");
// }//wyświetlenie tabeli nr.2 
document.write("<br><br> ");
document.write("Suma dwóch tabel <br><br> ");
var tab3=[];
var tab1 = [7,3,1,6,9,5,4,10,2,2];

for(var i=0; i<10; i++) document.write(tab1[i]+" ");

document.write("<br>");

for(var i=0; i<10;i++){
    tab2[i]=tab1[i]; document.write(" "+tab2[i]+ " ");
   }
   document.write("<br><br> ");
  
for(var i=0; i<10;i++){
    tab3[i]=tab1[i]*2; document.write(""+tab3[i]+ " ");
   }//wyświetlenie sumy 2 tablic
   document.write("<br>");
   tab1=tab2.reverse();
   for(var i=0; i<10;i++){
       tab2[i]=tab1[i]; document.write(" "+tab2[i]+ " ");
      }
      
      
   