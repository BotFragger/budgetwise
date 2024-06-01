/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        coins: 'url(/Coins.png)',
        shape: 'url(/Shape.png)',
        line: 'url(/Line.png)',
        star: 'url(Star.png)',
        ornamenAU: 'url(/ornamen-AU-bawah.png)',
        ornamenHIW: 'url(/ornamen-HIW-atas.png)',
        coinHIWbawah: 'url(/coin-HIW-bawah.png)',
        coinTIMatas: 'url(/coin-TIM-atas.png)'
      },
      colors: {
        biru: '#515F96',
        krem: '#FAF0CA',
        mustard: '#F4D35E'
      },
      borderColor: {
        borderBlue: '#0D3B66'
      }
    }
  },
  plugins: []
}
