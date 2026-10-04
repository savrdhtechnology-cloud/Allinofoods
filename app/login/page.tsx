"use client";
import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {ChefHat,LockKeyhole} from "lucide-react";

export default function Login(){
 const reduce=useReducedMotion();
 return <main className="grid min-h-screen bg-[#F6EBDD] lg:grid-cols-[.9fr_1.1fr]">
  <section className="hidden bg-allino-green p-10 text-white lg:flex lg:flex-col lg:justify-between">
    <Link href="/" className="flex items-center gap-3 font-extrabold"><span className="grid h-11 w-11 place-items-center rounded-full bg-allino-coral"><ChefHat size={21}/></span>Allino Foods</Link>
    <div><p className="eyebrow !text-allino-gold">Welcome back</p><h1 className="mt-4 max-w-lg text-5xl font-semibold tracking-[-.045em]">Your food marketplace, all in one place.</h1><p className="mt-5 max-w-md leading-8 text-white/60">Customer, partner and operations access through the existing Allino account flow.</p></div>
    <p className="text-xs text-white/35">Discover great food. From Allino, restaurants & home chefs.</p>
  </section>
  <section className="grid place-items-center px-5 py-12">
    <motion.div initial={reduce?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} className="motion-form-card w-full max-w-md rounded-[1.8rem] border border-black/[.06] bg-white p-7 shadow-card sm:p-9">
      <Link href="/" className="flex items-center gap-2 font-extrabold text-allino-green lg:hidden"><ChefHat size={19}/>Allino Foods</Link>
      <div className="mt-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#F4E8DD] text-allino-coral"><LockKeyhole size={21}/></div>
      <h1 className="mt-5 text-4xl font-semibold tracking-[-.04em]">Welcome back.</h1><p className="mt-2 text-sm leading-6 text-stone-500">Customer, partner and operations access.</p>
      <form className="mt-7 grid gap-4"><label className="grid gap-2 text-sm font-bold">Email or mobile<input className="rounded-xl border border-black/[.10] p-4" placeholder="Email or mobile"/></label><label className="grid gap-2 text-sm font-bold">Password<input type="password" className="rounded-xl border border-black/[.10] p-4" placeholder="Password"/></label><button className="mt-1 rounded-full bg-allino-coral p-4 font-extrabold text-white transition hover:bg-allino-ink">Login</button></form>
      <p className="mt-6 text-center text-sm text-stone-500">New to Allino? <Link className="font-extrabold text-allino-green" href="/register">Create account</Link></p>
    </motion.div>
  </section>
 </main>;
}
