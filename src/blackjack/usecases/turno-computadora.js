import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} divCarta 
 * @param {HTMLElement} puntosHTML 
 * @param {Array<String>} deck 
 */
  // turno de la computadora
  export const turnoComputadora = ( puntosMinimos, divCarta, puntosHTML, deck = [] ) => {

    if( !puntosMinimos ) throw Error('Puntos minimos son necesarios');

    let puntosComputadora = 0;
    do {
        const carta       = pedirCarta( deck ); 
        puntosComputadora = acumularPuntos( carta, puntosComputadora, puntosHTML );
        crearCarta(carta, divCarta );

    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

}   