/* eslint-disable */



//index.html landing
const messageIndex = document.querySelector('.messageIndex')
var trumpPic = document.getElementById('trumpPic')

setTimeout(() => { messageIndex.innerHTML = 'hurry, before the music ends' }, 4000)
setTimeout(() => { messageIndex.innerHTML = "show everyone you're not a n00b" }, 8000)
setTimeout(() => { messageIndex.innerHTML = 'if u dunno wat a n00b is' }, 12000)
setTimeout(() => { messageIndex.innerHTML = "it's because ur a n00b" }, 16000)
setTimeout(() => { messageIndex.innerHTML = "lol" }, 18000)
setTimeout(() => { messageIndex.innerHTML = "lawl" }, 20000)
setTimeout(() => { messageIndex.innerHTML = "LOL" }, 22000)
setTimeout(() => { messageIndex.innerHTML = "aite" }, 24000)
setTimeout(() => { messageIndex.innerHTML = "just kidding" }, 27000)
setTimeout(() => { messageIndex.innerHTML = "u can do it" }, 30000)
setTimeout(() => { messageIndex.innerHTML = "let's go!!" }, 33000)


//main.html
const pikachu = document.querySelector('.pikachu')
const dodger = document.querySelector('.dodger');
const star = document.querySelector('.star');
let trump = document.querySelector('.trump');
const sword = document.querySelector('.sword');
const sky = document.querySelector('.sky')
const message = document.querySelector('.message')
// const heart = document.querySelector('.heart')


// for (let i = 0; i < 3; i++) {
// function takeHeart() {
//   document.querySelector('.heart')
//   const heartDiv = document.createElement('div')
//   heartDiv.className = 'heart'
//   document.querySelector('.sky').appendChild(heartDiv)
// }
// takeHeart()
// }

// let enemies = [trump, sword, star]

//dodger movement
let mouseX = 150;
let mouseY = 250;
let dodgerX = 0;
let dodgerY = 0;
const vel = 1;

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

//timer
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

//score
const score = document.getElementById('scoreId').textContent;
// get the starting score '0000'
let intScore = parseInt(score);
// sets score str to integer



// const time = document.getElementById('time').textContent;
setInterval(() => {
  intScore += 1;
  if (intScore.toString().length == 2) {
    document.getElementById("scoreId").innerHTML = '00' + intScore
  } else if (intScore.toString().length == 3) {
    document.getElementById("scoreId").innerHTML = '0' + intScore
  }
  else if (intScore.toString().length == 4) {
    document.getElementById("scoreId").innerHTML = intScore.toString()
  }
  else {
    document.getElementById("scoreId").innerHTML = '000' + intScore
  }
}, 500);

// sound effects-----------------------------------------------------------------

function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  }
  this.stop = function () {
    this.sound.pause();
  }
}

const soundHit = new Sound('sounds/spring.wav')
//https://www.sounds-resource.com/snes/
// -----------------------------------------------------------------

let dodgerStyles = window.getComputedStyle(dodger)
let trumpStyles = window.getComputedStyle(trump)
let swordStyles = window.getComputedStyle(sword)
let starStyles = window.getComputedStyle(star)
// let heartStyles = window.getComputedStyle(heart)


dodger.style.top = "0px";
dodger.style.height = "100px";
trump.style.top = Math.random() * 600 + 'px';
trump.style.height = "60px"
setInterval(() => {sword.style.top = Math.random() * 650 + 'px';},4000)
sword.style.height = "-100px";
star.style.top = "25px";
star.style.height = "75px"; 
setInterval(() => {starStyles.left = Math.random() * 1000 + 'px';}, 2250)

// heart.style.top = "25px";
// heart.style.height = "10%px";


















