/**
 * 
 * @param {String} carta 
 * @param {HTMLElement} divCarta 
 */
export const crearCarta = ( carta, divCarta) => {

    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCarta.append( imgCarta );
}