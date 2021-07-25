// // This y _This
class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }

    // // No funciona por el scope del this
    // listarAmigos() {
    //     this.amigos.forEach( function (amigo) {
    //         console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
    //     });
    // }

    // // solucion con _this
    // listarAmigos() {
    //     const _this = this
    //     this.amigos.forEach( function (amigo) {
    //         console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`);
    //     });
    // }

    // // solucion con metodo bind
    // listarAmigos() {
    //     this.amigos.forEach( function (amigo) {
    //         console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
    //     }.bind(this))
    // }

    // // solucion con arrow function
    listarAmigos() {
        this.amigos.forEach( amigo => {
            console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
        })
    }
}

const jose = new Persona("Jose", ["Maria", "Luis", "Pedro"])