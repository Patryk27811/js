var tab1 = [7,3,1,6,9,5,4,10,2,2];

tab1[6]=12;
document.write('<br> 5ta komórka = '+ tab1[4] + " <br>" );
var tab2=[];

var tab3=[];
var tab1 = [7,3,1,6,9,5,4,10,2,2];
document.write("<table>");
document.write("<tr>")
document.write("<td><b>Tab1</b></td>");
for(var i=0; i<tab1.length; i++) document.write("<td>"+tab1[i]+" </td>");
document.write("</tr>");
document.write("<br>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>Tab2</b></td>");
for(var i=0; i<10;i++){
    tab2[i]=tab1[i]; document.write(" <td>"+tab2[i]+ " </td>");
   }
   document.write("<br><br> ");
   document.write("</tr>");
   document.write("<tr>");
   document.write("<td><b>Tab3</b></td>");
for(var i=0; i<tab2.length;i++){
    tab3[i]=tab1[i]+tab2[i]; document.write("<td>"+tab3[i]+ " </td>");
   }
   tab1=tab2.reverse();

   document.write('<tr><td><b>tab1 rev.</b></td>  ');
   
   for(var i=0;i<tab1.length;i++){
       document.write('<td>'+tab1[i]+"</td>");  
   }
   document.write("</tr></table>");