const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function randomizeChars() {
    return characters[Math.floor(Math.random()* characters.length)]
}

// function lengthOfPass() {
//     let len = Math.floor(Math.random()* characters.length)
//     while(len <= 8) {
//         len++
//     }
//     return len
// }

let pass1 = '';
let pass2 = '';

function randomize(pass) {
  for (let i = 0; i < limit; i++) {
    pass += randomizeChars();
  }
  return pass;
}

let limit = 8;

function updateLimitValue() {
    var slider = document.getElementById("myRange");
    var limitValueDisplay = document.getElementById("limitValue");
    limitValueDisplay.textContent = slider.value;
    limit = slider.value;
  }
function genPass() {
pass1 = ''
pass2 = ''
pass1 = randomize(pass1)
pass2= randomize(pass2)
document.getElementById("button1").innerText = pass1
document.getElementById("button2").innerText = pass2
}
