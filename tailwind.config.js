/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        yellow: {
          '200': '#F9F871', //Color fondo del foter y letras del titulo
        },
        gray: {
          '100':'#F5F5F5', //Color de fondo
          '200': '#466477', //Color parte debajo pie de pagina
          '300': '#4B8593', 
          '400': '#D9D9D9', //Color de cuerpo formulario
          '600': '#EABAFF', //Color de las letras de la seccion de pregunta
          '700': '#006D96', //Titulos Footer
        },
        purple: {
          '100': '#7052FF', //Color Titulos y Botones
        },
        
        blue:{
          '300': '#008FAA' //Color boton de contacto
        },
      },
      animation: {
        'stop-after-2s': '5s forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '@keyframes stop-after-2s': {
          '0%': { animationTimingFunction: 'linear', animationPlayState: 'running' },
          '100%': { animationTimingFunction: 'linear', animationPlayState: 'paused' },
        },
      });
    },
  ],
}

