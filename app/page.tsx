"use client";
import {motion} from "framer-motion";
import {ArrowRight,ChefHat,Clock3,MapPin,Search,ShieldCheck,Sparkles,Star,UtensilsCrossed} from "lucide-react";
import SiteHeader from "@/components/site-header";
import {AnimatedCard,FloatingOrb,Reveal,Stagger,fadeUp} from "@/components/motion-ui";

const categories=["North Indian","South Indian","Healthy Bowls","Street Food","Desserts","Beverages"];
const kitchens=[
  {name:"Green Bowl Kitchen",type:"Healthy • Fresh",time:"25-30 min",rating:"4.8"},
  {name:"Spice Route",type:"Indian • Homestyle",time:"30-35 min",rating:"4.7"},
  {name:"The Local Tandoor",type:"North Indian",time:"20-30 min",rating:"4.9"}
];

export default function Home(){
 return <main className="min-h-screen bg-[#fffdf8]"><SiteHeader/>
  <section className="mesh relative overflow-hidden px-5 pb-20 pt-36 md:pt-44">
    <FloatingOrb className="absolute left-[8%] top-28 h-40 w-40 rounded-full bg-allino-lime/20 blur-3xl"/>
    <FloatingOrb delay={2} className="absolute right-[5%] top-36 h-56 w-56 rounded-full bg-allino-gold/20 blur-3xl"/>
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
      <motion.div initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.1}}}} className="relative z-10">
        <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-allino-gold/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-allino-green"><Sparkles size={15} className="text-allino-gold"/> Fresh food, closer to you</motion.div>
        <motion.h1 variants={fadeUp} className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.04em] text-allino-ink md:text-7xl">Fresh Food.<br/><span className="text-gradient">Local Kitchens.</span><br/>One Platform.</motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Discover trusted restaurants, talented home chefs and fresh local meals with a warmer, smarter food experience.</motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-card sm:flex-row"><div className="flex flex-1 items-center gap-3 rounded-xl bg-[#f6f8f5] px-4"><MapPin size={19} className="text-allino-lime"/><input aria-label="location" placeholder="Enter your location" className="w-full bg-transparent py-4 outline-none"/></div><button className="flex items-center justify-center gap-2 rounded-xl bg-allino-green px-6 py-4 font-bold text-white"><Search size={18}/> Find Food</button></motion.div>
        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-slate-600"><span className="flex gap-2"><ShieldCheck size={18} className="text-allino-lime"/>Verified kitchens</span><span className="flex gap-2"><Clock3 size={18} className="text-allino-gold"/>Fast local delivery</span></motion.div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.92,rotateY:-8}} animate={{opacity:1,scale:1,rotateY:0}} transition={{duration:.8,ease:"easeOut"}} className="relative mx-auto w-full max-w-[570px] [perspective:1200px]">
        <motion.div whileHover={{rotateX:2,rotateY:-3,scale:1.01}} className="relative min-h-[500px] overflow-hidden rounded-[2.5rem] border border-white/60 bg-allino-green p-7 shadow-[0_40px_100px_rgba(11,61,46,.3)]" style={{transformStyle:"preserve-3d"}}>
          <div className="absolute inset-0 mesh opacity-60"/><div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-allino-gold/30 blur-2xl"/>
          <div className="relative z-10 flex h-full min-h-[446px] flex-col justify-between">
            <div className="flex justify-between text-white"><div><p className="text-sm text-white/65">Today&apos;s highlight</p><h2 className="mt-1 text-3xl font-black">Farm Fresh<br/>Power Bowl</h2></div><span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 backdrop-blur"><UtensilsCrossed/></span></div>
            <div className="relative mx-auto my-3 grid h-64 w-64 place-items-center rounded-full bg-[#f7ead0] shadow-[0_30px_80px_rgba(0,0,0,.25)] before:absolute before:inset-6 before:rounded-full before:border before:border-allino-gold/30"><div className="text-center"><span className="text-8xl">🥗</span><p className="mt-2 font-black text-allino-green">Fresh • Local • Daily</p></div></div>
            <div className="grid grid-cols-3 gap-3">{["4.9 Rating","25 Min","₹199"].map(x=><div key={x} className="rounded-2xl bg-white/10 p-3 text-center text-sm font-bold text-white backdrop-blur">{x}</div>)}</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>

  <section id="explore" className="px-5 py-20"><div className="mx-auto max-w-7xl"><Reveal><p className="font-bold uppercase tracking-[.2em] text-allino-gold">Explore</p><h2 className="mt-2 text-4xl font-black tracking-tight text-allino-ink">What are you craving?</h2></Reveal><Stagger className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">{categories.map((c,i)=><AnimatedCard key={c} className="group cursor-pointer rounded-3xl border border-green-950/5 bg-white p-5 shadow-card"><div className="mb-8 text-4xl">{["🍛","🥘","🥗","🥙","🍰","🥤"][i]}</div><h3 className="font-extrabold text-allino-ink">{c}</h3><p className="mt-1 text-xs text-slate-500">Explore nearby</p></AnimatedCard>)}</Stagger></div></section>

  <section id="kitchens" className="bg-[#f4f7f2] px-5 py-20"><div className="mx-auto max-w-7xl"><Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-bold uppercase tracking-[.2em] text-allino-gold">Popular kitchens</p><h2 className="mt-2 text-4xl font-black text-allino-ink">Made nearby. Loved locally.</h2></div><button className="flex items-center gap-2 font-bold text-allino-green">View all <ArrowRight size={18}/></button></Reveal><Stagger className="mt-9 grid gap-6 md:grid-cols-3">{kitchens.map((k,i)=><AnimatedCard key={k.name} className="overflow-hidden rounded-[2rem] bg-white shadow-card"><div className="grid h-52 place-items-center bg-gradient-to-br from-[#edf4e2] to-[#faeed5] text-8xl">{["🍲","🍱","🍗"][i]}</div><div className="p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-black">{k.name}</h3><p className="mt-1 text-sm text-slate-500">{k.type}</p></div><span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-allino-green"><Star size={13} fill="currentColor"/>{k.rating}</span></div><div className="mt-5 flex justify-between text-sm font-semibold text-slate-600"><span>{k.time}</span><span className="text-allino-lime">OPEN</span></div></div></AnimatedCard>)}</Stagger></div></section>

  <section id="how" className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal className="text-center"><p className="font-bold uppercase tracking-[.2em] text-allino-gold">Simple by design</p><h2 className="mt-2 text-4xl font-black">From nearby kitchen to your table.</h2></Reveal><Stagger className="mt-12 grid gap-5 md:grid-cols-4">{["Enter Location","Choose Food","Place Order","Enjoy Food"].map((x,i)=><AnimatedCard key={x} className="relative rounded-3xl border border-allino-green/10 bg-white p-7 shadow-card"><span className="text-xs font-black text-allino-gold">0{i+1}</span><h3 className="mt-10 text-xl font-black">{x}</h3><p className="mt-2 text-sm leading-6 text-slate-500">A smooth, focused step with clear status and minimal friction.</p></AnimatedCard>)}</Stagger></div></section>

  <section id="partner" className="px-5 pb-24"><Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-allino-green p-8 text-white shadow-[0_35px_100px_rgba(11,61,46,.25)] md:p-14"><div className="grid items-center gap-10 lg:grid-cols-2"><div><div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-allino-gold">Partner with Allino</div><h2 className="text-4xl font-black md:text-5xl">Sell Your Food With Allino.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Restaurants and home chefs get one platform for orders, menu, earnings, payouts and customer growth.</p><button className="mt-8 rounded-xl bg-allino-gold px-6 py-4 font-black text-allino-ink">Register your kitchen</button></div><div className="relative grid min-h-72 place-items-center"><FloatingOrb className="absolute h-56 w-56 rounded-full bg-allino-lime/20 blur-3xl"/><div className="relative z-10 text-[9rem] drop-shadow-2xl">👨‍🍳</div></div></div></Reveal></section>

  <footer className="border-t border-slate-100 px-5 py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row"><b className="text-allino-green">ALLINO FOODS & RESTAURANTS</b><span>Fresh Food. Local Kitchens. One Platform.</span></div></footer>
 </main>
}
