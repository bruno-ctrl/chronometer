var display = document.getElementById('display');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var resume = document.getElementById('resume');


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

  start.addEventListener('click',function (){
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
            alert('end of the timer')
            clearInterval(interval);
            
        }
    } 
        displayTime();
    
},1000);
  
  })

stop.addEventListener('click',function(){
     clearInterval(interval);
     
})
   

resume.addEventListener('click',function(){
    clearInterval(interval);
    actuallySecond = 0;
    actuallyMinute = 0;
    display.childNodes[1].innerHTML = actuallyMinute+':'+actuallySecond;
   
})

    
     
    
