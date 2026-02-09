const nmbr = document.querySelector('#nmbr');

window.onload = (function() {
  nmbr.animate([
    { opacity: 0, transform: 'scale(0)' },
    { opacity: 1, transform: 'scale(1)' }
  ], {
    duration: 1500,
    easing: 'ease-in',
    fill: 'forwards'
  });
})();