
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         blu: '#47a9ff',
//       },
//       animation: {
//         "scroll-left": "scroll-left 20s linear infinite",
//         "scroll-right": "scroll-right 20s linear infinite",
//       },
//       keyframes: {
//         "scroll-left": {
//           from: { transform: "translateX(0%)" },
//           to: { transform: "translateX(-50%)" },
//         },
//         "scroll-right": {
//           from: { transform: "translateX(-50%)" },
//           to: { transform: "translateX(0%)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        blu: '#47a9ff',
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite", // Adjust the speed here
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" }, // Complete scroll of images
        },
      },
    },
  },
  plugins: [],
};
