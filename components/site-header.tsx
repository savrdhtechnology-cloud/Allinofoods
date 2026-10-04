"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {ChefHat,ShoppingBag} from "lucide-react";

export default function SiteHeader(){
  return <motion.header initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
    <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 shadow-card">
      <Link href="/" className="flex items-center gap-3 font-black tracking-tight text-allino-green"><span className="grid h-10 w-10 place-items-center rounded-xl bg-allino-green text-white shadow-lg"><ChefHat size={21}/></span><span>ALLINO <b className="text-allino-gold">FOODS</b></span></Link>
      <nav className="hidden items-center gap-7 text-sm font-semibold md:flex"><a href="#explore">Explore</a><a href="#kitchens">Kitchens</a><a href="#how">How it works</a><a href="#partner">Sell with Allino</a></nav>
      <div className="flex items-center gap-2"><Link href="/crm" className="rounded-xl px-4 py-2 text-sm font-semibold text-allino-green hover:bg-green-50">CRM</Link><button className="flex items-center gap-2 rounded-xl bg-allino-green px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"><ShoppingBag size={16}/> Order</button></div>
    </div>
  </motion.header>
}
