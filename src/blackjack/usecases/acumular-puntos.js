import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {String} carta 
 * @param {Number} puntosJugadores 
 * @param {HTMLElement} puntosHTML 
 * @returns 
 */
  // Turno 0 = primer jugador y el último será la computadora
 export const acumularPuntos = ( carta, puntosJugadores, puntosHTML ) => {
      
    puntosJugadores = puntosJugadores + valorCarta( carta );    
    puntosHTML.innerText = puntosJugadores;
    return puntosJugadores;
}