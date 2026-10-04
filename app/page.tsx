"use client";

import Image from "next/image";
import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {ArrowRight,BadgeCheck,Bike,ChefHat,Clock3,Heart,Leaf,PackageCheck,ShieldCheck,Sparkles,Star,Store,UtensilsCrossed,type LucideIcon} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SearchBar from "@/components/search/search-bar";
import CategoryCard from "@/components/marketplace/category-card";
import FoodCard from "@/components/food/food-card";
import RestaurantCard,{type RestaurantCardData} from "@/components/restaurant/restaurant-card";
import ChefCard,{type ChefCardData} from "@/components/chef/chef-card";
import SectionHeading from "@/components/ui/section-heading";
import {dishes} from "@/lib/dishes";

const categories=[
  {name:"Meals",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80"},
  {name:"Indian",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80"},
  {name:"Healthy",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80"},
  {name:"Breakfast",image:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=80"},
  {name:"Desserts",image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80"},
  {name:"Tiffin",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"}
];

const restaurants:RestaurantCardData[]=[
  {name:"Green Bowl Kitchen",cuisine:"Healthy • Fresh • Bowls",rating:4.8,time:"25–30 min",location:"Bhopal",offer:"20% OFF",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82"},
  {name:"Spice Route",cuisine:"Indian • Homestyle",rating:4.7,time:"30–35 min",location:"Bhopal",offer:"₹100 OFF",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=82"},
  {name:"The Local Tandoor",cuisine:"North Indian • Grill",rating:4.9,time:"25–30 min",location:"Bhopal",image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=82"}
];

const chefs:ChefCardData[]=[
  {name:"Seema's Home Kitchen",specialty:"Homestyle meals & thali",rating:4.9,location:"Bhopal",dishes:8,image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=82"},
  {name:"Annapurna Meals",specialty:"Vegetarian tiffin",rating:4.8,location:"Raisen",dishes:6,image:"https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=900&q=82"},
  {name:"Sweet Home Kitchen",specialty:"Homemade desserts",rating:4.8,location:"Sehore",dishes:5,image:"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=82"}
];

const ownProducts=[
  {name:"Allino Everyday Meal",type:"Allino Foods",price:"₹179",image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=82"},
  {name:"Allino Fresh Bowl",type:"Allino Foods",price:"₹199",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=82"},
  {name:"Allino Comfort Combo",type:"Allino Foods",price:"₹229",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=82"}
];

const fade={hidden:{opacity:0,y:18},show:{opacity:1,y:0}};

const whyAllino:{icon:LucideIcon;title:string;text:string}[]=[
  {icon:ShieldCheck,title:"Verified partners",text:"Clear partner identity and platform-led discovery."},
  {icon:Leaf,title:"Fresh-first choices",text:"Food designed around local kitchens and everyday freshness."},
  {icon:Bike,title:"Simple delivery journey",text:"Easy-to-understand ordering and delivery information."},
  {icon:Store,title:"One marketplace",text:"Allino Foods, restaurants and home chefs together."}
];

const howSteps:{icon:LucideIcon;title:string;text:string}[]=[
  {icon:UtensilsCrossed,title:"1. Discover",text:"Browse dishes, restaurants and home chefs near you."},
  {icon:PackageCheck,title:"2. Choose & order",text:"Pick what you love and continue through Allino's order journey."},
  {icon:Bike,title:"3. Fresh to you",text:"Your selected kitchen prepares the food for delivery."}
];

export default function Home(){
  const reduce=useReducedMotion();
  return <main className="min-h-screen bg-allino-cream text-allino-ink">
    <SiteHeader/>

    <section className="relative overflow-hidden border-b border-black/[.06] bg-[#F7EBDD]">
      <div aria-hidden="true" className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-allino-gold/15 blur-3xl"/>
      <div aria-hidden="true" className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-allino-coral/12 blur-3xl"/>
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <motion.div initial={reduce?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55,ease:[.22,1,.36,1]}} className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[.07] bg-white/70 px-4 py-2 text-xs font-extrabold text-allino-green backdrop-blur">
            <Sparkles size={14}/> Fresh food from local kitchens
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            Discover great food, <span className="text-allino-coral">made closer to home.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            Allino is a food marketplace where customers discover delicious food from Allino Foods, trusted restaurants and talented home chefs.
          </p>
          <div className="mt-8"><SearchBar/></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/dishes" className="inline-flex items-center gap-2 rounded-full bg-allino-ink px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-allino-coral">Browse menu <ArrowRight size={17}/></Link>
            <Link href="/customer" className="inline-flex items-center gap-2 rounded-full border border-black/[.12] bg-white/70 px-6 py-3.5 text-sm font-extrabold text-allino-ink transition hover:bg-white">Order now</Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-stone-600 sm:text-sm">
            <span className="inline-flex items-center gap-2"><BadgeCheck size={17} className="text-allino-green"/>Verified kitchens</span>
            <span className="inline-flex items-center gap-2"><Clock3 size={17} className="text-allino-green"/>Local delivery</span>
            <span className="inline-flex items-center gap-2"><Heart size={17} className="text-allino-coral"/>Support home chefs</span>
          </div>
        </motion.div>

        <motion.div initial={reduce?false:{opacity:0,scale:.97,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.65,delay:.08,ease:[.22,1,.36,1]}} className="relative mx-auto w-full max-w-[620px]">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[2.2rem] shadow-[0_35px_90px_rgba(69,45,28,.18)] sm:aspect-[6/5] lg:aspect-[5/6]">
            <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=88" alt="A table filled with fresh food" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"/>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 backdrop-blur sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.14em] text-allino-coral">Trending near you</p><p className="mt-1 text-lg font-extrabold">Homestyle favourites</p></div><span className="inline-flex items-center gap-1 rounded-full bg-[#EDF5E8] px-2.5 py-1 text-xs font-extrabold text-allino-green"><Star size={12} fill="currentColor"/>4.9</span></div>
            </div>
          </div>
          <motion.div animate={reduce?{}:{y:[0,-8,0]}} transition={{duration:4.5,repeat:Infinity,ease:"easeInOut"}} className="absolute -left-3 top-10 hidden rounded-2xl bg-white p-4 shadow-card sm:block">
            <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#EDF5E8] text-allino-green"><ChefHat size={19}/></span><div><p className="text-xs font-bold text-stone-400">Home chefs</p><p className="font-extrabold">Freshly made</p></div></div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <section className="border-b border-black/[.06] bg-white/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-5 sm:grid-cols-4">
        {[
          ["4.8+","Average rating"],
          ["30 min","Typical delivery"],
          ["3 ways","Allino • Restaurants • Chefs"],
          ["Local first","Built for nearby food"]
        ].map(([big,small])=><div key={small} className="px-4 py-3 text-center"><p className="text-xl font-extrabold text-allino-ink">{big}</p><p className="mt-1 text-[11px] font-bold text-stone-500 sm:text-xs">{small}</p></div>)}
      </div>
    </section>

    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Popular categories" title="What are you craving today?" description="Jump straight into familiar favourites, fresh bowls, tiffin meals and desserts."/>
        <div className="hide-scrollbar mt-9 flex gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
          {categories.map(c=><CategoryCard key={c.name} {...c}/>)}
        </div>
      </div>
    </section>

    <section className="section-pad bg-white/55">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Featured dishes" title="Great food from kitchens customers love." description="Real local choices with clear price, ratings and delivery information." href="/dishes" linkLabel="Explore all dishes"/>
        <motion.div variants={{show:{transition:{staggerChildren:.06}}}} initial="hidden" whileInView="show" viewport={{once:true,amount:.1}} className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {dishes.slice(0,8).map((dish,i)=><motion.div variants={fade} key={dish.slug}><FoodCard dish={dish} priority={i<2}/></motion.div>)}
        </motion.div>
      </div>
    </section>

    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Popular restaurants" title="Trusted kitchens, ready when hunger hits." description="Browse restaurant partners by cuisine, rating, location and delivery time." href="/restaurants"/>
        <div className="mt-9 grid gap-5 md:grid-cols-3">{restaurants.map(item=><RestaurantCard key={item.name} item={item}/>)}</div>
      </div>
    </section>

    <section className="section-pad bg-[#F1E8DA]">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Home chef spotlight" title="Food with a personal touch." description="Discover talented home chefs and neighbourhood kitchens making small-batch meals." href="/home-chefs"/>
        <div className="mt-9 grid gap-5 md:grid-cols-3">{chefs.map(chef=><ChefCard key={chef.name} chef={chef}/>)}</div>
      </div>
    </section>

    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Made by Allino" title="Everyday food from Allino Foods." description="A growing range of fresh, dependable meals from the Allino kitchen."/>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {ownProducts.map(item=><article key={item.name} className="group overflow-hidden rounded-[1.6rem] bg-allino-ink text-white shadow-card">
            <div className="relative aspect-[16/10] overflow-hidden"><Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="food-card-image object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/></div>
            <div className="p-6"><p className="text-xs font-extrabold uppercase tracking-[.15em] text-allino-gold">{item.type}</p><div className="mt-2 flex items-end justify-between gap-4"><h3 className="text-2xl font-semibold">{item.name}</h3><span className="shrink-0 font-extrabold">{item.price}</span></div></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-pad bg-allino-green text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div><p className="eyebrow !text-allino-gold">Why Allino</p><h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Local food discovery, without the guesswork.</h2><p className="mt-5 max-w-xl leading-8 text-white/65">Allino brings customers, restaurants and home chefs into one clear marketplace built around trust and freshness.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyAllino.map(({icon:Icon,title,text})=><div key={title} className="rounded-2xl border border-white/10 bg-white/[.06] p-5"><Icon size={22} className="text-allino-gold"/><h3 className="mt-4 font-sans text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="How it works" title="From craving to doorstep in three simple steps." href="/how-it-works" linkLabel="See the full journey"/>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {howSteps.map(({icon:Icon,title,text},i)=><div key={title} className="relative rounded-[1.6rem] border border-black/[.07] bg-white p-6 shadow-soft"><span className="absolute right-5 top-4 text-5xl font-extrabold text-black/[.04]">0{i+1}</span><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F4E8DD] text-allino-coral"><Icon size={22}/></span><h3 className="mt-6 text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-stone-600">{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section-pad bg-white/55">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Customer stories" title="Good food feels even better when it feels local."/>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {[
            ["The home-style meal felt fresh and genuinely comforting. Finding it on one platform was easy.","Riya • Bhopal"],
            ["I like seeing the kitchen name, rating and delivery time before choosing. The experience feels clear.","Aman • Bhopal"],
            ["Home-chef discovery is the best part for me. It feels more personal than a generic menu.","Neha • Raisen"]
          ].map(([quote,by])=><blockquote key={by} className="rounded-[1.5rem] border border-black/[.06] bg-white p-6 shadow-soft"><div className="flex gap-1 text-allino-gold">{Array.from({length:5}).map((_,i)=><Star key={i} size={15} fill="currentColor"/>)}</div><p className="mt-5 text-base leading-7 text-stone-700">“{quote}”</p><footer className="mt-5 text-sm font-extrabold text-allino-green">{by}</footer></blockquote>)}
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <div className="overflow-hidden rounded-[2rem] bg-[#EACB9D] p-7 sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <div><p className="eyebrow !text-allino-green">Allino on mobile</p><h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Your local food marketplace, always within reach.</h2><p className="mt-5 max-w-xl leading-8 text-stone-700">The responsive Allino experience is designed for quick search, easy food discovery and large touch targets on mobile.</p><Link href="/dishes" className="mt-7 inline-flex items-center gap-2 rounded-full bg-allino-ink px-6 py-3.5 text-sm font-extrabold text-white">Explore on mobile <ArrowRight size={17}/></Link></div>
            <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border-[10px] border-allino-ink bg-white p-3 shadow-[0_30px_70px_rgba(30,26,23,.18)]"><div className="relative aspect-[9/14] overflow-hidden rounded-[1.8rem]"><Image src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85" alt="Fresh meal on Allino" fill sizes="380px" className="object-cover"/><div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-4 backdrop-blur"><p className="text-xs font-extrabold text-allino-coral">Popular today</p><p className="mt-1 font-extrabold">Fresh local meals</p></div></div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-24">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-allino-coral p-8 text-white sm:p-10"><ChefHat size={28}/><h2 className="mt-6 text-4xl font-semibold tracking-[-.04em]">Cook great food? Grow with Allino.</h2><p className="mt-4 max-w-lg leading-7 text-white/75">Restaurants, home chefs and local food makers can build visibility and reach more customers.</p><Link href="/partner" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-allino-coral">Become a partner <ArrowRight size={17}/></Link></div>
        <div className="rounded-[2rem] bg-allino-ink p-8 text-white sm:p-10"><Store size={28} className="text-allino-gold"/><h2 className="mt-6 text-4xl font-semibold tracking-[-.04em]">Hungry? Your next favourite meal is here.</h2><p className="mt-4 max-w-lg leading-7 text-white/65">Explore Allino Foods, restaurants and home kitchens in one marketplace.</p><Link href="/dishes" className="mt-7 inline-flex items-center gap-2 rounded-full bg-allino-gold px-6 py-3.5 text-sm font-extrabold text-allino-ink">Find food <ArrowRight size={17}/></Link></div>
      </div>
    </section>

    <SiteFooter/>
  </main>;
}
