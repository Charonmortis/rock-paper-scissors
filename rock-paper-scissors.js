/**
 * GAME CORE
 */
const CHOICES = ["rock", "paper", "scissors"]

let counting = [0, 0, 0] //would be DRAWS / LOSSES / WINS
let games = 0

const playGame = (userChoice)=>{

    let computerChoice = CHOICES[Math.floor(Math.random()*3)]
    
    if (userChoice == "rock") {
        console.log(userChoice)
        switch (computerChoice) {
            case "rock":
                counting[0]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you draw`
            case "paper":
                counting[1]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you lose`
            case "scissors":
                counting[2]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you win`
        }
    } else if (userChoice == "paper"){
        console.log(userChoice)
        switch (computerChoice) {
            case "rock":
                counting[2]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you win`
            case "paper":
                counting[0]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you draw`
            case "scissors":
                counting[1]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you lose`
        }
    } else if (userChoice == "scissors"){
        console.log(userChoice)
        switch (computerChoice) {
            case "rock":
                counting[1]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you lose`
            case "paper":
                counting[2]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you win`
            case "scissors":
                counting[0]++
                games++
                return `Computer choose ${computerChoice.toUpperCase()}, therefore you draw`
        }
    }
}

/**
 * DOM ELEMENTS
 0*/
 const choicesElement = Array.from(document.getElementsByClassName('choices__element'))
 const result = document.querySelector('#result__text')
 const container = document.getElementsByClassName('container')[0]

//Create restart button

const restartBtn = document.createElement('button')
restartBtn.classList.add('restart')
restartBtn.innerText = 'Restart game!'
restartBtn.addEventListener('click', (e)=>{
    games = 0
    counting = [0,0,0]
    result.textContent = 'Play Game'
    e.target.remove()
})

/**
 * DOM MODIFICATIONS
 */

choicesElement.forEach(choice => choice.addEventListener('click', (e)=>{
    if(games < 5) {
        result.textContent = playGame(e.target.dataset.choice)
    } else{
        result.textContent = `RESULTS: ${counting[0]} DRAWS, ${counting[1]} LOSSES, ${counting[2]} WINS`
        container.append(restartBtn)
    }
}))