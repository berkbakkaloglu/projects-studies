

document.getElementById("btn").addEventListener("click",function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activity").innerText = data.activity
        document.getElementById("title").innerText = "🦾 HappyBot🦿"
        document.body.classList.add("fun")
        

    })
})