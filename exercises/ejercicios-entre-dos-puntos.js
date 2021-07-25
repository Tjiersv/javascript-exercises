// // // Calcular la distancia entre el punto A y B | Mover los puntos

// // como object/ object.create
// let Punto = {
//   init: function init(x, y) {
//     this.x = x
//     this.y = y
//   },
//   moverEnX: function moverEnX(x) {
//     this.x += x
//   },
//   moverEnY: function moverEnY(y) {
//     this.y += y
//   },
//   distancia: function distancia(p) {
//     const x = this.x - p.x
//     const y = this.y - p.y
//     return Math.sqrt(x * x + y * y)
//   }
// }

// // como funcion/ funcion = new ()
// function Punto(x, y) {
//   this.x = x
//   this.y = y
// }

// Punto.prototype.moverEnX = function moverEnX(x) {
//   this.x += x;
// }

// Punto.prototype.moverEnY = function moverEnY(y) {
//   this.y += y;
// }

// Punto.prototype.distancia = function distancia (p) {
//   const x = this.x - p.x
//   const y = this.y - p.y
//   return Math.sqrt(x * x + y * y)
// }

// // como clases/ = new ()
class Punto{
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  moverEnX(x) {
    this.x += x;
  }
  
  moverEnY(y) {
    this.y += y;
  }
  
  distancia (p) {
    const x = this.x - p.x
    const y = this.y - p.y
    return Math.sqrt(x * x + y * y)
  }
}



// // solucion basica
// const puntoA = {
//   ejeX: 3,
//   ejeY: 0,
//   moverEnX: (x) => { this.x += x },
//   moverEnY: (y) => { this.y += y }
// }
// const puntoB = {
//   ejeX: 0,
//   ejeY: 4,
//   moverEnX: (x) => { this.x += x },
//   moverEnY: (y) => { this.y += y }
// }
// let distancia = Math.sqrt((Math.pow(puntoA.ejeX - puntoA.ejeY, 2)) + (Math.pow(puntoB.ejeY - puntoB.ejeX, 2)));
// let distancia = (a, b) => { return Math.sqrt((Math.pow(a.ejeX - a.ejeY, 2)) + (Math.pow(b.ejeY - b.ejeX, 2)))};

const p1 = new Punto(0,4)
const p2 = new Punto(3,0)

// const p1 = Object.create(Punto)
// const p2 = Object.create(Punto)
// p1.init(0,4)
// p2.init(3,0)

console.log(p1.distancia(p2));
p1.moverEnX(10)
p1.moverEnY(2)
console.log(p1.distancia(p2));


