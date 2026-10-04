"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowRight,ChefHat,Clock3,MapPin,Search,Star,UtensilsCrossed} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import OrderJourneyTimeline from "@/components/order-journey-timeline";
import HomeAnimatedBackground from "@/components/background/HomeAnimatedBackground";
import HeroFoodSlider from "@/components/home/HeroFoodSlider";
import {AnimatedCard,FloatingOrb,Reveal,Stagger} from "@/components/motion-ui";

const categories=["North Indian","South Indian","Healthy Bowls","Street Food","Desserts","Beverages"];
const kitchens=[
  {name:"Green Bowl Kitchen",type:"Healthy • Fresh",time:"25-30 min",rating:"4.8"},
  {name:"Spice Route",type:"Indian • Homestyle",time:"30-35 min",rating:"4.7"},
  {name:"The Local Tandoor",type:"North Indian",time:"20-30 min",rating:"4.9"}
];

const featuredDishes=[
  {dish:"Homestyle Thali",maker:"Seema's Home Kitchen",kind:"Home Chef",emoji:"🍱",price:"₹189",rating:"4.9",time:"30 min"},
  {dish:"Farm Fresh Power Bowl",maker:"Green Bowl Kitchen",kind:"Restaurant",emoji:"🥗",price:"₹199",rating:"4.8",time:"25 min"},
  {dish:"Paneer Masala Meal",maker:"Spice Route",kind:"Restaurant",emoji:"🍛",price:"₹229",rating:"4.7",time:"30 min"},
  {dish:"Ghar Ka Tiffin",maker:"Annapurna Meals",kind:"Home Kitchen",emoji:"🥘",price:"₹159",rating:"4.8",time:"35 min"},
];

