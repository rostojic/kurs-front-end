/*
Napraviti JavaScript program za kreiranje 2 HTML tabele koje prikazuju podatke iz
niza "data", (file data.js). 
Kolone HTML tabela treba da prate red koji je zadan u JSON objektu. 
Prva HTML tabela treba da bude sortirana abecedno, po "last_name" property-iju, rastuce.
Druga tabela treba da bude sortirana po property-iju "age", opadajuce.
Niz sortirati programski - dakle, i za druge JSON podatke, program treba ispravno da 
sortira po zadatim parametrima (ne koristiti "rucno" sortiranje!)
*/



var button = document.querySelector('button').addEventListener('click', function () {
    sortTable1();
    sortTable2();
});

