"use client";
import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {BadgeIndianRupee,ChefHat,ClipboardCheck,Star,UtensilsCrossed} from "lucide-react";

export default function PartnerDashboard(){
 const reduce=useReducedMotion();
 const stats=[[ClipboardCheck,"Today's Orders","18"],[BadgeIndianRupee,"Earnings","₹12,480"],[UtensilsCrossed,"Menu Items","46"],[Star,"Rating","4.8"]] as const;
 return <main className="min-h-screen bg-[#201B17] p-5 text-white sm:p-8"><div className="mx-auto max-w-7xl">
  <header className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/[.05] p-5"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-allino-coral"><ChefHat size={20}/></span><div><b>Allino Partner Portal</b><p className="text-xs text-white/40">Restaurant / Home Chef</p></div></div><Link href="/" className="rounded-full bg-allino-gold px-4 py-2.5 text-xs font-extrabold text-allino-ink">Website</Link></header>
  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([Icon,label,value])=><motion.div initial={reduce?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} key={label} className="portal-metric rounded-[1.4rem] border border-white/10 bg-white/[.05] p-6"><Icon size={20} className="text-allino-gold"/><p className="mt-5 text-sm font-bold text-white/45">{label}</p><p className="mt-2 text-3xl font-extrabold">{value}</p></motion.div>)}</div>
  <motion.section initial={reduce?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/[.05] p-6 sm:p-8"><p className="eyebrow !text-allino-gold">Operations</p><h2 className="mt-2 text-3xl font-semibold">Onboarding & operations</h2><div className="hide-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">{["Registration","KYC","Kitchen","Menu","Verification","Approval","Active"].map((x,i)=><span key={x} className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-extrabold ${i<4?"bg-allino-coral text-white":"bg-white/[.07] text-white/55"}`}>{x}</span>)}</div></motion.section>
 </div></main>;
}
