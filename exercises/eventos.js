// Eventos

function entrar() {
    console.log('Entrar')
}
function salir() {
    console.log('Salir')    
}
var demo = document.getElementById('demo')
demo.addEventListener("click", entrar())   

// bloquear el click derecho 
document.onmousedown = function (arg) {
    if ( arg.button === 2 ) {
        alert('Click derecho bloqueado')    
        return
    } else {
        console.log('No hay Problema')
    }   
}

document.onmouseup = function () {
    var texto = window.getSelection().toString()
    console.log(texto)
}

// evento submit
function validar() {

    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    console.log(nombre.length, apellido.length);
    if (nombre.length <= 1 || apellido.length <= 1){
        console.log('Mal');
        return false;
    }
    console.log('bien');
    return true;
}

function getParamURL(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

console.log(window.location.search);
console.log(window.location.search.split("&"));
console.log(getParamURL("txtNombre"));

// cajas de dialogos
alert("Hola Mundos");

var acepto = confirm("Esta seguro que desea borrarlo?");
console.log(acepto); 

var acepto = prompt("Ingrese su nombre", "Nombre");
console.log(acepto); 

// Relacionados con el ratón //
// onclick - Click sobre un elemento
// ondblclick - Doble click sobre un elemento
// onmousedown - Se pulsa un botón del ratón sobre un elemento
// onmouseenter - El puntero del ratón entra en el área de un elemento
// onmouseleave - El puntero del ratón sale del área de un elemento
// onmousemove - El puntero del ratón se está moviendo sobre el área de un elemento
// onmouseover - El puntero del ratón se sitúa encima del área de un elemento
// onmouseout - El puntero del ratón sale fuera del área del elemento o fuera de uno de sus hijos
// onmouseup - Un botón del ratón se libera estando sobre un elemento
// contextmenu - Se pulsa el botón derecho del ratón (antes de que aparezca el menú contextual)

// Relacionados con el teclado //
// onkeydown El usuario tiene pulsada una tecla (para elementos de formulario y body)
// onkeypress El usuario pulsa una tecla (momento justo en que la pulsa) (para elementos de
// formulario y body)
// onkeyup El usuario libera una tecla que tenía pulsada (para elementos de formulario y
// body)

// Relacionados con formularios //
// onfocus Un elemento del formulario toma el foco
// onblur Un elemento del formulario pierde el foco
// onchange Un elemento del formulario cambia
// onselect El usuario selecciona el texto de un elemento input o textarea
// onsubmit Se pulsa el botón de envío del formulario (antes del envío)
// onreset Se pulsa el botón reset del formulario