export default function Home(){
 return <main className="relative min-h-screen overflow-hidden allino-surface-light"><HomeAnimatedBackground/><div className="relative z-10"><SiteHeader/>
  <section className="relative pb-8 pt-20 md:pt-24">
    <div className="relative left-1/2 z-10 w-screen -translate-x-1/2">
      <HeroFoodSlider/>
    </div>
    <div className="relative z-10 mx-auto max-w-7xl px-5">

      <motion.div
        initial={{opacity:0,y:14}}
        animate={{opacity:1,y:0}}
        transition={{type:"spring",stiffness:110,damping:20,delay:.18}}
        className="mx-auto mt-5 grid max-w-5xl gap-3 bg-white/95 p-3 shadow-card backdrop-blur md:grid-cols-[.35fr_1fr_auto]"
      >
        <div className="flex items-center gap-3 rounded-xl bg-[#f6f8f5] px-4">
          <MapPin size={19} className="text-allino-green"/>
          <span className="py-4 font-black text-allino-green">Bhopal</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-[#f6f8f5] px-4">
          <Search size={19} className="text-allino-green"/>
          <input aria-label="food search" placeholder="Search dishes, restaurants or home chefs..." className="w-full bg-transparent py-4 outline-none"/>
        </div>
        <motion.button whileHover={{y:-2}} whileTap={{scale:.98}} className="flex items-center justify-center gap-2 rounded-xl bg-allino-green px-7 py-4 font-black text-white">
          <Search size={18}/> Find Food
        </motion.button>
      </motion.div>

      <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["Verified Kitchens","Trusted home chefs & restaurants"],
          ["Fresh Ingredients","Hygienic & quality food"],
          ["Fast Local Delivery","Hot & fresh at your doorstep"],
          ["Support Local","Help local chefs grow"]
        ].map(([title,desc],i)=><div key={title} className="rounded-2xl border border-allino-green/5 bg-white/70 p-4 text-center">
          <p className="font-black text-allino-green">{title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
        </div>)}
      </div>
    </div>
  </section>

  <section className="relative z-10 overflow-hidden border-y border-allino-green/10 bg-white/55 py-3 backdrop-blur-md">
    <div className="allino-marquee">
      <div className="allino-marquee-track">
        {["Fresh Local Food","Verified Kitchens","Home Chefs","Fast Delivery","Fresh Ingredients","Local Community","Fresh Local Food","Verified Kitchens","Home Chefs","Fast Delivery","Fresh Ingredients","Local Community"].map((item,i)=><div key={i} className="flex shrink-0 items-center gap-3 px-7 text-xs font-black uppercase tracking-[.18em] text-allino-green"><span className="h-1.5 w-1.5 rounded-full bg-allino-gold"/>{item}</div>)}
      </div>
    </div>
  </section>

  <section id="explore" className="living-section section-fade-cream px-5 py-20"><div className="relative z-10 mx-auto max-w-7xl"><Reveal><p className="font-bold uppercase tracking-[.2em] text-allino-gold">Explore</p><h2 className="mt-2 text-4xl font-black tracking-tight text-allino-ink">What are you craving?</h2></Reveal><Stagger className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">{categories.map((c,i)=><AnimatedCard key={c} className="group cursor-pointer rounded-3xl border border-green-950/5 bg-white p-5 shadow-card"><div className="mb-8 text-4xl">{["🍛","🥘","🥗","🥙","🍰","🥤"][i]}</div><h3 className="font-extrabold text-allino-ink">{c}</h3><p className="mt-1 text-xs text-slate-500">Explore nearby</p></AnimatedCard>)}</Stagger></div></section>

  <section id="featured-dishes" className="px-5 py-20">
    <div className="relative z-10 mx-auto max-w-7xl">
      <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Local Partner Dishes</p>
          <h2 className="mt-2 max-w-3xl text-4xl font-black tracking-tight text-allino-ink md:text-5xl">Made by local kitchens. Pick what you love.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Discover signature dishes from restaurants, home kitchens and local chefs. See who made it, choose your favourite and continue directly to order.</p>
        </div>
        <Link href="/dishes" className="flex items-center gap-2 font-black text-allino-green">View all dishes <ArrowRight size={18}/></Link>
      </Reveal>

      <Stagger className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredDishes.map((item,i)=><AnimatedCard key={item.dish} className="motion-food-card overflow-hidden rounded-[2rem] border border-allino-green/10 bg-white shadow-card">
          <div className={"relative grid h-52 place-items-center text-8xl "+(i%2===0?"bg-gradient-to-br from-[#eef8e8] to-[#fff5dc]":"bg-gradient-to-br from-[#fff8e8] to-[#eef8e8]")}>
            <span className="motion-food-emoji">{item.emoji}</span>
            <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-allino-green backdrop-blur">{item.kind}</span>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-allino-ink">{item.dish}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">by {item.maker}</p>
              </div>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-black text-allino-green"><Star size={13} fill="currentColor"/>{item.rating}</span>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <div>
                <p className="text-lg font-black text-allino-ink">{item.price}</p>
                <p className="text-xs text-slate-500">{item.time} approx.</p>
              </div>
              <Link href={"/menu?dish="+encodeURIComponent(item.dish)+"&maker="+encodeURIComponent(item.maker)} className="rounded-xl bg-allino-green px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                Order Now
              </Link>
            </div>
          </div>
        </AnimatedCard>)}
      </Stagger>

      <div className="mt-8 rounded-[1.75rem] border border-allino-gold/20 bg-[#fff9ea] p-5 text-center text-sm leading-6 text-slate-600">
        Are you a home chef or local food maker? <Link href="/partner" className="font-black text-allino-green">Become an Allino Partner</Link> and bring your best dishes to more customers.
      </div>
    </div>
  </section>

  <section id="kitchens" className="living-section section-fade-green px-5 py-20"><div className="relative z-10 mx-auto max-w-7xl"><Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-bold uppercase tracking-[.2em] text-allino-gold">Popular kitchens</p><h2 className="mt-2 text-4xl font-black text-allino-ink">Made nearby. Loved locally.</h2></div><button className="flex items-center gap-2 font-bold text-allino-green">View all <ArrowRight size={18}/></button></Reveal><Stagger className="mt-9 grid gap-6 md:grid-cols-3">{kitchens.map((k,i)=><AnimatedCard key={k.name} className="overflow-hidden rounded-[2rem] bg-white shadow-card"><div className="grid h-52 place-items-center bg-gradient-to-br from-[#edf4e2] to-[#faeed5] text-8xl">{["🍲","🍱","🍗"][i]}</div><div className="p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-black">{k.name}</h3><p className="mt-1 text-sm text-slate-500">{k.type}</p></div><span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-allino-green"><Star size={13} fill="currentColor"/>{k.rating}</span></div><div className="mt-5 flex justify-between text-sm font-semibold text-slate-600"><span>{k.time}</span><span className="text-allino-lime">OPEN</span></div></div></AnimatedCard>)}</Stagger></div></section>

  <section id="how" className="living-section section-fade-gold px-5 py-24"><div className="relative z-10 mx-auto max-w-7xl"><Reveal className="text-center"><p className="font-bold uppercase tracking-[.2em] text-allino-gold">Simple by design</p><h2 className="mt-2 text-4xl font-black">From nearby kitchen to your table.</h2></Reveal><Stagger className="mt-12 grid gap-5 md:grid-cols-4">{["Enter Location","Choose Food","Place Order","Enjoy Food"].map((x,i)=><AnimatedCard key={x} className="relative rounded-3xl border border-allino-green/10 bg-white p-7 shadow-card"><span className="text-xs font-black text-allino-gold">0{i+1}</span><h3 className="mt-10 text-xl font-black">{x}</h3><p className="mt-2 text-sm leading-6 text-slate-500">A smooth, focused step with clear status and minimal friction.</p></AnimatedCard>)}</Stagger></div></section>

  <OrderJourneyTimeline/>

  <section id="partner" className="px-5 pb-24"><Reveal className="living-section dark-aura dark-living-bg mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-8 text-white shadow-[0_35px_100px_rgba(11,61,46,.25)] md:p-14"><div className="grid items-center gap-10 lg:grid-cols-2"><div><div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-allino-gold">Partner with Allino</div><h2 className="text-4xl font-black md:text-5xl">Sell Your Food With Allino.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Restaurants and home chefs get one platform for orders, menu, earnings, payouts and customer growth.</p><button className="mt-8 rounded-xl bg-allino-gold px-6 py-4 font-black text-allino-ink">Register your kitchen</button></div><div className="relative grid min-h-72 place-items-center"><FloatingOrb className="absolute h-56 w-56 rounded-full bg-allino-lime/20 blur-3xl"/><div className="relative z-10 text-[9rem] drop-shadow-2xl">👨‍🍳</div></div></div></Reveal></section>

  <SiteFooter/>
  </div>
 </main>
}
