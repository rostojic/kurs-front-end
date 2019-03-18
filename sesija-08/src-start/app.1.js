//CH 1 
//Napisati funkciju  koja prima niz brojeva a vraca njihov zbir

//CH 2
//Napisati funkciju  koja prima niz brojeva i vraca njihov maximum

//CH 3
//Napisati funkciju koja prima niz brojeva i vraca najmanji

//CH 4
//Napisati funkciju koja prima niz (moze i niz stringova), a vraca niz u obrnutom redosledu


var inputNiz = [67, 23, 45, 34, 345, 12, 11, 100];

function maxNiza(arr){
    var tempMax = arr[0];
    for(var i = 1;  i < arr.length; i++){
        if(tempMax < arr[i]){
            tempMax = arr[i];
        }
    }
    return tempMax;
}

console.log(maxNiza(inputNiz));
