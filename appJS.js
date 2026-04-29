const screen = document.getElementById("screen")
screen.style.width = window.innerWidth + "px"
screen.style.height = window.innerHeight + "px"
const startBtn = document.getElementById("nextPoke")
const pokeLogo = document.getElementById("pokeLogo")
const reponceUser = document.getElementById("reponceInput")
let pokeIMG = document.getElementById("pokemonIMG")
const question = document.getElementById("question")
const scoreCase = document.getElementById("scoreCase")
const result = document.getElementById("result")
const who = document.getElementById("who")

let statue = "lunchScreen"
let reponceName

startBtn.addEventListener("click", () => {
    if(statue == "lunchScreen"){
        statue = "inGame"
        startBtn.textContent = "valider !"
        pokeLogo.style.visibility = "hidden"
        reponceUser.style.visibility = "visible"
        question.style.visibility = "visible"
        scoreCase.style.visibility = "hidden"
        result.style.visibility = "hidden"
        who.style.visibility = "hidden"
        chose()

    }else if(statue == "inGame"){
        if(reponceUser.value.toUpperCase() == reponceName.toUpperCase()){
            win()
            statue = "lunchScreen"
            pokeIMG.style.visibility = "hidden"
            reponceUser.value =""
        }else{
            defaite()
            statue = "lunchScreen"
            pokeIMG.style.visibility = "hidden"
            reponceUser.value =""
        }
    }
})

function chose(){
    let id = Math.floor(Math.random() * 1025 ) +1
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            let nextIMG = data.sprites.front_default
            pokeIMG.src = nextIMG
            pokeIMG.style.visibility = "visible"
            return fetch(data.species.url)
        })
        .then(res => res.json())
        .then(species => {
            reponceName = species.names.find(n => n.language.name == "fr").name
        })
}

function win(){
    question.style.visibility = "hidden"
    pokeIMG.style.visibility = "visible"
    startBtn.style.visibility = "hidden"
    reponceUser.style.visibility = "hidden"
    scoreCase.style.visibility = "visible"
    result.style.visibility = "visible"
    who.style.visibility = "visible"
    result.textContent = "vous avez gagné !!"
    who.textContent = "c'était : " + reponceName
    startBtn.textContent = "rejouer !"
}

function defaite(){
    question.style.visibility = "hidden"
    pokeIMG.style.visibility = "hidden"
    startBtn.style.visibility = "visible"
    reponceUser.style.visibility = "hidden"
    scoreCase.style.visibility = "visible"
    result.style.visibility = "visible"
    who.style.visibility = "visible"
    result.textContent = "vous avez perdu ..."
    who.textContent = "c'était : " + reponceName
    startBtn.textContent = "rejouer !"
}
