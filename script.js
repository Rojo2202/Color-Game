let colors = []
let cuadrados = document.querySelectorAll(".square")
let boton = document.querySelector("#reset")
let h1 = document.querySelector("#colorDisplay")
let pickedColor
let mensaje = document.querySelector("#message")
let facil = document.querySelector("#botonEasy")
let dificil = document.querySelector("#botonHard")
let numberOfSquares = 6
let cuerpo = document.querySelector("body")
let titulo = document.querySelector("#encabezado")

// Funcion que cambia todo los colores de los cuadrados por el cuadrado ganador
function changeColors(color) {
    for (let i = 0; i < colors.length; i++) {
        cuadrados[i].style.backgroundColor = color
        
    }
}
// Funcion que genera numeros aleatorios 

function aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
    }

// Funcion que retorna un numero ramdon
function pickColor() {
    return aleatorio(0, colors.length - 1 )   
}

// Funcion que genera colores ramdons
function generateRandomColors(num) {
    colors.splice(0,colors.length)
    for (let i = 0; i < num; i++) {
        colors.push(`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`)
    }
    
    
}

function game(){
    pickedColor = colors[pickColor()]
    h1.innerText = pickedColor
    for(let i = 0 ; i < colors.length ; i++) {
    // Se asigna cada color a los cuadrados
    
        cuadrados[i].style.backgroundColor = colors[i]
        
        cuadrados[i].addEventListener("click",function(){
            // Se guarda el valor del cuadrado clickeado
            let clickedColor = this.style.backgroundColor
            // Se compara el cuadrado clickeado con pickedColor
            if(clickedColor !== pickedColor) {
                this.style.backgroundColor = document.body.style.backgroundColor
                mensaje.innerText = 'TRY AGAIN!'
            }
            else if(clickedColor == pickedColor) {
                mensaje.innerText = 'CORRECTO'
                titulo.style.backgroundColor = this.style.backgroundColor
                changeColors(pickedColor)
                boton.textContent = "PLAY AGAIN?"
            }
        })
    }
}


boton.addEventListener("click", function(){
    
    boton.textContent = "NEW COLORS"
    mensaje.innerText = ""
    encabezado.style.backgroundColor = "rgba(148, 148, 255, 0.877)"
    for (let i = 3; i < cuadrados.length; i++){
        cuadrados[i].style.backgroundColor = "#232323"
       
    }
    generateRandomColors(numberOfSquares)
    game()
})

facil.addEventListener("click", function(){
    dificil.classList.remove('selected')
    facil.classList.add('selected')
    numberOfSquares = 3
    generateRandomColors(numberOfSquares)
    game()
    for (let i = 3; i < cuadrados.length; i++){
        cuadrados[i].style.backgroundColor = "#232323"
       
    }
})

dificil.addEventListener("click", function(){
    facil.classList.remove('selected')
    dificil.classList.add('selected')
    numberOfSquares = 6
    generateRandomColors(numberOfSquares)
    game()
})
dificil.classList.add('selected')
generateRandomColors(numberOfSquares)
game()






    




