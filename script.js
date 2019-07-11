/* eslint-disable */

const dodger = document.querySelector('.dodger');
const star = document.querySelector('.star');
let trump = document.querySelector('.trump');
const sword = document.querySelector('.sword');

//dodger movement
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


// -----------------------------------------------------------------




dodger.style.top = "0px";
dodger.style.height = "100px";
trump.style.top = "500px";
trump.style.height = "60px";
sword.style.top = "500px";
sword.style.height = "-100px";
star.style.top = "25px";
star.style.height = "10%px";

let dodgerStyles = window.getComputedStyle(dodger)
let trumpStyles = window.getComputedStyle(trump)
let swordStyles = window.getComputedStyle(sword)
let starStyles = window.getComputedStyle(star)

//For every 33ms (about 30fps)
const hit = setInterval(function () {

  //Get the height and position of the player
  var dodgerTop = parseInt(dodgerStyles.top),
  dodgerHeight = parseInt(dodgerStyles.height);
  dodgerLeft = parseInt(dodgerStyles.left);
  dodgerWidth = parseInt(dodgerStyles.width);

  //and the top of the ground
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

  //linear gravity? Why now?
  trumpTop -= 1

  // If character gets hit:

  if ((dodgerTop + dodgerHeight > trumpTop) && (dodgerLeft + dodgerWidth > trumpLeft)
    && (dodgerLeft < trumpLeft + trumpWidth) && (dodgerTop < trumpTop + trumpHeight)) {
    setTimeout(() => { document.querySelector('.dodger').classList.toggle('flash') }, 1000)
    document.querySelector('.dodger').classList.toggle('flash')
    setTimeout(() => { document.querySelector('.sky').removeChild(trump) }, 15)
    intScore -= 5
    setTimeout(function( ){
    let newTrump = document.createElement('div')
    newTrump.className = 'trump'
    document.querySelector('.sky').appendChild(newTrump)}, 2000)
  }

  if ((dodgerTop + dodgerHeight > swordTop) && (dodgerLeft + dodgerWidth > swordLeft)
  && (dodgerLeft < swordLeft + swordWidth) && (dodgerTop < swordTop + swordHeight)) {
  setTimeout(() => { document.querySelector('.dodger').classList.toggle('flash') }, 1000)
  document.querySelector('.dodger').classList.toggle('flash')
  setTimeout(() => { document.querySelector('.sky').removeChild(sword) }, 15)
  intScore -= 5
}

  if ((dodgerTop + dodgerHeight > starTop) && (dodgerLeft + dodgerWidth > starLeft)
  && (dodgerLeft < starLeft + starWidth) && (dodgerTop < starTop + starHeight)) {
  setTimeout(() => { document.querySelector('.dodger').classList.toggle('flash') }, 1000)
  document.querySelector('.dodger').classList.toggle('flash')
  setTimeout(() => { document.querySelector('.sky').removeChild(star) }, 15)
  intScore -= 5
  }

  // setInterval(function(){console.log(dodger.style.top)}, 250)

  //Set the character's final position    
  dodger.style.top = dodgerTop + "px";
  dodger.style.left = dodgerLeft + "px";
  dodger.style.width = dodgerWidth + "px";
  dodger.style.height = dodgerHeight + "px";
  trump.style.top = trumpTop + 'px'
  trump.style.left = trumpLeft + 'px'
  trump.style.width = trumpWidth + 'px'
  trump.style.height = trumpHeight + 'px'
  sword.style.top = swordTop + 'px'
  sword.style.left = swordLeft + 'px'
  sword.style.width = swordWidth + 'px'
  sword.style.height = swordHeight + 'px'
  star.style.top = starTop + 'px'
  star.style.left = starLeft + 'px'
  star.style.width = starWidth + 'px'
  star.style.height = starHeight + 'px'


}, 200);







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