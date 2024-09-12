

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("password1-el");
let pass2El = document.getElementById("password2-el");

let password1 = ""
let password2 = ""

// 91 different characters

function generatePass() {

    if (password1){password1="",password2=""} // empty password section if there is a password
    for ( let i = 0; i < 15 ; i++ ){
        
        
        number1 = Math.floor((Math.random() * characters.length)) 
        number2 = Math.floor((Math.random() * characters.length))
        password1 += (characters[number1])
        password2 += (characters[number2])
        pass1El.textContent = password1
        pass2El.textContent = password2
}
}





    

