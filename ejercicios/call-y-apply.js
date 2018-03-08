const pedro = {
    nombre: "Pedro",
    apellido: "Picapiedra"
}

function saludar( veces, uppercase ) {
    let str = `Hola ${this.nombre} ${this.apellido}`
    str = uppercase ? str.toUppercase() : str
    for (let index = 0; index < veces; index++) {
        console.log(str);    
    }
}
// con call y parametros
saludar.call(pedro, 3, true)

// con call y arreglo
const params = [3, true]
saludar.call(pedro, ...params)

// con apply y areglo
saludar.apply(pedro, [3, true])