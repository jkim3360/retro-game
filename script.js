const dodger = document.querySelector('.dodger');

let mouseX = 0;
let mouseY = 0;

let dodgerX = 0;
let dodgerY = 0;

const vel = 0.7;

function animate() {
  const distX = mouseX - dodgerX;
  const distY = mouseY - dodgerY;

  dodgerX += (distX * vel);
  dodgerY += (distY * vel);

  dodger.style.left = `${dodgerX}px`;
  dodger.style.top = `${dodgerY}px`;

  requestAnimationFrame(animate);
}
animate();

document.addEventListener('click', (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;


  function turnRight() {
    if (mouseX > dodgerX && dodger.className === 'dodger image') {
      dodger.classList.toggle('right');
    }
  }
  turnRight();

  function turnLeft() {
    if (dodgerX > mouseX && dodger.className === 'dodger image right') {
      dodger.classList.toggle('right');
    }
  }
  turnLeft();
});


// prevent default
const keys = {
  37: 1, 38: 1, 39: 1, 40: 1,
};

function preventDefault(e) {
  e = window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
  { window.addEventListener('DOMMouseScroll', preventDefault, false); }
  document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
disableScroll();



function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (++timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var zero = 0,
      display = document.querySelector('#time');
  startTimer(zero, display);
};
