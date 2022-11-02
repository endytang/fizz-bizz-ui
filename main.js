var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button")
var fizzbizzElement = document.getElementById("fizzbizz")
var switchButton = document.getElementById("switch-button")

function getFizzBizzString(number) {
  const arr = Array.from({length: number}, (_, index) => index + 1);
  const fizzbizz = arr.map(function(originalNumber,index) {
    if (originalNumber % 5 == 0 && originalNumber % 3 == 0 ) {
      return "<b><span class='text-red'>FizzBizz</span></b>";
    } else if (originalNumber % 3 == 0) {
      return "<span class='text-blue'>Fizzbb</span>";
    } else if ( originalNumber % 5 == 0) {
      return "<span class='text-green'>Bizz</span>";
    }
    return originalNumber;
  })

  return fizzbizz.join(', ')
}


function getArrString(number){
  const arr = Array.from({length: number}, (_, index) => index + 1);

  return arr.join(", ")
}

playButton.onclick = function (){
  var button = document.querySelector("#play-button");
  var currNumber = document.getElementById("newvalue").value;

  if(!button.classList.contains("Switch")){
    // press play
    button.innerHTML="<i class=\"fa fa-refresh fa-spin\" style=\"font-size:24px\"></i> Reset"
    button.classList.add("Switch")
    pauseButton.classList.remove("hidden")
    fizzbizzElement.innerHTML=getFizzBizzString(currNumber)
    fizzbizzElement.classList.add("animation")
    fizzbizzElement.classList.remove("animapaused")

  }else{
    // press reset
    button.innerHTML="<i style=\"font-size:24px\" class=\"fa\">&#xf04b;</i> Play"
    fizzbizzElement.classList.remove("animation")
    button.classList.remove("Switch")
    pauseButton.classList.add("hidden")
    fizzbizzElement.innerHTML=getArrString(currNumber)

  }
}


switchButton.onclick = function() {
  var currNumber = document.getElementById("newvalue").value;
  if ( fizzbizzElement.innerText.includes("Fizz")) {
    fizzbizzElement.innerHTML = getArrString(currNumber)
  } else {
    fizzbizzElement.innerHTML = getFizzBizzString(currNumber)
  }
}


pauseButton.onclick = function (){
  var button2 = document.querySelector("#pause-button");
  if(fizzbizzElement.classList.contains("animapaused")){
    button2.innerHTML="<i style=\"font-size:24px\" class=\"fa\">&#xf04c</i> Pause"
    fizzbizzElement.classList.remove("animapaused")
  }else{
    fizzbizzElement.classList.add("animapaused")
    button2.innerHTML="<i style=\"font-size:24px\" class=\"fa\">&#xf04b;</i> Play"
  }
}

var reverseButton = document.getElementById("animation-reverse")
reverseButton.onclick = function (){
  if(!fizzbizzElement.classList.contains("animationreverse")){
    fizzbizzElement.classList.add("animationreverse")
  }else{
    fizzbizzElement.classList.remove("animationreverse")
  }
}

function getNewCombo() {
  var newNumber = document.getElementById("newvalue").value;
  var fizzbizz = getArrString(newNumber)
  fizzbizzElement.innerHTML = fizzbizz
}
