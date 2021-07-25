// Notacion Punto
var persona = {
  nombre: 'Pedro',
  apellido: 'Lallomas',
  edad: 34,
  direccion: {
    calle: 'los resos',
    numero: 345,
    comuna: {
      nombre: 'Arubia',
      ciudad: 'valdiva'
    }
  }
}

var comuna = persona.direccion.comuna
comuna.region = 'Los Montes'

console.log(persona);

// Notacion corchete
console.log( persona["nombre"] );
