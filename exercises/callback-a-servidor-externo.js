// correrlo en un servidor
// peticion get con callback
function GET(URL, callback) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        const DONE = 4
        const OK = 200
        if (this.readyState === DONE) {
            if (this.status === OK) {
                callback(null, JSON.parse(this.responseText))
            } else {
                callback(new Error(`Se produjo un error al realizar el request: ${this.status}`))
            }
        }
    }
    xhr.open('GET', URL)
    xhr.send(null)
}

function _handleError(err) {
    return console.log(`Request failed: ${err}`)
}

get('http://swapi.co/api/people/1/', function onResponse(err, luke) {
    if(err) return _handleError(err)
    get(luke.homeworld, function onHomeworldRespone(err, homeworld) {
        if(err) return _handleError(err)
        luke.homerworld = homeworld
        console.log(`${luke.name} nació en ${luke.homerworld.name}`);
    })
})