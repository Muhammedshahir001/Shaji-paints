/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
        backgroundImage: {
      bannerImg:
        "url('')",
      loginBg:
        "url(https://res.cloudinary.com/dn6anfym7/image/upload/v1699693210/ezgif.com-resize_osqicn.gif)",
      adminLogBg:
        "url(https://www.pixground.com/wp-content/uploads/2023/10/Floating-City-Pixel-World-AI-Generated-4K-Wallpaper-1536x864.webp)",
    },
  },
  plugins: [],
}

