var playbutton = document.getElementById("play-button");
var pausebutton = document.getElementById("pause-button")
var fizzbizzElement = document.getElementById("fizzbizz")
var switchbutton = document.getElementById("switch-button")

playbutton.onclick = function (){
  var button = document.querySelector("#play-button");

  if(!button.classList.contains("Switch")){
    // press play
    button.innerHTML="<i class=\"fa fa-refresh fa-spin\" style=\"font-size:24px\"></i> Reset"
    button.classList.add("Switch")
    pausebutton.classList.remove("hidden")
    fizzbizzElement.innerHTML=fizzbizz.join(", ")
    fizzbizzElement.classList.add("animation")
    fizzbizzElement.classList.remove("animapaused")

  }else{
    // press reset
    button.innerHTML="<i style=\"font-size:24px\" class=\"fa\">&#xf04b;</i> Play"
    fizzbizzElement.classList.remove("animation")
    button.classList.remove("Switch")
    pausebutton.classList.add("hidden")
    fizzbizzElement.innerHTML=arr.join(", ")

  }
}

switchbutton.onclick = function() {

  if ( fizzbizzElement.innerText.includes("Fizz")) {
    fizzbizzElement.innerHTML = arr.join(", ")
  } else {
    fizzbizzElement.innerHTML = fizzbizz.join(", ")
  }
}


pausebutton.onclick = function (){
  var button2 = document.querySelector("#pause-button");
  if(fizzbizzElement.classList.contains("animapaused")){
    button2.innerHTML="<i style=\"font-size:24px\" class=\"fa\">&#xf04c</i> Pause"
    fizzbizzElement.classList.remove("animapaused")
  }else{
    fizzbizzElement.classList.add("animapaused")
    button2.innerHTML="<i style=\"font-size:24px\" class=\"fa\">&#xf04b;</i> Play"
  }
}



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

// document.getElementById("fizzbizz").innerHTML=arr.join(", ")
