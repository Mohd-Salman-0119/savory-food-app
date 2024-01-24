/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-pink": "#ffe9f8",
        "light-sky": "#e9ffff",
        "light-orange": "#fceacf",
        "light-vanila": "#f1f8e8",
        "light-blue": "#e9f7ff",
        "primary": "#73b915",
        "app-blue": "#6E81D6",
        "app-sky": "#3de3e3",
        "app-pink": "#FD79D3",
        "app-orange": "#e3893d",
        "app-purple": "#8565CB",
        "gray": "#c2c7d0"
      },
      screens: {
        '2sm': '350px',
        'sm': '640px',     // Small screens
        'md': '768px',     // Medium screens
        'lg': '1024px',    // Large screens
        'xl': '1280px',    // Extra-large screens
      }
    },
  },
  plugins: [],
}

