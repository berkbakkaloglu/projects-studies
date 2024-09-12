
	
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
		document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("author").textContent = `By: ${data.user.name}`


	})

fetch("https://api.coingecko.com/api/v3/coins/binancecoin")
	.then(res => res.json())
	.then(data => { 
		document.getElementById("crypto-top").innerHTML = `
		
			<img src=${data.image.small}>
			<h3> ${data.name} </h3>
		`
		document.getElementById("crypto").innerHTML += `
		<p> 💸Current Price:  $ ${data.market_data.current_price.usd} </p>
		<p> 📈24H Highest Price:  $ ${data.market_data.high_24h.usd} </p>
		<p> 📉24H Lowest Price:  $ ${data.market_data.low_24h.usd} </p>`
		
		
	})
	.catch(err => console.log(err))

setInterval(myTimer,1000)
function myTimer(){
	document.getElementById("time").textContent = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", 
	minute: "numeric"})
}

navigator.geolocation.getCurrentPosition(position => {
	fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
		.then(res =>{
			if (!res.ok) {
				throw Error("Weather data not available")
			}
			return res.json()
		})
		.then(data => {
			const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
			console.log(iconUrl)
            document.getElementById("weather").innerHTML = `<img src=${iconUrl}>
			<p class='weather-temp'>${data.main.temp}°</p>
			<p class='weather-city'>${data.name}</p>`
        })
		
		.catch(err => console.log(err))
	});

	
		
		
		