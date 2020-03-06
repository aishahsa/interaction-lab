var hour;
var min;


function timeInterpret(){

  var myDate = new Date;

  hour = myDate.getHours();
  min = 60/*(myDate.getMinutes)*/;

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

  if(minutes => 5){
    $('#T12').addClass("blue")
  }
  if(minutes => 10){
    $('#T11').addClass("blue")
  }
  if(minutes => 15){
    $('#T10').addClass("blue")
  }
  if(minutes => 20){
    $('#T9').addClass("blue")
  }
  if(minutes => 25){
    $('#T8').addClass("blue")
  }
  if(minutes => 30){
    $('#T7').addClass("blue")
  }
  if(minutes => 35){
    $('#T6').addClass("blue")
  }
  if(minutes => 40){
    $('#T5').addClass("blue")
  }
  if(minutes => 45){
    $('#T4').addClass("blue")
  }
  if(minutes => 50){
    $('#T3').addClass("blue")
  }
  if(minutes => 55){
    $('#T2').addClass("blue")
  }
  if(minutes => 60){
    $('#T1').addClass("blue")
  }

}

timeInterpret()
console.log(hour)


setInterval(timeInterpret, 10000)
