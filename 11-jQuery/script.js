/*
$(document).ready(() => {
    console.log("Hola Coders desde Ready!.")
})

$(function() {
    console.log("Hola coders desde function!.")
})

$(() => {
    console.log("Hola coders desde arrow function!.")
})*/

$(() => {
    console.log($('#parrafo1'))  //document.getElementById("parrafo1")
    console.log($('.parrafos')) //document.getElementsByClassName("parrafos")
    console.log($('p')) //document.getElementsByTagName("p")
    console.log($('p,a'))
    console.log($('#parrafo1, .parrafosRandom, a, .parrafos'))
    console.log($('p:last-child'))
    console.log($('a:first-child'))
    console.log($('a > p'))

    $('.parrafosRandom').prepend("<p> Hola desde el inicio </p>")
    $('.parrafosRandom').append("<p>Holaaaa coders! </p>")
})