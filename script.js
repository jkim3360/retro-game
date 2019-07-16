/* eslint-disable */

// ---------------index.html landing - troll msgs---------------

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

// ---------------main.html---------------
// global variables
const body = document.body;
const goku = document.querySelector('.goku');
const dodger = document.querySelector('.dodger');
const star = document.querySelector('.star');
const trump = document.querySelector('.trump');
const sword = document.querySelector('.sword');
const sky = document.querySelector('.sky');
const message = document.querySelector('.message');
const heart = document.querySelector('.heart');
const fire = document.querySelector('.fire')
const wily = document.querySelector('.wily');
const cactuar = document.querySelector('.cactuar');


// Dodger movement
let mouseX = 150;
let mouseY = 250;
let dodgerX = 0;
let dodgerY = 0;
const vel = .9;

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

// Move dodger using click
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

// Prevent default scrolling
const keys = {
  37: 1, 38: 1, 39: 1, 40: 1,
};

function preventDefault(event) {
  event = window.event;
  if (event.preventDefault) event.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(event) {
  if (keys[event.keyCode]) {
    preventDefault(event);
    return false;
  }
}
disableScroll();

// Timer
const startTimer = function (duration, display) {
  let timer = duration; let minutes; let
    seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    display.textContent = `${minutes}:${seconds}`;

    if (++timer < 0) {
      timer = duration;
    }
  }, 1000);
  return timer;
};

window.onload = function () {
  const zero = 0;
  const display = document.querySelector('#time');
  startTimer(zero, display);
};


// score
const score = document.getElementById('scoreId').textContent;
// get the starting score '0000'
let intScore = parseInt(score);
// sets score str to integer

setInterval(() => {
  intScore += 1;
  if (intScore.toString().length == 2) {
    document.getElementById('scoreId').innerHTML = `00${intScore}`;
  } else if (intScore.toString().length == 3) {
    document.getElementById('scoreId').innerHTML = `0${intScore}`;
  } else if (intScore.toString().length == 4) {
    document.getElementById('scoreId').innerHTML = intScore.toString();
  } else {
    document.getElementById('scoreId').innerHTML = `000${intScore}`;
  }
}, 500);

// sound effects constructor-----------------------------------------------------------------

