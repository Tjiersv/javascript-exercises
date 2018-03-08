// correrlo en un servidor
// peticion con async-await
// utilizar babel-polyfill
function fetch(URL) {
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

async function getLuke() {
    try {
        const response = await fetch('http://swapi.co/api/people/1/')
        const luke = await response.json()
        const responseHomeworld = await fetch(luke.homeworld)
        luke.homerworld = await responseHomeworld.json()
        console.log(`${luke.name} nació en ${luke.homerworld.name}`);
    } catch (err) {
        _handleError(err)
    }
}