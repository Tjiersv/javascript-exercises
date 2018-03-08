let jose = {
    nombre: 'Jose',
    apellido: 'Valente',
    edad: 30
}

// // funcion normal
function cumpleanos(persona) {
    persona.edad++
}

let otroJose = jose

// la funcion opera en los dos objetos
cumpleanos(jose) // edad: 31
otroJose // edad: 31

// // funcion con inmutabilidad
cumpleanos = function (persona) {
    const clone = Object.assign({}, persona)
    clone.edad++
    return clone
}

// la funcion opera solo en el clone
let cloneJose = cumpleanos(jose) // edad: 31 --> Clone de Jose
jose // edad: 30 --> Jose real

cloneJose === Jose // false


