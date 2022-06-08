module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white-grey': '#e5e5e5',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#505050",
          secondary: "#f8f8f8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
  
}
