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
const fizzbizz = arr.map(function(originalNumber,index) {
  if (originalNumber % 5 == 0 && originalNumber % 3 == 0 ) {
    return "Fizzbizz"
  } else if (originalNumber % 3 == 0) {
    return "Fizz"
  } else if ( originalNumber % 5 == 0) {
    return "Bizz";
  }
  return originalNumber;
})
console.log(fizzbizz);






