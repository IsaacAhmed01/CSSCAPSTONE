let btn = documeht.querySelector("#button");


function changeButtonColor()
{
    // change button color
    btn.background = "blue";
}


btn.onmouseover = changeButtonColor;


function mOver(obj) {
    obj.innerHTML = "Yo Momma"
    obj.style.background = "green";
  }
  
  function mOut(obj) {
    obj.innerHTML = "Baby Yoda"
    obj.style.background = "red";
  }
