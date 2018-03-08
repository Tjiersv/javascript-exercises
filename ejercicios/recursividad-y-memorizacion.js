// fibonacci recursivo normal
function fibonacci(num) {
    if(num == 1) return 0;
    if(num == 2) return 1;
    return fibonacci(num - 1) +  fibonacci(num - 2);
}
// fibonacci recursivo con Memorizacion
function fibonacci(num, memoria = {}) {
    if(memoria[num]) return memoria[num];
    if(num == 1) return 0;
    if(num == 2) return 1;
    return memoria[num] = fibonacci(num - 1, memoria) +  fibonacci(num - 2, memoria);
}
