import type { Metadata } from "next";
import "./globals.css";
import GlobalMotionBackground from "@/components/global-motion-background";

export const metadata: Metadata = {
  title: "ALLINO FOODS & RESTAURANTS",
  description: "ALLINO FOODS & RESTAURANTS — Fresh Food. Local Kitchens. One Platform."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body className="relative isolate"><GlobalMotionBackground/><div className="relative z-10">{children}</div></body></html>;
}
