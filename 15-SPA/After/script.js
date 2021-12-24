let divProductos = document.getElementById('divProductos')
/*
fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((producto, indice) => {
            divProductos.innerHTML += `
            <div class="card border-dark mb-3" id="producto${indice}" style="max-width: 20rem; margin: 5px">
            <div class="card-header" style= "margin-buttom: 7px;">${producto.nombre}</div>
            <img src="./img/${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${producto.marca}</h4>
              <p class="card-text">$${producto.precio}</p>
              <p class="card-text">Stock: ${producto.stock}</p>
              <button class="btn btn-dark" id="boton${indice}">Comprar</button>
            </div>
          </div>
            `
        });
    })*/

async function cargarProductos() {
    let response = await fetch('productos.json')
    let productos = await response.json()

    productos.forEach((producto, indice) => {
        divProductos.innerHTML += `
        <div class="card border-dark mb-3" id="producto${indice}" style="max-width: 20rem; margin: 5px">
        <div class="card-header" style= "margin-buttom: 7px;">${producto.nombre}</div>
        <img src="./img/${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">${producto.marca}</h4>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">Stock: ${producto.stock}</p>
          <button class="btn btn-dark" id="boton${indice}">Comprar</button>
        </div>
      </div>
        `
})}

cargarProductos()