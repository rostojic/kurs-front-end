
// var randNum = Math.floor(Math.random()*1000)+1;

// var i = 0;
// while(randNum !== 1000){
//     i++;
//     randNum = Math.floor(Math.random()*1000)+1;
//     console.log("Prolaz " + i + " = " + randNum);
// }

var btn = document.getElementById('button');

btn.onclick = function(){
  var result = dice.roll();
  // alert(result);
  setDiceNumber(result);
}


var dice = {
  sides : 6,
  roll : function(){
    var randNum = Math.floor(Math.random() * 6) + 1;
    return randNum;
  }
}

function setDiceNumber(number){
  //1. uzimam element iz HTML
  var pic = document.getElementById('pic');
  //2. setujem src atribut od objekta pic
  pic.src = 'dice-' + number + '.png';
}

