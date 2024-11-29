
/**
 * Obtener el valor de la carta
 * @param {String} carta Carta sacada
 * @returns {Number} Valor numerico de la carta
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring( 0, carta.length - 1 );
    return ( isNaN( valor ) ) ? 
                ( valor === 'A') ? 11 : 10  // Primera condicion
                : valor * 1;                // Segunda condicion
}