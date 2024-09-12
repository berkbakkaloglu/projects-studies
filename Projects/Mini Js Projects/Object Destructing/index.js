const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 

const {title, year, genre, star, director} = favouriteFilm

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}`)


const dreamHoliday = {
    destination: 'fethiye',
    activity: 'chilling',
    accommodation: '5 star hotel',
    companion: 'wife',
    weather:'sunny',
    season: 'summer'
}
const {destination, activity, accommodation, companion, weather,season} = dreamHoliday

console.log(`I want to go ${destination} this ${season} to enjoy ${weather} weather with my ${companion} and probably we will book a ${accommodation} for ${activity} everyday`)