//For every 33ms (about 30fps)
setInterval(function () {
  //Define boundaries

  var dodgerTop = parseInt(dodgerStyles.top),
    dodgerHeight = parseInt(dodgerStyles.height);
  dodgerLeft = parseInt(dodgerStyles.left);
  dodgerWidth = parseInt(dodgerStyles.width);



  var trumpTop = parseInt(trump.style.top),
    trumpHeight = parseInt(trump.style.height);
  trumpLeft = parseInt(trumpStyles.left);
  trumpWidth = parseInt(trumpStyles.width);

  var swordTop = parseInt(swordStyles.top),
    swordHeight = parseInt(swordStyles.height);
  swordLeft = parseInt(swordStyles.left);
  swordWidth = parseInt(swordStyles.width);

  var starTop = parseInt(starStyles.top),
    starHeight = parseInt(starStyles.height);
  starLeft = parseInt(starStyles.left);
  starWidth = parseInt(starStyles.width);
  // If character gets hit:

  // var heartTop = parseInt(heartStyles.top),
  //   heartHeight = parseInt(heartStyles.height);
  // heartLeft = parseInt(heartStyles.left);
  // heartWidth = parseInt(heartStyles.width);


  if ((dodgerTop + dodgerHeight > trumpTop) && (dodgerLeft + dodgerWidth > trumpLeft)
    && (dodgerLeft < trumpLeft + trumpWidth) && (dodgerTop < trumpTop + trumpHeight)) {
    soundHit.play()
    let health = document.getElementById("health")
    health.value -= 33;
    setTimeout(() => { dodger.classList.toggle('flash') }, 1000)
    dodger.classList.toggle('flash')
    setTimeout(() => { sky.removeChild(trump) }, 15)
    intScore -= 5
    setTimeout(() => { message.innerHTML = 'srsly? make America \n great again?' }, 100)
    setTimeout(() => { message.innerHTML = 'u noob' }, 3000)
    setTimeout(() => { message.innerHTML = "i don't even know" }, 3000)
    // setTimeout(function () {
    //   let newTrump = document.createElement('div')
    //   newTrump.className = 'trump'
    //   sky.appendChild(newTrump)
    // }, 2000)
  }

  if ((dodgerTop + dodgerHeight > swordTop) && (dodgerLeft + dodgerWidth > swordLeft)
    && (dodgerLeft < swordLeft + swordWidth) && (dodgerTop < swordTop + swordHeight)) {
    soundHit.play()
    health.value -= 33
    setTimeout(() => { dodger.classList.toggle('flash') }, 200)
    dodger.classList.toggle('flash')
    setTimeout(() => { sky.removeChild(sword) }, 5)
    intScore -= 5
    setTimeout(() => { message.innerHTML = 'dude, your score..' }, 100)
    setTimeout(() => { message.innerHTML = "u noob" }, 4000)
  }

  if ((dodgerTop + dodgerHeight > starTop) && (dodgerLeft + dodgerWidth > starLeft)
    && (dodgerLeft < starLeft + starWidth) && (dodgerTop < starTop + starHeight)) {
    soundHit.play()
    health.value -= 33
    setTimeout(() => { dodger.classList.toggle('flash') }, 1000)
    dodger.classList.toggle('flash')
    setTimeout(() => { sky.removeChild(star) }, 15)
    intScore -= 5
    setTimeout(() => { message.innerHTML = "your skillz are basic" }, 100)
  }



  // setInterval(function(){console.log(dodger.style.top)}, 250)

  //Set the character's final position    

  function position(element, elementTop, elementLeft, elementWidth, elementHeight) {
    element.style.top = elementTop + "px";
    element.style.left = elementLeft + "px";
    element.style.height = elementHeight + "px";
    element.style.width = elementWidth + "px";
  }

  position(dodger, dodgerTop, dodgerLeft, dodgerWidth, dodgerHeight)
  // position(trump, trumpTop, trumpLeft, trumpWidth, trumpHeight)
  // position(sword, swordTop, swordLeft, swordWidth, swordHeight)
  // position(star, starTop, starLeft, starWidth, starHeight)

}, 200);


  // if (health.value < 100) {
  //   alert('you lose')
  //   clearInterval(lose)
  // }

  // dodger.style.top = dodgerTop + "px";
  // dodger.style.left = dodgerLeft + "px";
  // dodger.style.width = dodgerWidth + "px";
  // dodger.style.height = dodgerHeight + "px";
  // trump.style.top = trumpTop + 'px'
  // trump.style.left = trumpLeft + 'px'
  // trump.style.width = trumpWidth + 'px'
  // trump.style.height = trumpHeight + 'px'
  // sword.style.top = swordTop + 'px'
  // sword.style.left = swordLeft + 'px'
  // sword.style.width = swordWidth + 'px'
  // sword.style.height = swordHeight + 'px'
  // star.style.top = starTop + 'px'
  // star.style.left = starLeft + 'px'
  // star.style.width = starWidth + 'px'
  // star.style.height = starHeight + 'px'










// function collide() {
//   setInterval(() =>{if (dodger.offsetLeft === trump.offsetLeft)
//   {console.log('hit')}
// }, )
// }
// collide()

// setInterval(() => {

//   var ac = dodger.getBoundingClientRect(); // coordinates for element 'a'
//   var bc = trump.getBoundingClientRect(); // and 'b'

// // assuming both boxes are same size...
// // if not, use your existing collision code.

// if(Math.abs(ac.top - bc.top) < ac.height && Math.abs(ac.left - bc.left) < ac.width) {

//     if(Math.abs(ac.top - bc.top) < Math.abs(ac.left - bc.left)) {
//     // vartical offset is smaller, so snap 'y's

//         if(ac.top < bc.top) { // a is above b, so snap a's bottom to b's top
//             ac.style.top = bc.top - ac.height - 1 + 'px';
//         }
//         else {
//             ac.style.top = bc.top + bc.height + 1 + 'px';
//         }

//     }
//     else { // here, horizontal offset is smaller, so snap 'x's

//         if(ac.left < bc.left) { // a is to the left of b, so snap a's right to b's left
//             ac.style.left = bc.left - ac.width - 1 + 'px';
//         }
//         else {
//             ac.style.left = bc.left + bc.width + 1 + 'px';
//         }

//     }

// }
// }, 250)


// // https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
// function getPos(element) {
//   // yay readability
//   for (var elementX = 0, elementY = 0;
//     element != null;
//     elementX += element.offsetLeft, elementY += element.offsetTop, element = element.offsetParent);
//   return { x: elementX, y: elementY };
// }
// // setInterval(function () { document.querySelector('.link')}, 3000);