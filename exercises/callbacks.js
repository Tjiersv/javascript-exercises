// callback básico
function saludar( veces, callback) {
    let saludar = []
    for (let index = 0; index < veces; index++) {
        console.log("Hola");
        saludar.push(index)
    }
    callback(saludar)
}

saludar(3, function (idx) {
    console.log("Termino saludar:", idx);
})

// callback asincronico
setTimeout(function () {
    console.log("Ya paso 3 segundo");
}, 3000)

console.log("Hola!!!"); // Se ejecuta antes que el callback de settimeout

// Ejemplo medio de callbacks

const ITINERARIO = {
    despertar : 3000,
    ducha : 2000,
    vestirse : 2000,
    desayunar : 3000,
    trabajo : 5000
}
const $agenda = document.getElementById('agenda')
setTimeout(() => {
    $agenda.textContent = 'Ahora me estoy despertando'
    setTimeout(() => {
        $agenda.textContent = 'Ahora me estoy duchando'
        setTimeout(() => {
            $agenda.textContent = 'Ahora me estoy vistiendo'
            setTimeout(() => {
                $agenda.textContent = 'Ahora estoy desayunando'
                setTimeout(() => {
                    $agenda.textContent = 'Ahora estoy trabajando'
                }, ITINERARIO.trabajo);
            }, ITINERARIO.despertar);
        }, ITINERARIO.vestirse);
    }, ITINERARIO.ducha);
}, ITINERARIO.despertar);