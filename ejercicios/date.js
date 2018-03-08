// (Año, mes -1, día)
const nacimiento = new Date(1990, 8, 21),
      hoy = new Date(),
      tiempo = hoy - nacimiento,
      tiempoSec = tiempo / 1000,
      tiempoMin = tiempoSec / 60,
      tiempoHor = tiempoMin / 60;
      proximoBD = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
      dias = [
          "Domingo",
          "Lunes",
          "Marte",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
      ]
      console.log(dias[proximoBD.getDay()]);