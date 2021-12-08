class Producto {
    constructor(nombre, marca, modelo, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    aumentarStock(nuevoStock) {
        this.stock += nuevoStock;
    }
}

let productos = []

let formProducto = document.getElementById('formProducto')
let botonProductos = document.getElementById('botonProductos')
let divProductos = document.getElementById('divProductos')
let mensajeAmigable = document.getElementById('mensajeAmigable')

formProducto.addEventListener('submit', (e) => {
    e.preventDefault()

    let datForm = new FormData(e.target)
    let nuevoProducto = new Producto(datForm.get("nombre"), datForm.get("marca"), datForm.get("modelo"), datForm.get("precio"), datForm.get("stock"))
    productos.push(nuevoProducto)
    localStorage.setItem('keyProductos', JSON.stringify(productos))
    formProducto.reset()
})

botonProductos.addEventListener('click', () => {
    let productosEnStorage = JSON.parse(localStorage.getItem('keyProductos'))
    if(divProductos.children.length == 0) {
        productosEnStorage.forEach((productoEnArray, indice) => {
            divProductos.innerHTML += `
                <div class="card" id="producto${indice}" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${productoEnArray.nombre}</h5>
                        <p class="card-text">${productoEnArray.marca}</p>
                        <p class="card-text">${productoEnArray.modelo}</p>
                        <p class="card-text">$${productoEnArray.precio}</p>
                        <p class="card-text">${productoEnArray.stock}</p>
                        <button type="button" class="btn btn-danger" id="boton${indice}"><i class="fas fa-trash-alt fa-2x" ></i></button>
                    </div>
                </div>
            `
        })

        //Eventos para eliminar productos
        
        productosEnStorage.forEach((productosEnStorage, indice) => {
            document.getElementById(`boton${indice}`).addEventListener('click', () => {
                document.getElementById(`producto${indice}`).remove()
                productos.splice(indice, 1)
                localStorage.setItem('keyProductos', JSON.stringify(productos))
                console.log(`Producto ${productosEnStorage.nombre} eliminado `)
            })

        })
    } else {
        mensajeAmigable.innerText = "Por favor no de click en el boton ya que estan los elementos cargados"
    }


    
})