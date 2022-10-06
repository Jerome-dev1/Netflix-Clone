console.log('hello')

let titleDiv = 
document.getElementById('title')

console.log('before: ',
titleDiv.innerText)

let message = 'IM BACK!'

titleDiv.innerText = message;

console.log('after: ',
titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.backgroundColor = 'blue'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green') 

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

const Squares = document.querySelectorAll('.colorSquare')
// for Each
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
Squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
  // console.log(square.value)
})


function clearScore() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  
  Squares.forEach(square => {
    square.innerText = 0
  })
}   

const clearGameBtn =document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScore()



