const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");

const BotonesNumeros = document.querySelectorAll(".numeros");

const BotonesOperadores = document.querySelectorAll(".operadores");

const display = new Display(displayValorActual, displayValorAnterior);

BotonesNumeros.forEach(boton => {
  boton.addEventListener("click", () =>
    display.agregarNumeros(boton.innerHTML));
});
    
BotonesOperadores.forEach(boton=>{
  boton.addEventListener("click", ()=> display.computar(boton.value));
}) ;