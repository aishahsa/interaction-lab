var hour;
var min;
var dayOfWeek


function HORA(){
  var myDate = new Date;

  hour = /*myDate.getHours()*/22;
  min = /*myDate.getMinutes()*/52;
  day = /*myDate.getDay()*/0;


  if(min > 4.9){
    $('#T12').addClass("blue")
  }else{
    $('#T12').removeClass("blue")
  }

  if(min > 9.9){
    $('#T11').addClass("blue")
  }else{
    $('#T11').removeClass("blue")
  }

  if(min > 14.9){
    $('#T10').addClass("blue")
  }else{
    $('#T10').removeClass("blue")
  }

  if(min > 19.9){
    $('#T9').addClass("blue")
  }else{
    $('#T9').removeClass("blue")
  }

  if(min > 24.9){
    $('#T8').addClass("blue")
  }else{
    $('#T8').removeClass("blue")
  }

  if(min > 29.9){
    $('#T7').addClass("blue")
  }else{
    $('#T7').removeClass("blue")
  }

  if(min > 34.9){
    $('#T6').addClass("blue")
  }else{
    $('#T6').removeClass("blue")
  }

  if(min > 39.9){
    $('#T5').addClass("blue")
  }else{
    $('#T5').removeClass("blue")
  }

  if(min > 44.9){
    $('#T4').addClass("blue")
  }else{
    $('#T4').removeClass("blue")
  }

  if(min > 49.9){
    $('#T3').addClass("blue")
  }else{
    $('#T3').removeClass("blue")
  }

  if(min > 54.9){
    $('#T2').addClass("blue")
  }else{
    $('#T2').removeClass("blue")
  }

  if(min > 59.9){
    $('#T1').addClass("blue")
  }else{
    $('#T1').removeClass("blue")
  }

  if(day==0){
    $('.day').html('Sunday')
    $('.day').addClass('sun')
  }
  if(day==1){
    $('.day').html('Monday')
    $('.day').addClass('mon')
  }
  if(day==2){
    $('.day').html('Tuesday')
    $('.day').addClass('tues')
  }
  if(day==3){
    $('.day').html('Wednesday')
    $('.day').addClass('wed')
  }
  if(day==4){
    $('.day').html('Thursday')
    $('.day').addClass('thur')
  }
  if(day==5){
    $('.day').html('Friday')
    $('.day').addClass('fri')
  }
  if(day==6){
    $('.day').html('Saturday')
    $('.day').addClass('sat')
  }

  //HOURS//HOURS//HOURS

  if(hour == 0){
    $('.words').html('sleep')
  }
  if(hour == 1){
    $('.words').html('sleep')
  }
  if(hour == 2){
    $('.words').html('sleep')
  }
  if(hour == 3){
    $('.words').html('sleep')
  }
  if(hour == 4){
    $('.words').html('sleep')
  }
  if(hour == 5){
    $('.words').html('sleep')
  }
  if(hour == 6){
    $('.words').html('sleep')
  }
  if(hour == 7){
    $('.words').html('sleep')
  }
  if(hour == 8){
    $('.words').html('eat')
  }
  if(hour == 9){
    $('.words').html('class')
  }
  if(hour == 10){
    $('.words').html('class')
  }
  if(hour == 11){
    $('.words').html('class')
  }
  if(hour == 12){
    $('.words').html('eat')
  }
  if(hour == 13){
    $('.words').html('work')
  }
  if(hour == 14){
    $('.words').html('work')
  }
  if(hour == 15){
    $('.words').html('run')
  }
  if(hour == 15){
    $('.words').html('run')
  }
  if(hour == 16){
    $('.words').html('eat')
  }
  if(hour == 17){
    $('.words').html('work')
  }
  if(hour == 18){
    $('.words').html('work')
  }
  if(hour == 19){
    $('.words').html('eat')
  }
  if(hour == 20){
    $('.words').html('chill')
  }
  if(hour == 21){
    $('.words').html('chill')
  }
  if(hour == 22){
    $('.words').html('chill')
  }
  if(hour == 23){
    $('.words').html('sleep')
  }
  if(hour == 00){
    $('.words').html('sleep')
  }

}

HORA()

console.log(hour)

console.log(min)

console.log(day)

setInterval (HORA,1000)
