import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        allino: { green:"#0B3D2E", lime:"#95C11F", gold:"#D6A84B", cream:"#FFF8E8", ink:"#071712" }
      },
      boxShadow: {
        glow:"0 24px 80px rgba(214,168,75,.18)",
        card:"0 20px 60px rgba(11,61,46,.12)"
      }
    }
  },
  plugins: []
};
export default config;
