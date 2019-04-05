
(function(){
    var button = document.getElementById('button');
    button.addEventListener('click', generate);
   
    function shuffleArray(dimension) {
        var outArr = [];
        var counter = 1;
    
        var rndNum;
        var isAlreadyHere;
        //begin the proces - take the first one, and push it to array
        rndNum = Math.floor(Math.random() * dimension);
        outArr.push(rndNum);
    
        //big loop - count total number of ranadom generated numbers
        while (counter < dimension) {
    
            isAlreadyHere = false;
            //console.log('Ostalo mi je jos: ' + (dimension - counter));
            while (!isAlreadyHere) {
                //take the next random ...
                rndNum = Math.floor(Math.random() * dimension);
                //is it new in the array?
                if (outArr.indexOf(rndNum) === -1) {
                    outArr.push(rndNum);
                    isAlreadyHere = true;
                    // console.log('Dobar: ' + rndNum);
                    counter++;
                }
                //it isn't :(
                else {
                    //console.log('Pa ovaj vec imam: ' + rndNum);
                }
            }
        }
        return outArr;
    }
    
 
})();