/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'glossy-overlay': 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent 50%)',
      }
    
    },
  },
  plugins: [],
}