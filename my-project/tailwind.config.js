/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B3CFB', // Bluish Purple
        secondary: '#FF8C2F', // Yuzu Jam
        analogous1: '#4B3CFB', // Ice Ice Baby (same as primary)
        analogous2: '#1BC6E5', // Rich Blue
        triadic1: '#4B3CFB', // Electric Indigo (same as primary)
        dark: '#2F2F2F', // Tricorn Black
        text: {
          DEFAULT: '#2F2F2F', // Tricorn Black
          light: '#9C9891', // Acier
          subtle: '#9C9891', // Acier
        },
        accent: {
          DEFAULT: '#E2F2FE', // Wizard White
          cuddly: '#FFF8E0', // Cuddly Yarn
        },
        error: '#FF1E00', // Hornet Sting
        success: '#1FFF00', // Frog
        heroStart: '#4DCA79', // Green for Hero gradient
        heroEnd: '#1CBDDD',   // Blue for Hero gradient
      },
    },
  },
  plugins: [],
}