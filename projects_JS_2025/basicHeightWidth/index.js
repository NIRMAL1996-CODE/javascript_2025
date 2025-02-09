
function init() {
  const arrImages = new Array(3);
  //new Array is a older version to create an array, basically the number in () tells the size of array
  // In JavaScript, there is no need to tell how big an array should be. The computer will automatically grow or shrink the array by  add or remove items. It manages the memory 
  // so we can use [] as well both are correct//
//  const arrImages= [];

  arrImages[0] = document.getElementById("image1");
  arrImages[1] = document.getElementById("image2");
  arrImages[2] = document.getElementById("image3");

  const objOutput = document.getElementById("output");
  //access div element using selector//

  let strHtml = "<ul>";
  //created a string unordered list//

  for (let i = 0; i < arrImages.length; i++) {
    strHtml +=
      "<li>image" +
      (i + 1) +
      ": height=" +
      arrImages[i].height +
      ", width=" +
      arrImages[i].width +
      ", style.height=" +
      arrImages[i].style.height +
      ", style.width=" +
      arrImages[i].style.width +
      "</li>";
  }
  //o/p <ul><li>image1: height= , width= , style.height= , style.width= </li></ul>
  //    <ul><li>image1: height= , width= , style.height= , style.width= </li></ul>
 //     <ul><li>image1: height= , width= , style.height= , style.width= </li></ul>


  strHtml += "</ul>";

  objOutput.innerHTML = strHtml;
}