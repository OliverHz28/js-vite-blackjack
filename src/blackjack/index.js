import _ from 'underscore';

import {acumularPuntos, crearCarta, crearDeck, determinarGanador, pedirCarta, turnoComputadora} from './usecases';

(() => {

  'use strict'
  let deck           = [];
  const   tipos      = [ 'C', 'D', 'H', 'S' ], 
          especiales = [ 'A', 'J', 'Q', 'K' ];

  let puntosJugadores = [];

  // Referencias del HTML
  const   btnPedir              = document.querySelector( '#btnPedir' ),
          btnDetener            = document.querySelector( '#btnDetener' ),
          btnNuevo              = document.querySelector( '#btnNuevo' );
          
  const   puntosHTML            = document.querySelectorAll( 'small' ),
          divCartasJugadores    = document.querySelectorAll( '.divCartas' );

  // Esta función inicializa el juego
  const inicializarJuego = ( numJugadores = 2) => {
      deck = crearDeck( tipos, especiales);
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }

      puntosHTML.forEach( elem => { elem.innerText = 0 });
      divCartasJugadores.forEach( elem => { elem.innerHTML = '' });
      btnDetener.disabled = false;
      btnPedir.disabled   = false;
  }

  // Eventos

  btnPedir.addEventListener('click', () => {
      
      const carta = pedirCarta( deck ) ; 
      puntosJugadores[0] = acumularPuntos(carta, puntosJugadores[0] ,puntosHTML[0]);        
      crearCarta( carta, divCartasJugadores[0])

      if ( puntosJugadores[0] > 21 ) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugadores[0], divCartasJugadores[1], puntosHTML[1], deck );
          determinarGanador(puntosJugadores);
      } else if (puntosJugadores[0] === 21 ) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugadores[0], divCartasJugadores[1], puntosHTML[1], deck );
          determinarGanador(puntosJugadores);
      }  

  })

  btnDetener.addEventListener( 'click' , () => {

      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora( puntosJugadores[0], divCartasJugadores[1], puntosHTML[1], deck );
      determinarGanador(puntosJugadores);

  })


  btnNuevo.addEventListener( 'click', () => {
      inicializarJuego();
  } )

})();
