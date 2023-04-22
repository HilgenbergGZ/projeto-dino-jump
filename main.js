const dinossauro = document.querySelector(".dinossauro")
const cactus = document.querySelector(".cactus")
const meteoros = document.getElementById("meteoros")
const meteoros2 = document.getElementById("meteoros2")
const meteoros3 = document.getElementById("meteoros3")

const jump = () => { 
    dinossauro.classList.add('jump')

    setTimeout(() => {

    dinossauro.classList.remove('jump')

    }, 500)
}

const loop = setInterval(() => {

    const cactoposition = cactus.offsetLeft
    const dinossauroposition = +window.getComputedStyle(dinossauro).bottom.replace('px', '')
    const meteorosposition = +window.getComputedStyle(meteoros).bottom.replace('px', '')
    const meteoros2position = +window.getComputedStyle(meteoros2).bottom.replace('px', '')
    const meteoros3position = +window.getComputedStyle(meteoros3).bottom.replace('px', '')
    if (cactoposition <= 80 && cactoposition > 0 && dinossauroposition < 70) {

        cactus.style.animation = "none"
        cactus.style.left = `${cactoposition}px`

        dinossauro.style.animation = "none"
        dinossauro.style.bottom = `${dinossauroposition}px`

        meteoros.style.animation = "none"
        meteoros2.style.animation = "none"
        meteoros3.style.animation = "none"
        meteoros.style.bottom = `${meteorosposition}px`
        meteoros2.style.bottom = `${meteoros2position}px`
        meteoros3.style.bottom = `${meteoros3position}px`

        dinossauro.src = "./imagens/esqueleto.png"
        dinossauro.style.marginLeft = "8px"
        dinossauro.style.marginBottom = "-8px"

        clearInterval(loop)
    } 
    
}, 10)

document.addEventListener('keydown', jump)