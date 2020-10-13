function playSound(key){
  switch (key){
    case keyCode=65: // A key
      var sound = new Audio("sounds/clap.wav");
      break;
    case keyCode=83: // S key
      var sound = new Audio("sounds/hihat.wav");
      break;
    case keyCode=68: // D key
      var sound = new Audio("sounds/kick.wav");
      break;
    case keyCode=70: // F key
      var sound = new Audio("sounds/openhat.wav");
      break;
    case keyCode=71: // G key
      var sound = new Audio("sounds/boom.wav");
      break;
    case keyCode=72: // H key
      var sound = new Audio("sounds/ride.wav");
      break;
    case keyCode=74: // J key
      var sound = new Audio("sounds/snare.wav");
      break;
    case keyCode=75: // K key
      var sound = new Audio("sounds/tom.wav");
      break;
    case keyCode=76: // L key
      var sound = new Audio("sounds/tink.wav");
      break;
    default:
      break;
  }

  if(sound)
    sound.play();
}

function removeTransition(event){
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('effect');
}

function colorKeyboard(key){
  document.querySelectorAll(".touch").forEach(function(event){
    if(key === event.firstChild.textContent){
      event.classList.add("effect");
      event.addEventListener('transitionend', removeTransition);
    }
  });
}


function drum(event){
  let keyCode = event.keyCode;
  let keyChar = event.key;
  playSound(keyCode);
  colorKeyboard(keyChar);
}

document.addEventListener("keydown", drum);