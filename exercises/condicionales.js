const movie =  'Dunkirk',
      pegiMovie = 18,
      persona = [
        {
            name: 'tjier',
            age: 27
        },
        {
            name: 'ami',
            age: 14
        }
      ]

function canWatchTheMovie( name, age, isWithAdult = false ) {
    if( age >= pegiMovie) {
        alert(`${name} puede pasar a ver la pelicula ${movie}`)
    } else if ( isWithAdult ) {
        alert(`${name} puede pasar a ver la pelicula ${movie} acompañado de un adulto `)
    } else {
        alert(`${name} no puede pasar a ver la pelicula ${movie}.
        tiene ${age} años y debe tener al menos ${pegiMovie}.`)
    }
}
