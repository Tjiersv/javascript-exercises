const nombre = "tjier";

const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
];

function correr() {
    const min = 5;
    const max = 15;
    // math.floor//rendondea hacia abajo 3.9 = 3
    // math.ceil//redondea para arriba 3.1 = 4
    // math.round// redondea dependiendo 3.1 = 3, 3.5 = 4
    return Math.round(Math.random() * (max - min) + min);
}

let totalKms = 0;
const length = dias.length;
for (let i = 0; i < length; i++) {
    const kms = correr();
    totalKms += kms
    console.log(`El dia ${dias[i]} ${nombre} corrió ${kms} kms`);
}

const mediaKms = totalKms / length;
console.log(`En promedio ${nombre} recorrió ${mediaKms.toFixed(2)}`);
