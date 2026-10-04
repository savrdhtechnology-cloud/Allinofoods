"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {ChefHat,ShoppingBag} from "lucide-react";

export default function SiteHeader(){
  return <motion.header initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
    <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 shadow-card">
      <Link href="/" className="flex items-center gap-3 font-black tracking-tight text-allino-green">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-allino-green text-white shadow-lg"><ChefHat size={21}/></span>
        <span className="hidden sm:inline">ALLINO FOODS <b className="text-allino-gold">& RESTAURANTS</b></span>
        <span className="sm:hidden">ALLINO</span>
      </Link>
      <nav className="hidden items-center gap-5 text-sm font-semibold xl:flex">
        <Link href="/menu">Explore Food</Link>
        <Link href="/restaurants">Restaurants</Link>
        <Link href="/home-chefs">Home Chefs</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/partner">Sell With Allino</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/login" className="rounded-xl px-3 py-2 text-sm font-semibold text-allino-green hover:bg-green-50">Login</Link>
        <Link href="/customer" className="hidden rounded-xl bg-allino-green px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 sm:flex items-center gap-2"><ShoppingBag size={16}/> Order</Link>
      </div>
    </div>
  </motion.header>
}