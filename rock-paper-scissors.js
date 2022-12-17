const CHOICES = ["rock", "paper", "scissors"]

let counting = [0, 0, 0] //would be DRAWS / LOSSES / WINS

for (let i = 0; i < 5; i++) {
    
    let userChoice = prompt("Welcome to rock, paper, scissors. Please choose your decission").toLowerCase();
    let computerChoice = CHOICES[Math.floor(Math.random()*3)]
    

    computerChoice
    
    if (userChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice}, therefore it's a draw`)
                counting[0]++
                break;
            case "paper":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice} therefore you lose`)
                counting[1]++
                break;
            case "scissors":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice} therefore you won`)
                counting[2]++
                break;
        }
    } else if (userChoice == "paper"){
        switch (computerChoice) {
            case "rock":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice} therefore you won`)
                counting[2]++
                break;
            case "paper":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice}, therefore it's a draw`)
                counting[0]++
                break;
            case "scissors":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice} therefore you lose`)
                counting[1]++
                break;
        }
    } else if (userChoice == "scissors"){
        switch (computerChoice) {
            case "rock":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice} therefore you lose`)
                counting[1]++
                break;
            case "paper":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice} therefore you won`)
                counting[2]++
                break;
            case "scissors":
                console.log(`Your choice was ${userChoice}, computer choice was: ${computerChoice}, therefore it's a draw`)
                counting[0]++
                break;
        }
    } else {
        window.location.reload()
        break
    }
}

console.log(`You finnished, these are the results: ${counting[0]} draws, ${counting[1]} losses and ${counting[2]} wins`)