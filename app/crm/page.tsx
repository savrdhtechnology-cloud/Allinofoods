"use client";

import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {Activity,BadgeIndianRupee,ChefHat,ChevronRight,LayoutDashboard,Menu,Search,Settings,ShoppingBag,Store,Users} from "lucide-react";
import {Counter} from "@/components/motion-ui";

const nav=[["Dashboard",LayoutDashboard],["Orders",ShoppingBag],["Customers",Users],["Partners",Store],["Menu & Products",ChefHat],["Payments",BadgeIndianRupee],["Reports",Activity],["Settings",Settings]] as const;
const stats=[["Total Orders",1284,"+12.4%"],["Revenue",846200,"+8.1%"],["Customers",3920,"+18.6%"],["Active Partners",186,"+6.8%"]] as const;
const orders=[["ALN-26041","Riya Sharma","Green Bowl Kitchen","₹458","Preparing"],["ALN-26040","Aman Patel","Spice Route","₹729","Confirmed"],["ALN-26039","Neha Jain","Local Tandoor","₹1,120","Delivered"],["ALN-26038","Kabir Khan","Green Bowl Kitchen","₹349","Out for delivery"]] as const;

export default function CRM(){
  const reduce=useReducedMotion();
  return <main className="min-h-screen bg-[#1B1816] text-white lg:grid lg:grid-cols-[260px_1fr]">
    <aside className="hidden min-h-screen border-r border-white/10 bg-[#151311] p-5 lg:block">
      <Link href="/" className="mb-10 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-allino-coral text-white"><ChefHat size={20}/></span>
        <div><b className="tracking-tight">Allino CRM</b><p className="text-xs text-white/35">Food operations</p></div>
      </Link>
      <nav aria-label="CRM navigation" className="space-y-1">
        {nav.map(([name,Icon],i)=><button key={name} className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-bold transition ${i===0?"bg-allino-coral text-white":"text-white/55 hover:bg-white/[.06] hover:text-white"}`}>
          <span className="flex items-center gap-3"><Icon size={17}/>{name}</span><ChevronRight size={14} className="opacity-0 transition group-hover:opacity-100"/>
        </button>)}
      </nav>
    </aside>

    <section className="min-w-0 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1500px]">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button aria-label="Open CRM menu" className="grid h-10 w-10 place-items-center rounded-full bg-white/[.07] lg:hidden"><Menu size={19}/></button>
            <div><p className="text-xs font-bold uppercase tracking-[.16em] text-allino-gold">Allino operations</p><h1 className="mt-1 text-3xl font-semibold tracking-[-.035em]">Operations dashboard</h1></div>
          </div>
          <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/[.05] px-4 py-3 text-sm text-white/45 sm:max-w-sm">
            <Search size={17}/><span className="sr-only">Search CRM</span><input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-white/35" placeholder="Search orders, customers, partners…"/>
          </label>
        </header>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(([label,value,delta],i)=><motion.article key={label} initial={reduce?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.04}} className="rounded-[1.35rem] border border-white/10 bg-white/[.05] p-5">
            <div className="flex items-center justify-between gap-3"><span className="text-sm font-bold text-white/45">{label}</span><span className="rounded-full bg-[#8DBE57]/10 px-2.5 py-1 text-xs font-extrabold text-[#A9D47A]">{delta}</span></div>
            <div className="mt-5 text-3xl font-extrabold tracking-tight">{label==="Revenue"?"₹":""}<Counter value={Number(value)}/></div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[.06]"><motion.div initial={reduce?false:{scaleX:0}} animate={{scaleX:.72}} transition={{duration:.55,delay:.12+i*.04}} style={{transformOrigin:"left"}} className="h-full rounded-full bg-allino-coral"/></div>
          </motion.article>)}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_.55fr]">
          <section className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.04]">
            <div className="flex items-center justify-between border-b border-white/10 p-5"><div><h2 className="font-sans text-lg font-extrabold">Recent orders</h2><p className="mt-1 text-xs text-white/35">Live operational queue</p></div><button className="rounded-full bg-white/[.06] px-3 py-2 text-xs font-extrabold text-allino-gold">View all</button></div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="text-[11px] uppercase tracking-[.14em] text-white/30"><tr>{["Order","Customer","Kitchen","Amount","Status"].map(x=><th key={x} className="px-5 py-4 font-bold">{x}</th>)}</tr></thead>
                <tbody>{orders.map((row,idx)=><motion.tr initial={reduce?false:{opacity:0,x:-6}} animate={{opacity:1,x:0}} transition={{delay:.16+idx*.04}} key={row[0]} className="crm-row border-t border-white/[.06] text-white/70">{row.map((cell,i)=><td key={i} className="px-5 py-4">{i===4?<span className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${cell==="Delivered"?"bg-[#8DBE57]/10 text-[#A9D47A]":cell==="Preparing"?"bg-allino-coral/15 text-[#F08E78] status-live":"bg-allino-gold/10 text-allino-gold"}`}>{cell}</span>:cell}</td>)}</motion.tr>)}</tbody>
              </table>
            </div>
          </section>

          <div className="space-y-5">
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[.04] p-5">
              <h2 className="font-sans text-lg font-extrabold">Order flow</h2><p className="mt-1 text-xs text-white/35">Current operational distribution</p>
              <div className="mt-6 space-y-4">{[["Placed",86],["Preparing",63],["Ready",42],["Out for delivery",71],["Delivered",94]].map(([label,value])=><div key={label}><div className="mb-1.5 flex justify-between text-xs"><span className="font-bold text-white/50">{label}</span><span className="font-extrabold">{value}%</span></div><div className="h-2 rounded-full bg-white/[.06]"><motion.div initial={reduce?false:{scaleX:0}} animate={{scaleX:Number(value)/100}} transition={{duration:.5}} style={{transformOrigin:"left"}} className="h-full rounded-full bg-allino-gold"/></div></div>)}</div>
            </section>
            <section className="rounded-[1.5rem] bg-allino-green p-5">
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-allino-gold">Partner pipeline</p><h3 className="mt-3 font-sans text-2xl font-extrabold">23 kitchens onboarding</h3><p className="mt-2 text-sm leading-6 text-white/55">KYC → Kitchen → Menu → Verification → Approval</p>
              <Link href="/partner" className="mt-5 inline-flex rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-allino-green">View partner journey</Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>;
}
