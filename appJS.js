const startBtn = document.getElementById("nextPoke")
const pokeLogo = document.getElementById("pokeLogo")
const reponceUser = document.getElementById("reponceInput")
const pokeIMG = document.getElementById("pokemonIMG")
const question = document.getElementById("question")
let statue = "lunchScreen"

startBtn.addEventListener("click", () => {
    if(statue = "lunchScreen"){
        statue = "inGame"
        startBtn.textContent = "valider !"
        pokeLogo.style.visibility = "hidden"
        reponceUser.style.visibility = "visible"
        question.style.visibility = "visible"
        chose()
    }
})

function chose(){
    pokeIMG.src = "pokeGuest LOGO.png"
}