// PELEA ENTRE GOKU Y VEGETA - JUEGO
// variables
let vidaGoku = 100,
    vidaVegeta = 100;
    round = 1;

const MIN_POWER = 5,
      MAX_POWER = 12;
      
// funciones

const ambosSiguenVivos = () => vidaGoku > 0 && vidaVegeta > 0;
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
const gokuGanoPelea = () => vidaGoku > 0 && vidaVegeta <= 0;

while ( ambosSiguenVivos() ) {

    const golpeGoku = calcularGolpe(),
          golpeVegeta = calcularGolpe();
    
    if ( golpeGoku > golpeVegeta ) {
        //ataca goku
        console.log(round, `: Goku ataca a Vegeta con un golpe de ${golpeGoku}`)
        vidaVegeta -= golpeGoku;
        console.log(`: Vegeta queda con ${vidaVegeta} de vida`)
    } else {
        //ataca vegeata
        console.log(round, `: Vegeta ataca a Goku con un golpe de ${golpeVegeta}`);
        vidaGoku -= golpeVegeta;
        console.log(`: Goku queda con ${vidaGoku} de vida`)
    }
    round++;

};

if (gokuGanoPelea()) {
    console.log(`Goku le gano a Vegeta. Con una vida restante de ${vidaGoku}`);
} else {
    console.log(`Vegeta le gano a Goku. Con una vida restante de ${vidaVegeta}`);
}