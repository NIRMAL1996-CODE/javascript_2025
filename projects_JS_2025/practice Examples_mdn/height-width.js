
 function heightwidth(){
  const output = document.getElementById('output');
  const arrayImages =[];
  arrayImages[0] = document.getElementById('image1');
  arrayImages[1] = document.getElementById('image2');
  arrayImages[2] = document.getElementById('image3');

 let stringHTML ="<ul>";

 for(let i=0; i<arrayImages.length; i++ ){

  stringHTML+= 
  "<li>image" + (i+1) + " height=" + arrayImages[i].height + " width=" + arrayImages[i].width +
    " style.height=" + arrayImages[i].style.height +  " style.width=" + arrayImages[i].style.width + "</li>"
 }

 stringHTML += "</ul>";
 output.innerHTML = stringHTML;
}