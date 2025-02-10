const p_linker = document.getElementById("pid");
const chnagebutton = document.getElementById("changebutton");

function changeText() {
  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

chnagebutton.addEventListener('click', function(){
  changeText();
});

p_linker.addEventListener("click", function () {
  window.location.href = "http://www.cnn.com/";
});
