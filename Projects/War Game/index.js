let deckId
let computerScore = 0
let yourScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingCard = document.getElementById("remaining")
const yourScoreEl = document.getElementById("your-score")
const computerScoreEl = document.getElementById("computer-score")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            drawCardBtn.disabled = false
            deckId = data.deck_id
            remainingCard.textContent = `Remaining Card ${data.remaining}`
            yourScore = 0
            computerScore = 0
            computerScoreEl.textContent = `Computer score: ${computerScore}`
            yourScoreEl.textContent = `Your score: ${yourScore}`
            header.className = ""
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = winnerCard(data.cards[0], data.cards[1])
            console.log(winnerText)
            header.textContent = winnerText
            remainingCard.textContent = `Remaining Card ${data.remaining}`
                if (data.remaining === 0){
                    drawCardBtn.disabled = true
                    if (yourScore > computerScore){
                        header.className = "win"
                        header.textContent = "YOU WIN THE GAME!!"
                    }
                    else if (yourScore < computerScore){
                        header.className = "lose"
                        header.textContent = "COMPUTER WINS THE GAME!!"
                    }
                    else {
                        header.className = "even"
                        header.textContent = "EVEN GAME!!"
                    }
                }
        })
})

function winnerCard(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
        "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent = `Computer score: ${computerScore}`
        return "Computer wins!"
            
         
    } else if (card1ValueIndex < card2ValueIndex) {
        yourScore++
        yourScoreEl.textContent = `Your score: ${yourScore}`
        return "You win!"
    } else {
        return "War!" }
}



winnerCard(card1Obj,card2Obj)