function Sound(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

const soundHit = new Sound('sounds/spring.wav');
// https://www.sounds-resource.com/snes/

const soundHeart = new Sound('sounds/heartsound.mp3');


//store name in local storage
function gameId() {
  const gameId = document.createTextNode(localStorage.getItem('Game ID'));
  const gameIdSign = document.createElement('div');
  gameIdSign.appendChild(gameId);
  sky.appendChild(gameIdSign);
  gameIdSign.style.position = 'absolute';
  gameIdSign.style.left = '4.5%';
  gameIdSign.style.fontSize = '21px';
  gameIdSign.style.top = '18%';
  gameIdSign.style.textShadow = '3px 3px #e0ffff';
  gameIdSign.style.color = '#000000';
  gameIdSign.style.margin = '0px';
  gameIdSign.style.zIndex = '2';
}
gameId();

// get computed styles
const dodgerStyles = window.getComputedStyle(dodger);
const trumpStyles = window.getComputedStyle(trump);
const swordStyles = window.getComputedStyle(sword);
const starStyles = window.getComputedStyle(star);
const heartStyles = window.getComputedStyle(heart);
const gokuStyles = window.getComputedStyle(goku);
const fireStyles = window.getComputedStyle(fire);
const wilyStyles = window.getComputedStyle(wily);
const cactuarStyles = window.getComputedStyle(cactuar);


// Sprite positions
trump.style.top = `${Math.random() * 600}px`;
fire.style.top = `${Math.random() * 1300}px`;
setInterval(() => { sword.style.top = `${Math.random() * 650}px`; }, 4000);
heart.style.top = `${Math.random() * 600}px`;
goku.style.top = `${Math.random() * window.innerHeight}px`;
fire.style.left = `${Math.random() * 1400}px`
setInterval(() => { }, 12000);

// For every 33ms (about 30fps)
const runGame = setInterval(() => {
  // Sprite dimensions and boundaries

  const dodgerTop = parseInt(dodgerStyles.top);
  const dodgerHeight = parseInt(dodgerStyles.height);
  const dodgerLeft = parseInt(dodgerStyles.left);
  const dodgerWidth = parseInt(dodgerStyles.width);

  const trumpTop = parseInt(trumpStyles.top);
  const trumpHeight = parseInt(trumpStyles.height);
  const trumpLeft = parseInt(trumpStyles.left);
  const trumpWidth = parseInt(trumpStyles.width);

  const swordTop = parseInt(swordStyles.top);
  const swordHeight = parseInt(swordStyles.height);
  const swordLeft = parseInt(swordStyles.left);
  const swordWidth = parseInt(swordStyles.width);

  const starTop = parseInt(starStyles.top);
  const starHeight = parseInt(starStyles.height);
  const starLeft = parseInt(starStyles.left);
  const starWidth = parseInt(starStyles.width);

  const heartTop = parseInt(heartStyles.top);
  const heartHeight = parseInt(heartStyles.height);
  const heartLeft = parseInt(heartStyles.left);
  const heartWidth = parseInt(heartStyles.width);

  const wilyTop = parseInt(wilyStyles.top);
  const wilyHeight = parseInt(wilyStyles.height);
  const wilyLeft = parseInt(wilyStyles.left);
  const wilyWidth = parseInt(wilyStyles.width);

  const fireTop = parseInt(fireStyles.top);
  const fireHeight = parseInt(fireStyles.height);
  const fireLeft = parseInt(fireStyles.left);
  const fireWidth = parseInt(fireStyles.width);

  const cactuarTop = parseInt(cactuarStyles.top);
  const cactuarHeight = parseInt(cactuarStyles.height);
  const cactuarLeft = parseInt(cactuarStyles.left);
  const cactuarWidth = parseInt(cactuarStyles.width);


  // If character gets hit:
  if ((dodgerTop + dodgerHeight > trumpTop) && (dodgerLeft + dodgerWidth > trumpLeft)
    && (dodgerLeft < trumpLeft + trumpWidth) && (dodgerTop < trumpTop + trumpHeight)) {
    soundHit.play();
    health.value -= 10;
    setTimeout(() => { dodger.classList.toggle('flash'); }, 1000);
    dodger.classList.toggle('flash');
    setTimeout(() => { sky.removeChild(trump); }, 15);
    intScore -= 5;
    setTimeout(() => { message.innerHTML = 'srsly? make America \n great again?'; }, 100);
    setTimeout(() => { message.innerHTML = "i don't even know"; }, 3000);
  }

  if ((dodgerTop + dodgerHeight > swordTop) && (dodgerLeft + dodgerWidth > swordLeft)
    && (dodgerLeft < swordLeft + swordWidth) && (dodgerTop < swordTop + swordHeight)) {
    soundHit.play();
    health.value -= 15;
    setTimeout(() => { dodger.classList.toggle('flash'); }, 200);
    dodger.classList.toggle('flash');
    intScore -= 5;
    setTimeout(() => { message.innerHTML = 'dude, your score..'; }, 100);
    setTimeout(() => { message.innerHTML = 'u noob'; }, 4000);
    sword.classList.toggle('sword');
    setTimeout(() => { sword.classList.toggle('sword'); }, 1000);
    setInterval(() => { sword.style.top = `${Math.random() * 650}px`; }, 5000);
  }

  if ((dodgerTop + dodgerHeight > starTop) && (dodgerLeft + dodgerWidth > starLeft)
    && (dodgerLeft < starLeft + starWidth) && (dodgerTop < starTop + starHeight)) {
    soundHit.play();
    health.value -= 10;
    setTimeout(() => { dodger.classList.toggle('flash'); }, 1000);
    dodger.classList.toggle('flash');
    intScore -= 5;
    setTimeout(() => { message.innerHTML = 'ur skillz are basic'; }, 100);
    star.classList.toggle('star');
    setTimeout(() => { star.classList.toggle('star'); }, 1000);
    star.style.top = `${Math.random() * 1400}px`;
  }

  if ((dodgerTop + dodgerHeight > fireTop) && (dodgerLeft + dodgerWidth > fireLeft)
    && (dodgerLeft < fireLeft + fireWidth) && (dodgerTop < fireTop + fireHeight)) {
    soundHit.play();
    health.value -= 5
    setTimeout(() => { dodger.classList.toggle('flash'); }, 1000);
    dodger.classList.toggle('flash');
    intScore -= 5;
    setTimeout(() => { message.innerHTML = 'aloe'; }, 100);
  }

  if ((dodgerTop + dodgerHeight > wilyTop) && (dodgerLeft + dodgerWidth > wilyLeft)
    && (dodgerLeft < wilyLeft + wilyWidth) && (dodgerTop < wilyTop + wilyHeight)) {
    soundHit.play();
    health.value -= 10
    setTimeout(() => { dodger.classList.toggle('flash'); }, 1000);
    dodger.classList.toggle('flash');
    intScore -= 5;
    setTimeout(() => { message.innerHTML = "if you type 'cheat codes' you automatically win"; }, 100);
  }

  if ((dodgerTop + dodgerHeight > cactuarTop) && (dodgerLeft + dodgerWidth > cactuarLeft)
    && (dodgerLeft < cactuarLeft + cactuarWidth) && (dodgerTop < cactuarTop + cactuarHeight)) {
    soundHit.play();
    health.value -= 75
    setTimeout(() => { dodger.classList.toggle('flash'); }, 1000);
    dodger.classList.toggle('flash');
    intScore -= 10;
    message.innerHTML = "you've been spiked by cactuar!";
  }

  function createHeart() {
    if ((dodgerTop + dodgerHeight > heartTop) && (dodgerLeft + dodgerWidth > heartLeft)
      && (dodgerLeft < heartLeft + heartWidth) && (dodgerTop < heartTop + heartHeight)) {
      soundHeart.play();
      health.value += 20;
      intScore += 20;
      heart.classList.toggle('heart');
      setTimeout(() => { heart.classList.toggle('heart'); }, 3000);
      heart.style.top = `${Math.random() * 600}px`;
    }
  }
  createHeart();

  function position(element, elementTop, elementLeft, elementWidth, elementHeight) {
    element.style.top = `${elementTop}px`;
    element.style.left = `${elementLeft}px`;
    element.style.height = `${elementHeight}px`;
    element.style.width = `${elementWidth}px`;
  }

  position(dodger, dodgerTop, dodgerLeft, dodgerWidth, dodgerHeight);

  if (health.value < 1) {
    localStorage.setItem('Score', intScore);
    setTimeout(() => { message.innerHTML = "you died!"; }, 100)
    setTimeout(() => { window.location.href = 'highscore.html'; }, 3000)
  }
}, 200);

