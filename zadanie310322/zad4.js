var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var strefa = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.write("<b>Zadanie 4</b>");
document.write("<br>");
document.write("Data " +date + " " +time+ " " + strefa);
document.write("<br>");
