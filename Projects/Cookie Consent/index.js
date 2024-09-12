const modal = document.getElementById('modal')
const consent= document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById("modal-inner")
const closeBtn = document.getElementById("modal-close-btn")
const choiceBtn = document.getElementById("modal-choice-btns")




setTimeout(function(){
    modal.style.display = "inline"
},1500)

document.getElementById('modal-close-btn').addEventListener("click",function(){
    modal.style.display = "none"
})


document.getElementById('decline-btn').addEventListener('mouseover',function(){
    console.log("hovered")
    choiceBtn.classList.toggle('reverse')
})





consent.addEventListener('submit', function(e){
    e.preventDefault()

    const consentData = new FormData(consent)
    const name = consentData.get("fullName")
    console.log(name)
    modalText.innerHTML = 
    `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
        Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function(){
        document.getElementById('uploadText').innerText = `Making the sale...`
    },1500)
    setTimeout(function(){
        modalInner.innerHTML = 
       ` <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    closeBtn.disabled = false
    },3000)
})


