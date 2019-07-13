/* eslint-disable */


//index.html landing - troll msgs
const messageIndex = document.querySelector('.messageIndex')

function disableScroll() {
  if (window.addEventListener) // older FF
  { window.addEventListener('DOMMouseScroll', preventDefault, false); }
  document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
disableScroll()

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
const heart = document.querySelector('.heart')












// setInterval(function takeHeart() {
//   // for (let i = 0; i < 1; i++) {

//       let heart = document.querySelectorAll('.heart')
//       const heartDiv = document.createElement('div')
//       heartDiv.className = 'heart'
//       document.querySelector('.sky').appendChild(heartDiv)
//       heartDiv.style.top = Math.random() * window.innerHeight + "px";

//       const dodgerStyles = window.getComputedStyle(dodger)



//       const heartStyles = window.getComputedStyle(heartDiv)

//       const heartTop = parseInt(heartStyles.top)
//       const heartHeight = parseInt(heartStyles.height);
//       const heartLeft = parseInt(heartStyles.left);
//       const heartWidth = parseInt(heartStyles.width);

//       if ((dodgerTop + dodgerHeight > heartTop) && (dodgerLeft + dodgerWidth > heartLeft)
//       && (dodgerLeft < heartLeft + heartWidth) && (dodgerTop < heartTop + heartHeight)) {
//       soundHit.play()
//       health.value += 20;
//       setTimeout(() => { dodger.classList.toggle('flash') }, 1000)
//       dodger.classList.toggle('flash')
//       setTimeout(() => { sky.removeChild(heartDiv) }, 15)
//       intScore += 5
//       setTimeout(() => { message.innerHTML = 'srsly? make America \n great again?' }, 100)
//       setTimeout(() => { message.innerHTML = 'u noob' }, 3000)
//       setTimeout(() => { message.innerHTML = "i don't even know" }, 3000)
//     // }
//   }
//     // heartDiv.style.left = Math.random() * window.innerWidth + "px";
//   }, 1000)



// use this for fireballs

// setInterval(function takeHeart() {
//   for (let i = 0; i < 1; i++) {

//       document.querySelector('.heart')
//       const heartDiv = document.createElement('div')
//       heartDiv.className = 'heart'
//       document.querySelector('.sky').appendChild(heartDiv)
//       heartDiv.style.top = Math.random() * window.innerHeight + "px";










//Dodger movement
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


//Move dodger using click
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

// sound effects constructor-----------------------------------------------------------------

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
// function createHearts() {
// const heartDiv = document.createElement('div')
// document.querySelector('.sky').appendChild(heartDiv)
// heartDiv.classList.add('heart')
// heartDiv.style.top = Math.random() * window.innerHeight + "px";
// }
// hearts()


let dodgerStyles = window.getComputedStyle(dodger)
let trumpStyles = window.getComputedStyle(trump)
let swordStyles = window.getComputedStyle(sword)
let starStyles = window.getComputedStyle(star)
let heartStyles = window.getComputedStyle(heart)



// DELETE THE FOLLOWING
// dodger.style.top = "0px";
// dodger.style.height = "100px";
// sword.style.height = "-100px";
// star.style.height = "75px"; 
// star.style.top = "25px";
// star.style.top = "60px";
// star.style.height = "75px"; 
// trump.style.height = "60px"



// Sprite positions

trump.style.top = Math.random() * 600 + "px";
setInterval(() => { sword.style.top = Math.random() * 650 + 'px'; }, 4000)
heart.style.top = Math.random() * 600 + "px";
// setInterval(() => { starStyles.left = Math.random() * 1000 + 'px'; }, 2250)




//For every 33ms (about 30fps)
const runGame = setInterval(function () {
  //Sprite dimensions and boundaries

  const dodgerTop = parseInt(dodgerStyles.top)
  const dodgerHeight = parseInt(dodgerStyles.height);
  const dodgerLeft = parseInt(dodgerStyles.left);
  const dodgerWidth = parseInt(dodgerStyles.width);

  const trumpTop = parseInt(trumpStyles.top)
  const trumpHeight = parseInt(trumpStyles.height);
  const trumpLeft = parseInt(trumpStyles.left);
  const trumpWidth = parseInt(trumpStyles.width);

  const swordTop = parseInt(swordStyles.top)
  const swordHeight = parseInt(swordStyles.height);
  const swordLeft = parseInt(swordStyles.left);
  const swordWidth = parseInt(swordStyles.width);

  const starTop = parseInt(starStyles.top)
  const starHeight = parseInt(starStyles.height);
  const starLeft = parseInt(starStyles.left);
  const starWidth = parseInt(starStyles.width);

  const heartTop = parseInt(heartStyles.top)
  const heartHeight = parseInt(heartStyles.height);
  const heartLeft = parseInt(heartStyles.left);
  const heartWidth = parseInt(heartStyles.width);





  // If character gets hit:
  if ((dodgerTop + dodgerHeight > trumpTop) && (dodgerLeft + dodgerWidth > trumpLeft)
    && (dodgerLeft < trumpLeft + trumpWidth) && (dodgerTop < trumpTop + trumpHeight)) {
    soundHit.play()
    health.value -= 20;
    setTimeout(() => { dodger.classList.toggle('flash') }, 1000)
    dodger.classList.toggle('flash')
    setTimeout(() => { sky.removeChild(trump) }, 15)
    intScore -= 5
    setTimeout(() => { message.innerHTML = 'srsly? make America \n great again?' }, 100)
    setTimeout(() => { message.innerHTML = 'u noob' }, 3000)
    setTimeout(() => { message.innerHTML = "i don't even know" }, 3000)
    // setTimeout(function () {
    // let newTrump = document.createElement('div')
    // newTrump.className = 'trump'
    // sky.appendChild(newTrump)
    // newTrump = trump
    // }, 2000)
  }

  if ((dodgerTop + dodgerHeight > swordTop) && (dodgerLeft + dodgerWidth > swordLeft)
    && (dodgerLeft < swordLeft + swordWidth) && (dodgerTop < swordTop + swordHeight)) {
    soundHit.play()
    health.value -= 35
    setTimeout(() => { dodger.classList.toggle('flash') }, 200)
    dodger.classList.toggle('flash')
    // setTimeout(() => { sky.removeChild(sword) }, 5)
    intScore -= 5
    setTimeout(() => { message.innerHTML = 'dude, your score..' }, 100)
    setTimeout(() => { message.innerHTML = "u noob" }, 4000)
    sword.classList.toggle('sword')
  setTimeout(()=> {sword.classList.toggle('sword')},1000)
  setInterval(() => { sword.style.top = Math.random() * 650 + 'px'; }, 5000)
  }

  if ((dodgerTop + dodgerHeight > starTop) && (dodgerLeft + dodgerWidth > starLeft)
    && (dodgerLeft < starLeft + starWidth) && (dodgerTop < starTop + starHeight)) {
    soundHit.play()
    health.value -= 20
    setTimeout(() => { dodger.classList.toggle('flash') }, 1000)
    dodger.classList.toggle('flash')
    // setTimeout(() => { sky.removeChild(star) }, 15)
    intScore -= 5
    setTimeout(() => { message.innerHTML = "your skillz are basic" }, 100)
  star.classList.toggle('star')
  setTimeout(()=> {star.classList.toggle('star')},1000)
  star.style.top = Math.random() * 1400 + 'px';
    }


function createHeart() {
  if ((dodgerTop + dodgerHeight > heartTop) && (dodgerLeft + dodgerWidth > heartLeft)
    && (dodgerLeft < heartLeft + heartWidth) && (dodgerTop < heartTop + heartHeight)) {
    soundHit.play()
    health.value += 20
    intScore += 20
    heart.classList.toggle('heart')
    setTimeout(()=> {heart.classList.toggle('heart')},1000)
    heart.style.top = Math.random() * 600 + 'px';
    }}
createHeart()

  // const newHeartTop = parseInt(newHeartStyles.top)
  // const newHeartHeight = parseInt(newHeartStyles.height);
  // const newHeartLeft = parseInt(newHeartStyles.left);
  // const newHeartWidth = parseInt(newHeartStyles.width);

 
  // setInterval(function(){console.log(dodger.style.top)}, 250)

  //Set the character's final position    

  function position(element, elementTop, elementLeft, elementWidth, elementHeight) {
    element.style.top = elementTop + "px";
    element.style.left = elementLeft + "px";
    element.style.height = elementHeight + "px";
    element.style.width = elementWidth + "px";
  }

  position(dodger, dodgerTop, dodgerLeft, dodgerWidth, dodgerHeight)


  if (health.value <= 0) {
    alert('you lose')
    clearInterval(runGame)
    window.location.href = "index.html";
    // window.stop();
    // window.localStorage.setItem('Name', )
  }

  localStorage.setItem('Name', 'Score')
  localStorage.getItem('Name')

},200);









        // health.value += 20;
        // setTimeout(() => { dodger.classList.toggle('flash') }, 1000)
        // dodger.classList.toggle('flash')
        // setTimeout(() => { sky.removeChild(heartDiv) }, 15)
        // intScore += 5
        // setTimeout(() => { message.innerHTML = 'srsly? make America \n great again?' }, 100)
        // setTimeout(() => { message.innerHTML = 'u noob' }, 3000)
        // setTimeout(() => { message.innerHTML = "i don't even know" }



// // https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
// function getPos(element) {
//   // yay readability
//   for (var elementX = 0, elementY = 0;
//     element != null;
//     elementX += element.offsetLeft, elementY += element.offsetTop, element = element.offsetParent);
//   return { x: elementX, y: elementY };
// }
// // setInterval(function () { document.querySelector('.link')}, 3000);