let hands = ["rock", "paper", "scissor"]

function randomHand() {
    let number = Math.floor((Math.random() * 3))
    console.log(hands[number])

}
randomHand()
   