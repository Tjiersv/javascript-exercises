// // Array.reduce()
// funcion normal
function suma(...numeros) {
    return numeros.reduce(function (acum, numero) {
        acum += numero
        return acum
    },0)
}
// funcion Arrow
let suma = (...numeros) => numeros.reduce( (acum, numero)  => acum += numero)

// // Array.map()
// funcion normal
function dobles(...numeros) {
    return numeros.map(function (a) {
        a * 2
        return a;
    })
}
// funcion Arrow
let dobles = (...numeros) => numeros.map( a => a * 2 )


// // Array.filter()
// funcion normal
function esPar(...numeros) {
    return numeros.filter(function (a) {
        if(a%2 == 0){
            return a;
        }
    })
}
// funcion Arrow
let esPar = (...numeros) => numeros.filter( a => a % 2 == 0)



suma(4,20,25,13,3,7,9)
dobles(4,20,25,13,3,7,9)