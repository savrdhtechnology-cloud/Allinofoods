"use client";
import {motion} from "framer-motion";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {FloatingOrb} from "@/components/motion-ui";

export default function PageShell({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children:React.ReactNode}){
 return <main className="min-h-screen bg-[#fffdf8] text-allino-ink"><SiteHeader/>
  <section className="mesh relative overflow-hidden px-5 pb-16 pt-36">
    <FloatingOrb className="absolute left-[5%] top-20 h-40 w-40 rounded-full bg-allino-lime/20 blur-3xl"/>
    <FloatingOrb delay={2} className="absolute right-[8%] top-24 h-52 w-52 rounded-full bg-allino-gold/20 blur-3xl"/>
    <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.55,ease:"easeOut"}} className="relative z-10 mx-auto max-w-7xl">
      <p className="font-bold uppercase tracking-[.2em] text-allino-gold">{eyebrow}</p>
      <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-[-.04em] md:text-7xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
    </motion.div>
  </section>
  {children}
  <SiteFooter/>
 </main>
}