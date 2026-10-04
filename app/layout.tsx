import type {Metadata,Viewport} from "next";
import {DM_Sans,Cormorant_Garamond} from "next/font/google";
import "./globals.css";
import MobileBottomNav from "@/components/navigation/mobile-bottom-nav";

const sans=DM_Sans({subsets:["latin"],variable:"--font-sans",display:"swap"});
const display=Cormorant_Garamond({subsets:["latin"],variable:"--font-display",display:"swap",weight:["500","600","700"]});

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

export const viewport:Viewport={themeColor:"#F4EAD9",colorScheme:"light"};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" className={`${sans.variable} ${display.variable}`}>
    <body className="bg-allino-cream text-allino-ink antialiased">
      {children}
      <MobileBottomNav/>
    </body>
  </html>;
}
