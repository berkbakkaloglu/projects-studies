

let firstCard =  getRandomCard()
let secondCard =  getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {    // OBJECT EXAMPLE
    name : "Berk",
    chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $" + player.chips

function getRandomCard()
 {
    
    number = Math.floor((Math.random() * 13) + 1)
    if (number === 1 )
        return 11
    else if (number > 10 )
        return 10
    else
        return number
}

function startgame(){
    isAlive = true
    let firstCard =  getRandomCard()
    let secondCard =  getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum:" + sum
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length ; i++ ){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
    message = "Do you want to draw a new card?"
   

    } else if ( sum === 21) {
    message = "You've got Blackjack!!!!"
    
    hasBlackJack = true
    
    } else {
    message = "You're out of the game!"
    isAlive = false
    } 
    messageEl.textContent = message
}
function newcard() {
    

    if (isAlive===true && hasBlackJack===false) {    
        let newCard =  getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
    else{
        return
    }
}