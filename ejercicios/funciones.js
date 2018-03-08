// Funciones
var a = 20;

function miFuncion() {
  var a = 10;
  console.log(this.a);
  console.log(a);
}

miFuncion();

var funcion = miFuncion;

// Parametros en Funciones

function imprimir(nombre, apellido) {
  nombre   = nombre || 'Jose'
  apellido = apellido || 'Solano'

  console.log(nombre +" "+ apellido);
}

imprimir("Pedro")

function imprimirDos( persona ) {
  persona.nombre   = persona.nombre || 'Jose'
  persona.apellido = persona.apellido || 'Solano'

  console.log(persona.apellido);
}
var obj = {
  nombre: "Tjier",
  apellido: "Salazar"
}
imprimir(obj)

// El retorno de las Funciones

function obtenerAleatorio() {
  return Math.random()
}

function obtenerNombre() {
  return "Juan"
}

function booleano() {
  if (obtenerAleatorio() > 0.5) {
    return true
  } else {
    return false
  } 
}

if (booleano()) {
  console.log("Mayor a 0.5")
} else {
  console.log("Menor a 0.5")
}

console.log( obtenerNombre() + " Padilla" ) 
console.log( booleano() ) 