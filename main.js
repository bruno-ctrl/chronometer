
function botao(num){
    let valor = document.a.display.value;
    document.a.display.value = valor + num;
    
}

function reseta(){
    document.a.display.value ='';

}
  
function limpar(){
  var apagar = document.a.display.value;
  document.a.display.value = apagar.substring(0,apagar.length -1)
}

function calcula(){
    var resultado = document.a.display.value;
    if(resultado){
    document.a.display.value = eval(resultado);
    }
 
}
 

