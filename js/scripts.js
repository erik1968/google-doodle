console.log('OK');

gsap.from('#PlayMe', { x: -500, duration: 3} );
gsap.from( '#FlyingV', {
// Move Play Me! and FlyingV to 'set the stage' for the animations 
    x: -500,
    opacity: 0,
    duration: 3
    
  });

// Next: on Click vibrates strings, send shockwave thru Google letters to the MegaStack amps
