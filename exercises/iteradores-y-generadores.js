// // fibonacci con iterador
// function fibonacci() {
//     let a = 0,
//         b = 1
//     return {
//         next: function () {
//             let f = a
//             a = b
//             b = f + a
//             return { value: f, done: false }
//         }
//     }
// }

// const fibo = fibonacci()
// fibo.next().value // 0
// fibo.next().value // 1
// fibo.next().value // 1
// fibo.next().value // 2

// // aplicando a ForOf a objeto  
function fibonacci() {
    let a = 0,
        b = 1
    return {
        next: function () {
            if(reset) a = 0, b = 1
            let f = a
            a = b
            b = f + a
            return { value: f, done: false }
        }
    }
}

const fibo = {}
fibo[Symbol.iterator] = fibonacci

let i = 0
for (const value of fibo) {
    console.log(value);
    i++;
    if(i > 20) break    
}

// // fibonacci con generador
function* fibonacci() {
    let a = 0,
        b = 1
    
    while (true) {
        let f = a
        a = b
        b = f + a
        let reset = yield f
        if(reset) a = 0, b = 1 
    }
}
