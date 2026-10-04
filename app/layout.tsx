import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allino Foods & Restaurants",
  description: "Fresh Food. Local Kitchens. One Platform."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
