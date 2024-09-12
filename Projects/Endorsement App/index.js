import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref , push , onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://endorsement-8abe9-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementListInDb = ref(database, "endorsements")
const fromlistIndb = ref(database, "from")

const inputFieldEl = document.getElementById("input-field")
const inputFromEl = document.getElementById("input-from")
const inputToEl = document.getElementById("input-to")
const publishButtonEl = document.getElementById("publish")
const endorsementslistEl = document.getElementById("endorsements")


publishButtonEl.addEventListener("click", function(){

    let inputValue = inputFieldEl.value
    let fromValue =inputFromEl.value
    push(endorsementListInDb , inputValue)
    push(fromlistIndb , fromValue)     
    
    clearInput(inputFieldEl)
    clearInput(inputFromEl)
    
    
    
})

function clearInput(a){
    a.value = ""
}


onValue(endorsementListInDb, function(snapshot) {
    
    if (snapshot.exists()) {

        let itemsArray = Object.entries(snapshot.val())
    
        clearEndorsementListEl()

        for (let i=0; i<itemsArray.length; i++){
        let currentItem = itemsArray[i]
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        appendItem(currentItem)
        }  
    } else {
        endorsementslistEl.innerHTML = "No items here... yet"
    }

})


function clearEndorsementListEl() {
    endorsementslistEl.innerHTML = ""
    
    }


function appendItem(item){
    
    let itemId = item[0]
    let itemValue = item[1]
        
    let newEL = document.createElement("li")
    newEL.textContent = itemValue  
    
    newEL.addEventListener("click",function(){
        let exactLocationOfItemInDb = ref(database, `endorsements/${itemId}`)
        remove(exactLocationOfItemInDb)
    })
    endorsementslistEl.append(newEL)
        
    }

    