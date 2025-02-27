import { catsData } from '/Projects/Purrfect Meme Picker/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const closeModal = document.getElementById('meme-modal-close-btn')

getImageBtn.addEventListener('click', RenderCat)

closeModal.addEventListener('click', function(){
    memeModal.style.display = "none"
})
function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
emotionRadios.addEventListener('change', highlightCheckedOption)

function RenderCat (){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `
        <img 
    class="cat-img" 
    src= "/Projects/Purrfect Meme Picker/images/${catObject.image}"
    alt="${catObject.alt}"
    >
    `
    memeModal.style.display= "flex";
}
function getSingleCatObject (){
    const catsArray = getMatchingCatsArray()

    if (catsArray.length === 1){
        return catsArray[0]
    }
    else if(catsArray.length > 1){
        return catsArray[Math.floor(Math.random() * catsArray.length) ]
    }
}

function getMatchingCatsArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        const MatchingCats = catsData.filter(function(emotion){

        if (isGif)
        
            return emotion.emotionTags.includes(selectedEmotion) && emotion.isGif === true
        else 
            return emotion.emotionTags.includes(selectedEmotion)

        })

        return MatchingCats
    }}

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)



