
const backgroundcolor =document.getElementById('changeBackgroundColor');
const textColor =document.getElementById('changeTextColor');

const color = ['red', 'purple', 'yellow', 'green', 'pink', 'blue'];

function changecolor(parameter){
  const randomNum= Math.floor(Math.random()*color.length);
  document.body.style[parameter]= color[randomNum];
};

backgroundcolor.addEventListener('click',function(){
  changecolor('backgroundColor');
});

textColor.addEventListener('click', function(){
  changecolor('color');
});