// Nuevo Idioma "Raris"
// Reglas :
// 1.- Si la palabra termina con 'ar', se le quitanesas dos palabras
    // amasar => amas
// 2.- Si la palabra inicia con 'z', se le añade 'pe'
    // ejemplo: Zorro => Zorrope, Zarpar => Zarppe, por la regla 1
// 3.- Si la palabra traducida tiene más de 10 letras,
    //  se debe partir en dos a la mitad y unir por un guion
// 4.- Si la palabra original es un palíndromo, ninguna regla cuenta y la palabra se devuelve igual intercalando mayusculas y minusculas
    // ejemplo : sometemos => SoMeTeMoS

// ----- Codigo del idioma -----

// Revierte una palabra
    // function reverse(str) {
    //     let word = str.toLowerCase();
    //     let index = str.length;
    //     let newStr = '';
    //     while( 0 <= index) {
    //         newStr += word.charAt(index);
    //         index--;
    //     }
    //     return newStr;
    // }
let reverse = (str) => str.split('').reverse().join('');

// Cambia de de min a may cada caracter
    // function minMay( str ) {
    //     const length = str.length;
    //     let translation = '',
    //         capitalize = true;

    //     for (let i = 0; i < length; i++) {
    //         const char = str.charAt(i);
    //         translation += capitalize ? char.toUpperCase() : char.toLowerCase();
    //         capitalize = !capitalize;  
    //     }      
    //     return translation;
    // }

let minMay = str => str.split('').map((value, idx) => idx % 2 == 0 ? value.toUpperCase() : value.toLowerCase()).join('');

function raris( str ) {
    let translation = str;
    
    // 1. - Si la palabra termina con 'ar', se le quitanesas dos palabras
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    // 2. - Si la palabra inicia con 'z', se le añade 'pe'
        //  str.toLowerCase().startWith('z')
    if (str.toLowerCase().charAt(0) === 'z') {
        translation += 'pe';
    }

    // 3. - Si la palabra traducida tiene más de 10 letras,
    if (translation.length >= 10) {
        const l = translation.length/2;
        translation = translation.substring(0, l) + '-' + translation.substring(l);
    }
    
    // 4. - Si la palabra original es un palíndromo, ninguna regla cuenta y la palabra se devuelve igual intercalando mayusculas y minusculas
    let invertWord = reverse(str)
    if (str.toLowerCase() === invertWord.toLowerCase()) {
        // let palabra = ''
        // let index = 0;
        // while(str.length >= index){
        //     if ( index % 2 == 0) {
        //         palabra += str.charAt(index).toUpperCase();
        //     } else {
        //         palabra += str.charAt(index).toLowerCase();
        //     }
        //     index++;
        // }
        // translation = palabra;
        translation = minMay(str);
    }

    return translation;
}

console.log(raris("Programar")) // Program
console.log(raris("Zorro")) // Zorrope
console.log(raris("Zarpar")) // Zarppe
console.log(raris("Paralelepiped")) // paralel-epipedo
console.log(raris("oao")) // somos