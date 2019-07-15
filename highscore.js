/* eslint-disable */

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


function highScore() {
    const highScoreList = document.querySelector('#highscorelist')
    let listItem = document.createElement('li')
    let nameScore = localStorage.getItem('Game ID') + ' ' + localStorage.getItem('Score')
    let record = document.createTextNode(nameScore)
    listItem.appendChild(record)
    highScoreList.appendChild(listItem)
}
highScore()