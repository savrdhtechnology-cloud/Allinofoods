"use client";

import Link from "next/link";
import {useState} from "react";
import {motion,AnimatePresence,useReducedMotion} from "framer-motion";
import {ArrowUpRight,ChefHat,Menu,Search,ShoppingBag,Sparkles,X} from "lucide-react";

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
    <div className="relative z-[61] overflow-hidden bg-[#D85F36] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[.18em] sm:text-[11px]">
        <Sparkles size={13}/>
        <span>Fresh local food • Restaurants • Home chefs • Allino originals</span>
        <Link href="/dishes" className="hidden items-center gap-1 underline decoration-white/40 underline-offset-4 sm:inline-flex">Explore <ArrowUpRight size={12}/></Link>
      </div>
    </div>

    <motion.header
      initial={reduce?false:{y:-18,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:.55,ease:[.22,1,.36,1]}}
      className="sticky top-0 z-[60] border-b border-black/[.05] bg-[#F4EAD9]/88 px-4 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-4">
        <Link href="/" aria-label="Allino Foods home" className="group flex shrink-0 items-center gap-3">
          <motion.span whileHover={reduce?{}:{rotate:-7,scale:1.06}} className="grid h-11 w-11 place-items-center rounded-full bg-allino-green text-white shadow-[0_8px_25px_rgba(23,61,47,.2)]">
            <ChefHat size={21}/>
          </motion.span>
          <span className="leading-none">
            <b className="font-display text-[1.55rem] font-semibold tracking-[-.045em]">Allino Foods</b>
            <span className="mt-1.5 hidden text-[8px] font-extrabold uppercase tracking-[.24em] text-stone-500 sm:block">Local food marketplace</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full border border-black/[.06] bg-white/55 p-1.5 shadow-sm lg:flex">
          {links.map(([label,href])=>
            <Link key={href} href={href} className="rounded-full px-3.5 py-2 text-[13px] font-bold text-stone-700 transition hover:bg-white hover:text-allino-coral">{label}</Link>
          )}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link href="/dishes" aria-label="Search food" className="grid h-10 w-10 place-items-center rounded-full border border-black/[.06] bg-white/60 text-stone-700 transition hover:bg-white"><Search size={18}/></Link>
          <Link href="/login" className="hidden rounded-full px-4 py-2.5 text-sm font-bold text-allino-green sm:block">Login</Link>
          <Link href="/customer" className="shine hidden items-center gap-2 rounded-full bg-allino-green px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(23,61,47,.2)] transition hover:-translate-y-0.5 sm:flex"><ShoppingBag size={16}/>Order food</Link>
          <button onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Close menu":"Open menu"} className="grid h-10 w-10 place-items-center rounded-full border border-black/[.06] bg-white/70 lg:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
        </div>
      </div>

      <AnimatePresence>
        {open?<motion.div id="mobile-menu" initial={reduce?false:{opacity:0,y:-10,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-10,scale:.98}} className="mx-auto max-w-7xl pb-4 lg:hidden">
          <div className="rounded-[1.6rem] border border-black/[.06] bg-[#FFFDF8] p-3 shadow-[0_25px_60px_rgba(42,32,24,.13)]">
            <nav className="grid gap-1 sm:grid-cols-2">
              {links.map(([label,href])=><Link key={href} onClick={()=>setOpen(false)} href={href} className="rounded-xl px-4 py-3.5 text-sm font-extrabold text-stone-700 hover:bg-[#F4EAD9]">{label}</Link>)}
              <Link onClick={()=>setOpen(false)} href="/contact" className="rounded-xl px-4 py-3.5 text-sm font-extrabold text-stone-700 hover:bg-[#F4EAD9]">Contact</Link>
            </nav>
          </div>
        </motion.div>:null}
      </AnimatePresence>
    </motion.header>
  </>;
}
