$(document).ready(function() {
    $(".btnStart").click(function(){
        $("form button").hide()
        startgame()
        $(".cactus").removeClass("waiting")
        $(".meteoros").removeClass("waiting")
    })

    $("form").on("submit", function(e){
        e.preventDefault()
    })

})



const dinossauro = document.querySelector(".dinossauro")
const cactus = document.querySelector(".cactus")
const meteoros = document.querySelector(".meteoros")
const meteoros2 = document.getElementById("meteoros2")
const meteoros3 = document.getElementById("meteoros3")

const startgame = () => {

    const gameContainer = document.querySelector(".gameContainer")
    gameContainer.classList.remove("disabled")

    const jump = () => { 
        dinossauro.classList.add('jump')

        setTimeout(() => {

        dinossauro.classList.remove('jump')

        }, 500)
    }

    const loop = setInterval(() => {

        const cactoposition = cactus.offsetLeft
        const dinossauroposition = +window.getComputedStyle(dinossauro).bottom.replace('px', '')

        const meteorospositiontop = +window.getComputedStyle(meteoros).top.replace('px', '')
        const meteorospositionright = +window.getComputedStyle(meteoros).right.replace('px', '')
        const meteorospositionbottom = +window.getComputedStyle(meteoros).bottom.replace('px', '')
        const meteorospositionleft = +window.getComputedStyle(meteoros).left.replace('px', '')

        const meteoros2positiontop = +window.getComputedStyle(meteoros2).top.replace('px', '')
        const meteoros2positionright = +window.getComputedStyle(meteoros2).right.replace('px', '')
        const meteoros2positionbottom = +window.getComputedStyle(meteoros2).bottom.replace('px', '')
        const meteoros2positionleft = +window.getComputedStyle(meteoros2).left.replace('px', '')

        const meteoros3positiontop = +window.getComputedStyle(meteoros3).top.replace('px', '')
        const meteoros3positionright = +window.getComputedStyle(meteoros3).right.replace('px', '')
        const meteoros3positionbottom = +window.getComputedStyle(meteoros3).bottom.replace('px', '')
        const meteoros3positionleft = +window.getComputedStyle(meteoros3).left.replace('px', '')
        

        if (cactoposition <= 80 && cactoposition > 0 && dinossauroposition < 70) {

            cactus.style.animation = "none"
            cactus.style.left = `${cactoposition}px`

            dinossauro.style.animation = "none"
            dinossauro.style.bottom = `${dinossauroposition}px`

            dinossauro.src = "./imagens/esqueleto.png"
            dinossauro.style.marginLeft = "8px"
            dinossauro.style.marginBottom = "-8px"

            meteoros.style.animation = "none"
            meteoros.style.top = `${meteorospositiontop}px`
            meteoros.style.left = `${meteorospositionleft}px`
            meteoros.style.bottom = `${meteorospositionbottom}px`
            meteoros.style.right = `${meteorospositionright}px`

            meteoros2.style.animation = "none"
            meteoros2.style.top = `${meteoros2positiontop}px`
            meteoros2.style.right = `${meteoros2positionright}px`
            meteoros2.style.bottom = `${meteoros2positionbottom}px`
            meteoros2.style.left = `${meteoros2positionleft}px`

            meteoros3.style.animation = "none"
            meteoros3.style.top = `${meteoros3positiontop}px`
            meteoros3.style.right = `${meteoros3positionright}px`
            meteoros3.style.bottom = `${meteoros3positionbottom}px`
            meteoros3.style.left = `${meteoros3positionleft}px`
            
            clearInterval(loop)

        } 
    }, 10)

    document.addEventListener('keydown', jump)
}