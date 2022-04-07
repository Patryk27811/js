document.write("<b>Zadanie 3</b>");
document.write("<br>");
function myDate() {
    var a = new Date();
    var days = new Array(7);
    days[0] = "Niedziela";
    days[1] = "Poniedziałek";
    days[2] = "Wtorek";
    days[3] = "Środa";
    days[4] = "Czwartek";
    days[5] = "Piątek";
    days[6] = "Sobota";
    var r = days[a.getDay()];
    document.getElementById("myId").innerHTML = r;
   
}
 document.write("<br>");
 document.write("Data " +date);
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 