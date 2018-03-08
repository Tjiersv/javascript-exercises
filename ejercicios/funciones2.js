
// Variables
let base = 5;
let altura = 7
let radio = 2;
let lado = 2;

    // function areaTriangulo( base, altura ) {
    //     console.log(`El area de un triangulo de base 5 y altura 7 es ${base + altura / 2}`);
    // }
    // areaTriangulo(base, altura);

// Area de un triangulo
const areaTriangulo = (b, a) => (b * a)/2;
console.log(`El area de un triangulo de base 5 y altura 7 es ${areaTriangulo(base, altura)}`);

// Area de un circulo
const areaCirculo = ( r ) => Math.PI * Math.pow( r, 2 );
console.log(`El area de un circulo de radio 2 es ${areaCirculo(radio)}`);

// Area de un cuadrado
const areaCuadrado = (c) => Math.pow(c, 2);
console.log(`El area de un cuadrado de lado 2 es ${areaCuadrado(lado)}`);
