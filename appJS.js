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

const btnGen1 = document.getElementById("gen1")
const btnGen2 = document.getElementById("gen2")
const btnGen3 = document.getElementById("gen3")
const btnGen4 = document.getElementById("gen4")
const btnGen5 = document.getElementById("gen5")
const btnGen6 = document.getElementById("gen6")
const btnGen7 = document.getElementById("gen7")
const btnGen8 = document.getElementById("gen8")
const btnGen9 = document.getElementById("gen9")
const menuBTN = document.getElementById("menuBTN")

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
    pokeIMG.style.visibility = "hidden"
    startBtn.style.visibility = "visible"
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

let open = false

menuBTN.addEventListener("click", () => {
    if(open){
        open = false
        if(statue == "lunchScreen"){
            statue = "lunchScreen"
            startBtn.style.visibility = "visible"
            pokeLogo.style.visibility = "visible"
        }else if(statue == "inGame"){
            startBtn.textContent = "valider !"
            startBtn.style.visibility = "visible"
            pokeLogo.style.visibility = "hidden"
            reponceUser.style.visibility = "visible"
            question.style.visibility = "visible"
            scoreCase.style.visibility = "hidden"
            result.style.visibility = "hidden"
            who.style.visibility = "hidden"
            pokeIMG.style.visibility = "visible"
        }
        btnGen1.style.visibility = "hidden"
        btnGen2.style.visibility = "hidden"
        btnGen3.style.visibility = "hidden"
        btnGen4.style.visibility = "hidden"
        btnGen5.style.visibility = "hidden"
        btnGen6.style.visibility = "hidden"
        btnGen7.style.visibility = "hidden"
        btnGen8.style.visibility = "hidden"
        btnGen9.style.visibility = "hidden"

    }else{
        open = true
        startBtn.style.visibility = "hidden"
        pokeLogo.style.visibility = "hidden"
        reponceUser.style.visibility = "hidden"
        pokeIMG.style.visibility = "hidden"
        question.style.visibility = "hidden"
        scoreCase.style.visibility = "hidden"
        result.style.visibility = "hidden"
        who.style.visibility = "hidden"

        btnGen1.style.visibility = "visible"
        btnGen2.style.visibility = "visible"
        btnGen3.style.visibility = "visible"
        btnGen4.style.visibility = "visible"
        btnGen5.style.visibility = "visible"
        btnGen6.style.visibility = "visible"
        btnGen7.style.visibility = "visible"
        btnGen8.style.visibility = "visible"
        btnGen9.style.visibility = "visible"
    }
})
