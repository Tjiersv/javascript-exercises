// correrlo en un servidor
// peticion get con promesas
function GET(URL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            const DONE = 4
            const OK = 200
            if (this.readyState === DONE) {
                if (this.status === OK) {
                    resolve(JSON.parse(this.responseText))
                } else {
                    reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
                }
            }
        }
        xhr.open('GET', URL)
        xhr.send(null)
    })
}

function _handleError(err) {
    return console.log(`Request failed: ${err}`)
}

// con GET
let luke;
get('http://swapi.co/api/people/1/')
.then((response) => {
    luke = response
    get(luke.homeworld)
})
.then((homerworld) => {
    luke.homerworld = homeworld
    console.log(`${luke.name} nació en ${luke.homerworld.name}`);
})
.cath(err => _handleError(err))

// con FETCH
// fetch('http://swapi.co/api/people/1/')
// .then(response => response.json())
// .then((json) => {
//     luke = json
//     fetch(luke.homeworld)
// })
// .then(response => response.json())
// .then((json) => {
//     luke.homerworld = json
//     console.log(`${luke.name} nació en ${luke.homerworld.name}`);
// })
// .cath(err => _handleError(err))

// // ejemplo medio de promesas
let ITINERARIO = {
    despertar : 3000,
    ducha : 2000,
    vestirse : 2000,
    desayunar : 3000,
    trabajo : 5000
}

const $AGENDA = document.getElementById('agenda')

// despertar
function despertar() {
    $AGENDA.textContent = 'Ahora me estoy despertando'
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ahora me estoy duchando')
        }, ITINERARIO.despertar);
    })
}
// ducha
function ducha(message) {
    $AGENDA.textContent = message
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ahora me estoy vistiendo')
        }, ITINERARIO.ducha);
    })
}
// vestirse
function vestirse(message) {
    $AGENDA.textContent = message
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ahora estoy desayunando')
        }, ITINERARIO.vestirse);
    })
}
// desayunar
function desayunar(message) {
    $AGENDA.textContent = message
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ahora estoy trabajando')
        }, ITINERARIO.desayunar);
    })
}
// trabajo
function trabajo(message) {
    $AGENDA.textContent = message
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ahora estoy descansando')
        }, ITINERARIO.trabajo);
    })
}

despertar()
    .then(ducha)
    .then(vestirse)
    .then(desayunar)
    .then(trabajo)
    .then( message => $AGENDA.textContent = message)
    .catch( err => _handleError(err) )