// setTimeout básico
setTimeout( () => {
    console.log("5 segundos");
}, 5000)

setTimeout( () => {
    document.write('han pasado 5 segundos')
}, 5000)

const $cancelButton = document.getElementById('cancel-button')
$cancelButton.addEventListener('click', () => {
    clearTimeout(timeout)
})
const timeout = setTimeout( () => {
    alert('han pasado 5 segundos')
}, 5000)

