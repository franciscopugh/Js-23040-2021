/*
let saludo = "Hola coders!"
let divParrafos = document.getElementsByClassName("parrafos")
let parrafosEtiqueta = document.getElementsByTagName("p")
let parrafo1 = document.getElementById("parrafo1")
console.log(divParrafos)
console.log(parrafo1)
console.log(parrafosEtiqueta)

divParrafos[0].innerHTML += `<p> ${saludo} </p>`

let boton1 = document.getElementById("boton1")
let inputColor = document.getElementById("inputColor")

boton1.addEventListener('click', (e) => {
    console.log(e.target)
    console.log("Diste click aqui!.")
}) 

//boton1.addEventListener('click', nombreFuncion())



inputColor.addEventListener('input', (e) => {
    console.log(e.target.value)
    //document.body.style.backgroundColor = e.target.value
})*/


class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let personas = []

let idForm = document.getElementById("idForm")

idForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById("nombre").value 
    let apellido = document.getElementById("apellido").value 
    let edad = document.getElementById("edad").value 

    const persona = new Persona(nombre, apellido, parseInt(edad))
    
    personas.push(persona)
    
    idForm.reset()

})

let boton2 = document.getElementById("boton2")

boton2.addEventListener("click", (e) => {
    e.preventDefault()
})

boton1.onclick = () => {
    console.log(personas)
}