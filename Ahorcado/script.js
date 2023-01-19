String.prototype.replaceAt=function(index, character){ return this.substring(0, index) + character + 
this.substring(index+character.length);} 

const palabras = [`cuerpo`,`pierna`,`pie`,`talón`,`espinilla`,`rodilla`,`muslo`,`cabeza`,`cara`,`boca`,
`labio`,`diente`,`ojo`,`nariz`,`barba`,`bigote`,`cabello`,`oreja`,`cerebro`,`estomago`,`brazo`,`codo`,
`hombro`,`palma`,`mano`,`dedo`,`abdomen`,`higado`,`musculo`,`cuello`]

const palabra = palabras[Math.floor(Math.random() * palabras.length)]
let palabraConGuiones = palabra.replace(/./g, "_ ")
let contadorDeFallos = 0
document.querySelector(`#output`).innerHTML = palabraConGuiones
document.querySelector(`#calcular`).addEventListener(`click`, () => {
    const letra = document.querySelector(`#letra`).value
    let haFallado = true
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false
        }
    }


    if(haFallado){
        contadorDeFallos++
        document.querySelector(`#ahorcado`).style.backgroundPosition = -(203 * contadorDeFallos) + `px 0`
        if(contadorDeFallos == 4){
            alert("perdiste el juego")
        }
    }else{
        if(palabraConGuiones.indexOf(`_`) <0){
           document.querySelector(`#ganador`).style.display = `flex`
        }
    }
    document.querySelector(`#output`).innerHTML = palabraConGuiones

    document.querySelector(`#letra`).value = ``
    document.querySelector(`#letra`).focus()
})


