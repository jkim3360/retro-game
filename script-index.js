/* eslint-disable */




//---------------index.html landing - troll msgs---------------
const messageIndex = document.querySelector('.messageIndex')
const name = document.getElementById('nameInput')
const btn = document.getElementById('button')
const anonBtn = document.querySelector('#playButton')

btn.addEventListener('click', function () {
  localStorage.setItem('Game ID', name.value)
  window.location.href = "main.html"
})

anonBtn.addEventListener('click', function () {
  localStorage.setItem('Game ID', 'Player 1')
  window.location.href = "main.html"
})

document.getElementById('nameInputForm').addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    localStorage.setItem('Game ID', name.value)
    window.location.href = "main.html"
    event.preventDefault();
    return false
  }
})

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

// index trash talk
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





