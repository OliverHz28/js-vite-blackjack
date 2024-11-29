import _ from 'underscore';
import { crearDeck } from './usecases/crear-deck';
import { pedirCarta } from './usecases/pedir-carta';
import { valorCarta } from './usecases/valor-carta';
// import crearDeck, { miNombre } from './usecases/crear-deck';
// import cualquierNombreParaCrearUnNuevoDeck from './usecases/crear-deck'; Por defecto

// console.log( miNombre );

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

  // Turno 0 = primer jugador y el último será la computadora
  const acumularPuntos = ( carta, turno ) => {
      
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );    
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
  }

  const crearCarta = ( carta, turno) => {

      const imgCarta = document.createElement( 'img' );
      imgCarta.src = `assets/cartas/${ carta }.png`;
      imgCarta.classList.add('carta');
      divCartasJugadores[ turno ].append( imgCarta );
  }


  const determinarGanador = () => {
      
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

  // turno de la computadora
  const turnoComputadora = ( puntosMinimos ) => {
      let puntosComputadora;
      do {
          const carta       = pedirCarta( deck ); 
          puntosComputadora = acumularPuntos( carta, 1 );
          crearCarta(carta, puntosJugadores.length - 1);

      } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

      determinarGanador();

  }


  // Eventos

  btnPedir.addEventListener('click', () => {
      
      const carta = pedirCarta( deck ) ; 
      const puntosJugador = acumularPuntos(carta, 0);        
      crearCarta( carta, 0)

      if ( puntosJugador > 21 ) {
          console.warn( 'Lo siento mucho, perdiste' );
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador );
      } else if (puntosJugador === 21 ) {
          console.warn( '21, genial' );
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador );
      }  

  })

  btnDetener.addEventListener( 'click' , () => {

      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora( puntosJugadores[0] );

  })


  btnNuevo.addEventListener( 'click', () => {
      inicializarJuego();
  } )

})();
