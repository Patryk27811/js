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
document.write("<table>")
document.write("<tr>")
for(var i=0; i<10; i++) document.write("<td>"+tab1[i]+" </td>");
document.write("</tr>")
document.write("<br>");
document.write("</tr>")
document.write("<tr>")
for(var i=0; i<10;i++){
    tab2[i]=tab1[i]; document.write(" <td>"+tab2[i]+ " </td>");
   }
   document.write("<br><br> ");
   document.write("</tr>")
   document.write("<tr>")
for(var i=0; i<10;i++){
    tab3[i]=tab1[i]*2; document.write("<td>"+tab3[i]+ " </td>");
   }//wyświetlenie sumy 2 tablic

   document.write("</tr></table>")