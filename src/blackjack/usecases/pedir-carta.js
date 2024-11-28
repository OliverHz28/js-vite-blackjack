

/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} Retorna una carta
 */
// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ){
        throw new Error('No hay cartas en el deck');
    }

    return deck.pop();
}