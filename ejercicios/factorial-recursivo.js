// function factorial( fact ) {
//     let result = fact;
//     if( fact > 0 ) {
//         result = result * factorial (fact - 1); 
//     } else {
//         result = 1;
//     }
//     return result;
// }
// console.log("factorial", factorial(6));

let factorial = (n) => (n > 0) ? n = n * factorial(n - 1) : n = 1;

