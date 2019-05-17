// function checkSum(niz, broj){
//     var rv = false;
//     for(var i = 0; i < niz.length - 1; i++){
//         for(var j = i; j < niz.length; j++){
//             if((niz[i] + niz[j]) == broj){
//                 rv = true;
//             }
//         }
//     }
//     return rv;
// }
// var test = [1,23,4,5];
// console.log(checkSum(test,7));

var array = [5, 8, 89, 74, 102, 38, 150];
var zbir = 100;

var newArray = [];

var commonArray = [];

for (var i = 0; i < array.length; i++){
    newArray.push(zbir - array[i])
}

array.forEach(x => {
    if (newArray.indexOf(x) != -1){
        commonArray.push(x);
    }
});
console.log(commonArray);
