import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/background/AnimatedBackground";

export const metadata: Metadata = {
  title: "ALLINO FOODS & RESTAURANTS",
  description: "ALLINO FOODS & RESTAURANTS — Fresh Food. Local Kitchens. One Platform."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body className="relative isolate"><AnimatedBackground variant="auto" intensity="subtle" particles leaves parallax/><div className="relative z-10">{children}</div></body></html>;
}
