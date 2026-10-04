import type {Metadata,Viewport} from "next";
import {Manrope,Playfair_Display} from "next/font/google";
import "./globals.css";
import MobileBottomNav from "@/components/navigation/mobile-bottom-nav";

const sans=Manrope({subsets:["latin"],variable:"--font-sans",display:"swap"});
const display=Playfair_Display({subsets:["latin"],variable:"--font-display",display:"swap"});

export const metadata:Metadata={
  title:{default:"Allino Foods | Discover Great Food",template:"%s | Allino Foods"},
  description:"Discover great food from Allino Foods, trusted restaurants and talented home chefs. Explore dishes, local kitchens and fresh food in one marketplace.",
  openGraph:{
    title:"Allino Foods",
    description:"Discover Great Food. From Allino, Restaurants & Home Chefs.",
    type:"website",
    siteName:"Allino Foods"
  }
};

export const viewport:Viewport={themeColor:"#FFF8ED",colorScheme:"light"};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" className={`${sans.variable} ${display.variable}`}>
    <body className="bg-allino-cream text-allino-ink antialiased">
      {children}
      <MobileBottomNav/>
    </body>
  </html>;
}
