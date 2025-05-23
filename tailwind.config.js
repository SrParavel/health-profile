// tailwind.config.js
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Asegúrate de incluir todas las rutas relevantes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    useOklchColor: false, // 👈 Desactiva el uso de colores OKLCH
  },
};
