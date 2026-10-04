"use client";
import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {ArrowRight,ChefHat,Heart,ShoppingBag,type LucideIcon} from "lucide-react";

const stages=["Placed","Confirmed","Preparing","Ready","Out for Delivery","Delivered"];
const metrics:{icon:LucideIcon;label:string;value:string}[]=[
 {icon:ShoppingBag,label:"Active Orders",value:"1"},
 {icon:ChefHat,label:"Past Orders",value:"14"},
 {icon:Heart,label:"Saved Kitchens",value:"6"}
];

export default function Customer(){
 const reduce=useReducedMotion();
 return <main className="min-h-screen bg-[#F7EFE4] px-5 py-5 sm:py-8">
  <div className="mx-auto max-w-6xl">
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-allino-ink p-5 text-white sm:p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-allino-coral"><ChefHat size={20}/></span><div><b>Allino Customer</b><p className="text-xs text-white/45">My food dashboard</p></div></div><div className="flex gap-2"><Link href="/dishes" className="rounded-full bg-white/10 px-4 py-2.5 text-xs font-extrabold">Explore food</Link><Link href="/" className="rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-allino-ink">Home</Link></div></header>
    <div className="mt-6 grid gap-4 sm:grid-cols-3">{metrics.map(({icon:Icon,label,value})=><motion.div initial={reduce?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} key={label} className="portal-metric rounded-[1.4rem] border border-black/[.06] bg-white p-6 shadow-soft"><Icon size={20} className="text-allino-coral"/><p className="mt-5 text-sm font-bold text-stone-500">{label}</p><p className="mt-2 text-4xl font-extrabold">{value}</p></motion.div>)}</div>
    <motion.section initial={reduce?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} className="mt-6 rounded-[1.6rem] border border-black/[.06] bg-white p-6 shadow-soft sm:p-8"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Current order</p><h2 className="mt-2 text-3xl font-semibold">Fresh meal in progress</h2></div><Link href="/dishes" className="inline-flex items-center gap-2 text-sm font-extrabold text-allino-green">Order more <ArrowRight size={16}/></Link></div><div className="hide-scrollbar mt-7 flex gap-2 overflow-x-auto pb-1">{stages.map((x,i)=><span key={x} className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-extrabold ${i<3?"bg-allino-green text-white "+(i===2?"status-live":""):"bg-stone-100 text-stone-400"}`}>{x}</span>)}</div></motion.section>
  </div>
 </main>;
}
