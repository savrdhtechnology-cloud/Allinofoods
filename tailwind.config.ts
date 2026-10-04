import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        allino: {
          green:"#1E4D3A",
          lime:"#8DBE57",
          gold:"#E2A93B",
          cream:"#FFF8ED",
          ink:"#1E1A17",
          coral:"#D95F45",
          sand:"#F2E7D7"
        }
      },
      boxShadow: {
        glow:"0 24px 80px rgba(217,95,69,.16)",
        card:"0 18px 50px rgba(51,37,27,.10)",
        soft:"0 10px 35px rgba(51,37,27,.08)"
      },
      borderRadius: {
        "4xl":"2rem"
      }
    }
  },
  plugins: []
};
export default config;
