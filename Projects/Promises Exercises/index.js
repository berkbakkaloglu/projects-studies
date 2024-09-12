const people = [
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

function gimmeThePets(person) {
    return person.hasPet
}

const peopleWithPets = people.filter(gimmeThePets)
console.log(peopleWithPets)

function gimmeAbove18(person) {
    return person.age === 18 || person.age > 18
}
const above18 = people.filter(gimmeAbove18)
console.log(above18)


const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]

// Write your code below


// Final result: ["joe@joe.com", "jane@jane.com"]
/*
function whoVoted(person) {
    return person.voted 
} 
function getEmail(person) {
    return person.email
}

const whoVote = voters.filter(whoVoted).map(getEmail)
console.log(whoVote)
*/

const finalResult = voters.filter(voter => voter.voted).map(voter => voter.email)
console.log(finalResult)