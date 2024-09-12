const buttonEl = document.getElementById("convert-btn")

const inputEl = document.getElementById("input-el")
let inputNumber = []

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
buttonEl.addEventListener("click", function(){
    inputNumber.push(inputEl.value)
    length12 = inputNumber*3.281
    length21 =inputNumber/3.281
    volume12 = inputNumber* 0.264
    volume21 = inputNumber/0.264
    mass12 = inputNumber * 2.204
    mass21 = inputNumber/ 2.204
    lengthEl.innerHTML =` ${inputNumber} meters = ${length12.toFixed(3)} feet | ${inputNumber} feet =  ${length21.toFixed(3)} meters`
    volumeEl.innerHTML =` ${inputNumber} liters = ${volume12.toFixed(3)} gallons | ${inputNumber} gallons =  ${volume21.toFixed(3)} liters`
    massEl.innerHTML =` ${inputNumber} kilos = ${mass12.toFixed(3)} pounds | ${inputNumber} pounds =  ${mass21.toFixed(2)} kilos`
    inputNumber = []
}


)