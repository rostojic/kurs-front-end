
function personalData (names, years){
    
    var ages = [];
    var adulthood = [];
    var persons =[];

    for(var i= 0; i < years.length; i++){
        ages[i] = 2019 - years[i];
    }
    
    for(var i= 0; i < ages.length; i++){
        if(ages[i] >= 18){
            adulthood[i] = true;
        }
        else{
            adulthood[i] = false;
        }
    }

    for(var i= 0; i < names.length; i++){
        persons [i] = 
        {
           ime: names[i],
           godina_rodjenja: years[i],
           godine: ages[i],
           punoletan: adulthood[i]  
        }
    }
    
    console.log(persons); 
    return persons; 
}

var actualNames = ["Marko", "Janko", "Stanko", "Maja", "Jelena"];
var actualYears = [2017, 2012, 2010, 2014, 1973];
var podaci = personalData(actualNames, actualYears);
console.log(podaci[0].godine);

