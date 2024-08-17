let numeroSecreto = 0;
let intentos = 0;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p", `acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        if (numeroSecreto < numeroUsuario) {
            asignarTextoElemento("p", "El número secreto es menor")
        }else{
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function  limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = "";
    
}
function condicionesIniciales () {
    asignarTextoElemento("p", "Ingrese un número del 1 al 10");
    asignarTextoElemento("h1", "¡Juego del número secreto!");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", true)
    return;
}

condicionesIniciales();

/*const numero = factorialNumero(parseInt(prompt("Ingrese un numero")));

console.log(numero);

function factorialNumero(b) { 
    if (b === 0 || b === 1) {
        return 1;
    } else {
        return b * factorialNumero(b - 1);
    }
}

(function  conversorReales() {
    let cantidadDolares = parseInt(prompt("Ingrese la cantidad de dolares"));
    cambioDolares = cantidadDolares * 4.80;
    console.log(`Al realizar el cambio ${cantidadDolares === 1 ? `de ${cantidadDolares} dolar` : `de los ${cantidadDolares} dolares`} es igual a ${cambioDolares} reales`);
})();

let listaGenerica = [];

let lenguajesDeProgramacion = ["JavaScrip", "C", "C++", "Kotlin", "Python"];
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");

(function mostrarLenguajes() {
    console.log(lenguajesDeProgramacion.reverse());
})();

let listaNumeros = [5, 9, 4, 6, 15, 2, 60, 99, 1];
let listaNumeros1 = [4, 5, 4, 6, 4, 2, 7, 10, 2];

(function PromedioTotal () {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    let promedio = suma/listaNumeros.length;
    console.log(suma);
    console.log(promedio);
})();

let maximo = listaNumeros[0];
let minimo = listaNumeros[0];

(function numeroMayorMenor () {
    for (let i = 1; i  < listaNumeros.length; i++) {
        if (listaNumeros[i] > maximo) {
            maximo = listaNumeros[i]; 
        }  
    }    
    for (let i = 1; i < listaNumeros.length; i++) {
        if (minimo > listaNumeros[i]) {
            minimo = listaNumeros[i];
        }
    }
    console.log(minimo);
    console.log(maximo);
})();

(function BuscarPosicionNumero () {
    let posicion = listaNumeros.indexOf(59);
    console.log(posicion);
       
})();


let sumaListas = [];

(function sumaDosListas () {
    for (let i = 0; i < listaNumeros.length; i++) {
        sumaListas = listaNumeros[i]+listaNumeros1[i];
        console.log(sumaListas);
    }
})();


let nuevaLista = [];
let candidadNumeros = 0;
let nuevaLista1 = [];


(function ListaAlCuadrado() {
    candidadNumeros = parseInt(prompt("Ingrese la cantidad de numero que quiere ingresar"));
    for (let i = 1; i <= candidadNumeros; i++) {
        nuevaLista.push(prompt(`Ingrese el numero ${i}`));
    }
    for (let i = 0; i < nuevaLista.length; i++) {
        let valorElevado = nuevaLista[i]*nuevaLista[i];
        nuevaLista1.push(valorElevado);
    }

    
})();
console.log();
console.log(candidadNumeros);
console.log(nuevaLista1);



function listaNumeroscuadrado (nuevaLista) {
     return nuevaLista.map(n => n ** 2);
}
let resultado = listaNumeroscuadrado(nuevaLista);

console.log(nuevaLista);
console.log(resultado);*/