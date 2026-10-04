"use client";
import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {ChefHat,UserPlus} from "lucide-react";

export default function Register(){
 const reduce=useReducedMotion();
 return <main className="grid min-h-screen place-items-center bg-[#F6EBDD] px-5 py-12">
  <motion.div initial={reduce?false:{opacity:0,scale:.985,y:16}} animate={{opacity:1,scale:1,y:0}} className="motion-form-card w-full max-w-2xl rounded-[1.9rem] border border-black/[.06] bg-white p-7 shadow-card sm:p-10">
    <div className="flex items-center justify-between gap-4"><Link href="/" className="flex items-center gap-2 font-extrabold text-allino-green"><ChefHat size={20}/>Allino Foods</Link><Link href="/login" className="text-sm font-extrabold text-stone-500">Login</Link></div>
    <div className="mt-8 grid h-12 w-12 place-items-center rounded-2xl bg-[#F4E8DD] text-allino-coral"><UserPlus size={21}/></div>
    <h1 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Create your Allino account.</h1><p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">Register once to continue into the existing Allino customer experience.</p>
    <form className="mt-8 grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Full name<input className="rounded-xl border border-black/[.10] p-4" placeholder="Full name"/></label><label className="grid gap-2 text-sm font-bold">Mobile<input className="rounded-xl border border-black/[.10] p-4" placeholder="Mobile"/></label><label className="grid gap-2 text-sm font-bold sm:col-span-2">Email<input className="rounded-xl border border-black/[.10] p-4" placeholder="Email"/></label><label className="grid gap-2 text-sm font-bold sm:col-span-2">Create password<input type="password" className="rounded-xl border border-black/[.10] p-4" placeholder="Create password"/></label><button className="rounded-full bg-allino-coral p-4 font-extrabold text-white transition hover:bg-allino-ink sm:col-span-2">Create account</button></form>
    <p className="mt-6 text-center text-sm text-stone-500">Already registered? <Link className="font-extrabold text-allino-green" href="/login">Login</Link></p>
  </motion.div>
 </main>;
}
