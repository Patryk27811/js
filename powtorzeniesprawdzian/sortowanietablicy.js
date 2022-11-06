var tab = new Array();

for(var i=0;i<6;i++){
    var x = prompt("wpisz liczbe");
    tab.push(x);
}
tab = tab.map(Number);
tab = tab.sort(function(a,b){return a-b})
console.log(tab);
document.getElementById("dupa2").innerHTML = tab.join(", ");

 function usunostatni(){
        tab.pop();
        
    document.getElementById("dupa2").innerHTML = tab.join(",");
}