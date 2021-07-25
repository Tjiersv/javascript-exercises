// Saludar A Familiares
function saludarFamilia(apellido) {
    return function saludarMiembroDeFamilia(nombre) {
        console.log(`Hola ${nombre} ${apellido}`);
    }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarRojas = saludarFamilia("Rojas")

saludarGomez("Juan")
saludarGomez("Jose")
saludarGomez("Maria")
saludarGomez("Josefa")

saludarRojas("Pedro")
saludarRojas("Federico")
saludarRojas("Agustin")
saludarRojas("Lorena")

// Agregar Prefijo
function prefijo(pre) {
    return function makePrefijo(palabra) {
        console.log(`${pre}${palabra}`);
    }
}

const prefijoIn = prefijo("In")
const prefijoRe = prefijo("Re")

prefijoIn("creíble")
prefijoRe("bueno")