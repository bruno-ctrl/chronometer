var display = document.getElementById('display');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var begin = document.getElementById('begin');
var stop = document.getElementById('stop');
var recovery = document.getElementById('recovery');


var chronometerSec;
var actuallyMinute;
var actuallySecond;
var interval;
// colocando o tempo
for(var i = 0; i <= 60; i ++){
    minute.innerHTML+='<option value ="'+i+'">'+i+'</option>';
    second.innerHTML+='<option value ="'+i+'">'+i+'</option>';
}
// display
function displayTime(){
    display.childNodes[1].innerHTML = actuallyMinute+':'+actuallySecond;
}
// começando o cronometro

function start(){
    begin.addEventListener('click',function(){
    actuallyMinute = minute.value;
    actuallySecond = second.value;

     displayTime();
    
    interval= setInterval(function(){
        actuallySecond--;
        if(actuallySecond <= 0){
            if(actuallyMinute > 0){
                actuallyMinute--;
                actuallySecond = 59;
            
        }else{
            alert('fim do Cronometro')
            clearInterval(interval);
            
        }
        if(stopTime.onclick == true){
            stopTime();
        }
    }
     displayTime()
   
     
     display.childNodes[1].innerHTML = actuallyMinute+':'+actuallySecond;
    
},1000);
    
    
})}

function stopTime(){
     stop.addEventListener('click',function(){
      
    let breakSecond = actuallySecond;
    let breakMinute = actuallyMinute;
    display.childNodes[1].innerHTML = breakMinute+':'+breakSecond;

    if(onclick == true){
      start()
    }
     
    
     })
    }

function recoveryTime(){


     recovery.addEventListener('click',function(){
          actuallyMinute = 0;
          actuallySecond = 0;
         displayTime();
        start();

     })
    }
