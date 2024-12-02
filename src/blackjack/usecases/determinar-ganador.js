/**
 * 
 * @param {Array<Number>} puntosJugadores 
 */
export const determinarGanador = ( puntosJugadores ) => {
      
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {

        if ( puntosComputadora === puntosJugadores[0] ) {
            alert( 'Empate, nadie gana :(' );
        } else if ( puntosJugadores[0] > 21 ) {
            alert( 'Computadora gana' );
        } else if ( puntosJugadores[0] > puntosComputadora || puntosComputadora > 21) { // Caso jugador = 20 y computadora = 22 
            alert( 'Jugador gana' );
        } else {
            alert( 'Computadora gana' );
        }

    }, 10);

}