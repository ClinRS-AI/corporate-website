const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, "app", "**", "*.{ts,tsx}"),
    path.join(__dirname, "components", "**", "*.{ts,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

