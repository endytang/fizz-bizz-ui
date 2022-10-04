console.log("hello world")
var mainbutton = document.getElementById("main-button")
mainbutton.onclick=function (){
  // document.getElementsByTagName("h1")[0].classList.add("hidden")
  var h1 = document.getElementsByTagName("h1")[0];
  if(h1.classList.contains("hidden")){
    h1.classList.remove("hidden")
    mainbutton.innerText="hide title"
  }else{
    h1.classList.add("hidden")
    mainbutton.innerText="show title"
  }
}
