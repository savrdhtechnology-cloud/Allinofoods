"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Home,Search,Heart,UserRound} from "lucide-react";

const items=[
  {href:"/",label:"Home",icon:Home},
  {href:"/dishes",label:"Explore",icon:Search},
  {href:"/home-chefs",label:"Chefs",icon:Heart},
  {href:"/customer",label:"Account",icon:UserRound}
];

export default function MobileBottomNav(){
  const pathname=usePathname();
  if(pathname.startsWith("/crm")||pathname.startsWith("/login")||pathname.startsWith("/register")) return null;
  return <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-[70] border-t border-black/[.07] bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
    <div className="mx-auto grid max-w-md grid-cols-4">
      {items.map(({href,label,icon:Icon})=>{
        const active=href==="/"?pathname===href:pathname.startsWith(href);
        return <Link key={href} href={href} aria-current={active?"page":undefined} className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] font-extrabold ${active?"text-allino-coral":"text-stone-500"}`}>
          <Icon size={19} strokeWidth={active?2.5:2}/>
          <span>{label}</span>
        </Link>;
      })}
    </div>
  </nav>;
}
