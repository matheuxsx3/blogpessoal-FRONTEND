//config padrão:
///** @type {import('tailwindcss').Config} */
//export default {
//  content: [],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}

//config personalizada:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}