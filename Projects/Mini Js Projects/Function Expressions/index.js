
// first normal way
// function getSpendAlert(amount) {
//     return `Warning! You just spent £${amount}!`
// }


// second with function declatarion 
//const getSpendAlert = function(amount){
//    return `Warning! You just spent £${amount}!`
//}
// console.log(getSpendAlert(150))



// third way - arrow declaration 

//const getSpendAlert = (amount) => {
//    return `Warning! You just spent £${amount}!`
//} 
//console.log(getSpendAlert(150))

// another way to declare arrow  if its only in one line 

const getSpendAlert = amount => `Warning! You just spent £${amount}!`

console.log(getSpendAlert(100))


const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map( distance => Math.round(distance * 1.6 ))

console.log(distanceTraveledKm)