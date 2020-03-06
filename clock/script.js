var hour;
var min;


function timeInterpret(){

  var myDate = new Date;

  hour = myDate.getHours();
  min = (myDate.getMinutes);

  if(hour == 0){
    $('.words').html('sleep')
  }
  if(hour == 1){
    $('.words').html('sleep')
  }
  if(hour == 2){
    $('.words').append('sleep')
  }
  if(hour == 3){
    $('.words').append('sleep')
  }
  if(hour == 4){
    $('.words').append('sleep')
  }
  if(hour == 5){
    $('.words').append('sleep')
  }
  if(hour == 6){
    $('.words').append('sleep')
  }
  if(hour == 7){
    $('.words').append('sleep')
  }
  if(hour == 8){
    $('.words').append('get dressed')
  }
  if(hour == 9){
    $('.words').append('class')
  }
  if(hour == 10){
    $('.words').append('class')
  }
  if(hour == 11){
    $('.words').append('class')
  }
  if(hour == 12){
    $('.words').append('eat')
  }
  if(hour == 13){
    $('.words').append('work')
  }
  if(hour == 14){
    $('.words').append('work')
  }
  if(hour == 15){
    $('.words').append('run')
  }
  if(hour == 15){
    $('.words').append('run')
  }
  if(hour == 16){
    $('.words').append('eat')
  }
  if(hour == 17){
    $('.words').append('work')
  }
  if(hour == 18){
    $('.words').append('work')
  }
  if(hour == 19){
    $('.words').append('eat')
  }
  if(hour == 20){
    $('.words').append('other')
  }
  if(hour == 21){
    $('.word').append('other')
  }
  if(hour == 22){
    $('.words').append('other')
  }
  if(hour == 23){
    $('.words').append('other')
  }
  if(hour == 00){
    $('.words').append('sleep')
  }



}

timeInterpret()
console.log(hour)
console.log("woo")
setInterval(timeInterpret, 10000)
