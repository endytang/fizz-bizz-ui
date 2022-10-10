var mainbutton = document.getElementById("main-button");
mainbutton.onclick = function (){
  // document.getElementsByTagName("h1")[0].classList.add("hidden")
  var div = document.getElementsByClassName("hidden-button")[0];

  if(div.classList.contains("hidden")){
    mainbutton.classList.add("hidden");
    div.classList.remove("hidden");
  }else{
    div.classList.add("hidden");
    mainbutton.classList.remove("main-button");
    }
}

var restart = document.getElementById("restart");
restart.onclick = function(){

  var div = document.getElementsByClassName("hidden-button")[0];

  if(mainbutton.classList.contains("hidden")){
    div.classList.add("hidden")
    mainbutton.classList.remove("hidden")
}else{
    mainbutton.classList.remove("hidden");
    div.classList.remove("hidden")
  }
}


const Number = 100;
const arr = Array.from({length: Number}, (_, index) => index + 1);
console.log(arr);

// if( arr == 3){
//   console.log("its 3")
// }else {
//   console.log("its not 3")
// }

