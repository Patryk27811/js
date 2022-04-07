var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.write("<b>Zadanie 2</b>");
document.write("<br>");
document.write("Data " +date + " " +time);
document.write("<br>");