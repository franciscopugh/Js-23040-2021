const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";
let divClima = document.getElementById('divClima')

document.getElementById('botonClima').addEventListener('click', () => {

    let ciudad = document.getElementById('inputCiudad')
    let pais = document.getElementById('inputPais')

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}, ${pais.value}&units=metric&lang=sp&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        
           divClima.innerHTML =  ""
           console.log(data)
           if(data.cod != 404) {
                divClima.innerHTML = `
                <h1>El clima en: ${ciudad.value}, ${pais.value} es: <h1>
                `
                let datosClima = Object.entries(data).filter(clima => clima[0] == 'weather' || clima[0] == 'main')
           
                datosClima.forEach(clima => {

                if(clima[0] == 'weather') {
                    divClima.innerHTML += `<p>Descripcion: ${clima[1][0].description}`
                } else {
                    divClima.innerHTML += `
                    <p> Temperatura: ${clima[1].temp} C°</p>
                    <p> Sensacion Termica: ${clima[1].feels_like} C°</p>
                    <p> Presion: ${clima[1].pressure} hPa</p>
                    <p> Humedad: ${clima[1].humidity} %</p>
                `
                }

                
               
            })

           
            } else {
                divClima.innerHTML =  "<p> Ciudad no encontrada </p>"
            }  
          

            ciudad.value = " "
            pais.value = " "
    })
    
})
