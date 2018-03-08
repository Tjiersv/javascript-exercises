// function getBalasRestantes( disparado, cargado ) {
//     return cargado - disparado;
// }

let getBalasRestantes = (disparado, cargado) => (disparado <= cargado ) ? cargado - disparado : console.log('No se pueden disparar más balas de las cargadas');
