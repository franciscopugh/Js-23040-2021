let darkMode;

if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode') //valores: light o dark
} else {
    darkMode = "light"
}

localStorage.setItem('darkMode', darkMode)

$(()=> {
    if(localStorage.getItem('darkMode') == "dark") {
        $('body').addClass('darkMode')
        $('#botonDarkMode').slideUp(2000)
        $('#botonLightMode').slideDown(2000)
    } else {
        $('#botonLightMode').slideUp(2000)
    }

    $('#botonLightMode').click(() => {
        $('#botonDarkMode').slideDown(2000)
        $('#botonLightMode').slideUp(2000)

        /*$('body').css({
            "background-color": "beige",
            "color": "black"
        })*/
        $('body').removeClass('darkMode')
        localStorage.setItem('darkMode', "light")
    })

    $('#botonDarkMode').click(() => {
        $('#botonDarkMode').slideUp(2000)
        $('#botonLightMode').slideDown(2000)
        $('body').addClass('darkMode')
        localStorage.setItem('darkMode', "dark")
    })

    $('#botonCaja').click(function() {
        $('#box').animate({
            width: "300px",
            height: "300px"
        },{
            duration:800,
            easing:"linear",
            complete: ()=> {
                console.log(this)
                $(this).after("<p>Animacion finalizada :D</p>")
            }
        })
    })
    
    $('#parrafoRandom').animate({
        "font-size": "60px"
    }).fadeOut(5000).delay(3000).fadeIn(5000)
})
