const timer = document.getElementById('timer')
let contador = 0;
const interval = setInterval(()=>{
    contador++;
    timer.textcontent = `Ha pasado ${contador} segundos`
    console.log(`Ha pasado 1 segundos`);
}, 1000)

const $cancelButton = document.getElementById('cancel-button')
$cancelButton.addEventListener('click', () => {
    clearTimeout(interval)
})