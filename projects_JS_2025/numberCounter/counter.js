const output =document.getElementById('output');
const add =document.getElementById('add');
const subtract= document.getElementById('subtract');
const clear =document.getElementById('clearResult');

add.addEventListener('click', function(){
  output.innerText = parseInt(output.innerText) + 1;
});

subtract.addEventListener('click', function(){
  output.innerText = parseInt(output.innerText) - 1;
  if(output.innerText <0){
    console.log('error');
    output.innerText = '0';
  }
});

clear.addEventListener('click', function(){
 output.innerText='0';
});