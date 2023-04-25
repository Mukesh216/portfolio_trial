/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: "#0ef",
        secondBg: "#323946",
        Bg: "#1f242d",
        nav:"#850aa1",
      },
      fontWeight: {
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontFamily: {
        'inconsolata':[ 'Inconsolata', 'monospace'],
        'poppins': ['Poppins'],
        'pacifico': ['Pacifico' , 'cursive'],
        'bodoni' : ['Bodoni Moda'],
        'raleway' :['Raleway'],
        'montserrat' : ['Montserrat'],
        'aboreto': ['Aboreto'],
        'manrope': ['Manrope'],
        'biz': ['BIZ UDPGothic'],
        'varela':[ 'Varela'],
        'dyna' : ['DynaPuff'],
        'meri' : ['Merienda'],
        'hand' : ['Handlee'],
        'rubik' : ['Rubik Vinyl']
      },
},
  },
plugins: [],
}

