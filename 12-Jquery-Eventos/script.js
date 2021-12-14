/*
$(() => {
    console.log("Hola desde Ready")
})

window.addEventListener('load', () => {
    console.log("Hola desde Load!.")
})

document.getElementById("boton1").addEventListener('click', () => {
    console.log("Hola desde vainilla js")
})
$(() => {
    $('#boton1').on('click', () => {
        console.log("Hola desde boton jQuery")
    })

    $('#boton1').click(() => console.log("Hola desde boton click jQuery"))

    $('#input1').on('change', (e) => {
        console.log(e.target.value)
    })

    $('#input1').on('input', (e) => {
        console.log(e.target.value)
    })
})*/

class Auto {
    constructor(marca, modelo, precio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }
}

let autos = []

$(() => {
    $('#formAuto').submit((e) => {
        e.preventDefault()

        let autoForm = new Auto($('#marca').val(), $('#modelo').val(), $('#precio').val(), $('#color').val())
        autos.push(autoForm)
        localStorage.setItem('autos', JSON.stringify(autos))
        $('#formAuto').trigger('reset')
        
    })

    $('#botonAutos').click(() => {
        let arrayAutos = JSON.parse(localStorage.getItem('autos'))

        arrayAutos.forEach((autoEnArray, indice) => {
            
            $('#divAutos').append( `
                <div class="card border-success mb-3" id="auto${indice}" style="max-width: 20rem;">
                    <div class="card-header"> ${autoEnArray.marca} ${autoEnArray.modelo}</div>
                        <div class="card-body">
                            <p class="card-text">$${autoEnArray.precio}</p>
                            <p class="card-text">${autoEnArray.color}</p>
                            <button class = "btn btn-warning" id="boton${indice}">Eliminar</button>
                    </div>
                </div>

            `)
        })
    })
})