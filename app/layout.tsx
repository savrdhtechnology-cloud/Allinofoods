import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALLINO FOODS & RESTAURANTS",
  description: "ALLINO FOODS & RESTAURANTS — Fresh Food. Local Kitchens. One Platform."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
