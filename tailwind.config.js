/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/**/*.{js,ts,jsx,tsx,html,css}'
  ],
  theme: {
    extend: {
      mask: {
        'radial-gradient': 'radial-gradient(var(--R) at left 50% bottom calc(-1*var(--p)),var(--_g))',
        'radial-gradient':'radial-gradient(var(--R) at left 50% top calc(-1*var(--p)),var(--_g))'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
