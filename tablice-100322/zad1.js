let tab1 = ["czerwony","zielony","niebieski","żółty"];
let tab2 = [1,2,3,4];
let tab3 = [1,2,,"czerwony",,"niebieski"];
document.write("<b>Zadanie1:</b>")
document.write("<br><br>")
document.write("tablica1: ")
for(i=0;i<tab1.length;i++){
document.write(tab1[i]+" ");
}
document.write("<br><br>")
document.write("tablica2: ")
for(i=0;i<tab2.length;i++){
    document.write(tab2[i]+" ");
    }
    document.write("<br><br>")
    document.write("tablica3: ")
    for(i=0;i<tab3.length;i++){
        document.write(tab3[i]+" ");
        }