// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10"
let numeroSecreto = 0 ;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intento} ${(intento === 1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto ){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intento++; 
        limpiarCaja();

    }
    return;
   
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego(){
    //limpiar la caja | 
    limpiarCaja();
    // indicar msj de intervalo de números
   condicionesIniciales();
    // generar el número aleatorio
    
    // iniciar el número de intentos
   
    //deshabilitar el botón de "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();