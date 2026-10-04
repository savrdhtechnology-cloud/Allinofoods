"use client";

import Link from "next/link";
import {useState} from "react";
import {motion,AnimatePresence,useReducedMotion} from "framer-motion";
import {ChefHat,Menu,Search,ShoppingBag,X} from "lucide-react";

const links=[
  ["Explore","/dishes"],
  ["Restaurants","/restaurants"],
  ["Home Chefs","/home-chefs"],
  ["How It Works","/how-it-works"],
  ["Partner","/partner"],
  ["About","/about"]
] as const;

export default function SiteHeader(){
  const [open,setOpen]=useState(false);
  const reduce=useReducedMotion();
  return <>
    <div className="relative z-[61] bg-allino-green px-4 py-2 text-center text-[11px] font-bold tracking-wide text-white sm:text-xs">
      Fresh local food from Allino, restaurants & home chefs. <Link href="/dishes" className="ml-1 underline decoration-white/40 underline-offset-4">Explore now</Link>
    </div>
    <motion.header initial={reduce?false:{y:-12,opacity:0}} animate={{y:0,opacity:1}} className="sticky top-0 z-[60] border-b border-black/[.06] bg-[#FFF8ED]/92 px-4 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4">
        <Link href="/" aria-label="Allino Foods home" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-allino-coral text-white"><ChefHat size={20}/></span>
          <span className="leading-none"><b className="block text-lg tracking-[-.03em]">Allino Foods</b><span className="mt-1 hidden text-[9px] font-extrabold uppercase tracking-[.16em] text-stone-500 sm:block">Local food marketplace</span></span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {links.map(([label,href])=><Link key={href} href={href} className="text-sm font-bold text-stone-700 transition hover:text-allino-coral">{label}</Link>)}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link href="/dishes" aria-label="Search food" className="grid h-10 w-10 place-items-center rounded-full text-stone-700 transition hover:bg-white"><Search size={19}/></Link>
          <Link href="/login" className="hidden rounded-full px-4 py-2.5 text-sm font-extrabold text-allino-green sm:block">Login</Link>
          <Link href="/customer" className="hidden items-center gap-2 rounded-full bg-allino-ink px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-allino-coral sm:flex"><ShoppingBag size={16}/>Order food</Link>
          <button onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Close menu":"Open menu"} className="grid h-10 w-10 place-items-center rounded-full bg-white lg:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
        </div>
      </div>
      <AnimatePresence>
        {open?<motion.div id="mobile-menu" initial={reduce?false:{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mx-auto max-w-7xl border-t border-black/[.06] py-3 lg:hidden">
          <nav className="grid gap-1">
            {links.map(([label,href])=><Link key={href} onClick={()=>setOpen(false)} href={href} className="rounded-xl px-3 py-3 text-sm font-extrabold text-stone-700 hover:bg-white">{label}</Link>)}
            <Link onClick={()=>setOpen(false)} href="/contact" className="rounded-xl px-3 py-3 text-sm font-extrabold text-stone-700 hover:bg-white">Contact</Link>
          </nav>
        </motion.div>:null}
      </AnimatePresence>
    </motion.header>
  </>;
}
