var mainbutton = document.getElementById("main-button");
mainbutton.onclick = function (){
  // document.getElementsByTagName("h1")[0].classList.add("hidden")
  var button = document.querySelector("#play-button");

  if(!button.classList.contains("reset")){
    button.innerHTML="<i class=\"fa fa-refresh fa-spin\" style=\"font-size:24px\"></i> Reset"
    button.classList.add("reset")
    document.getElementById("fizzbizz").innerHTML=fizzbizzstring
  }else{
    button.innerHTML="<i style=\"font-size:24px\" class=\"fa\">&#xf04b;</i> Play"
    button.classList.remove("reset")
    document.getElementById("fizzbizz").innerHTML=arr.join(",  ")
    }
}

// var restart = document.getElementById("restart");
// restart.onclick = function(){
//
//   var div = document.getElementsByClassName("hidden-button")[0];
//
//   if(mainbutton.classList.contains("hidden")){
//     div.classList.add("hidden")
//     mainbutton.classList.remove("hidden")
//
// }else{
//     mainbutton.classList.remove("hidden");
//     div.classList.remove("hidden")
//
//   }
// }


const Number = 100;
const arr = Array.from({length: Number}, (_, index) => index + 1);
const fizzbizz = arr.map(function(originalNumber,index) {
  if (originalNumber % 5 == 0 && originalNumber % 3 == 0 ) {
    return "<b><span class='text-red'>FizzBizz</span></b>";
  } else if (originalNumber % 3 == 0) {
    return "<span class='text-blue'>Fizz</span>";
  } else if ( originalNumber % 5 == 0) {
    return "<span class='text-green'>Bizz</span>";
  }
  return originalNumber;
})

const fizzbizzstring = fizzbizz.toString()
console.log(fizzbizzstring)
document.getElementById("fizzbizz").innerHTML=arr.join(", ")
