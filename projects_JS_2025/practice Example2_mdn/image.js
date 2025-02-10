const image= document.getElementById('image');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function setBorderWidth(width){
  image.style.borderWidth = width + "px";
}

button1.addEventListener("click", function(){
  setBorderWidth(30);
});
button2.addEventListener("click", function(){
  setBorderWidth(5)
});