/* eslint-disable */


function highScore() {
    const highScoreList = document.querySelector('#highscorelist')
    let listItem = document.createElement('li')
    let nameScore = localStorage.getItem('Game ID') + ' ' + localStorage.getItem('Score')
    let record = document.createTextNode(nameScore)
    listItem.appendChild(record)
    highScoreList.appendChild(listItem)
}
highScore()