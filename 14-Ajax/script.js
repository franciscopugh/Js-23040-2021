/*$(() => {
    $.get("https://jsonplaceholder.typicode.com/posts", (respuesta, estado) => {
        console.log(estado)
      if(estado == "success") {
            let datos = respuesta;
            console.log(datos)
        }
    })

    $.post("https://jsonplaceholder.typicode.com/posts", {nombre: "Francisco Pugh", cargo: "Profesor"}, (respuesta, estado) => {
        if(estado == "success") {
            console.log(respuesta)
        }
    })
})

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) 
  .then(data => console.log(data));
  */

let divDolares = document.getElementById('divDolares')

fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(datosDolar => {
        console.log(datosDolar)
        let arrayDolar = Object.entries(datosDolar).filter(dolarArray => dolarArray[0] != "time")
        arrayDolar.forEach(dolar => {
            divDolares.innerHTML += `<p> ${dolar[0]}: $${dolar[1]} </p>`
        })
    })

fetch('usuarios.json')
    .then(response => response.json())
    .then(datosUsuarios => console.log(datosUsuarios))