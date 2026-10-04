"use client";

import Image from "next/image";
import Link from "next/link";
import {motion,useReducedMotion,useScroll,useTransform} from "framer-motion";
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

const whyAllino:{icon:LucideIcon;title:string;text:string}[]=[
  {icon:ShieldCheck,title:"Verified partners",text:"Clear partner identity and platform-led discovery."},
  {icon:Leaf,title:"Fresh-first choices",text:"Food designed around local kitchens and everyday freshness."},
  {icon:Bike,title:"Simple delivery journey",text:"Easy-to-understand ordering and delivery information."},
  {icon:Store,title:"One marketplace",text:"Allino Foods, restaurants and home chefs together."}
];

const howSteps:{icon:LucideIcon;title:string;text:string}[]=[
  {icon:UtensilsCrossed,title:"Discover",text:"Browse dishes, restaurants and home chefs near you."},
  {icon:PackageCheck,title:"Choose & order",text:"Pick what you love and continue through Allino's order journey."},
  {icon:Bike,title:"Fresh to you",text:"Your selected kitchen prepares the food for delivery."}
];

const reveal={hidden:{opacity:0,y:34},show:{opacity:1,y:0}};

export default function Home(){
  const reduce=useReducedMotion();
  const {scrollY}=useScroll();
  const heroY=useTransform(scrollY,[0,800],[0,90]);
  const heroScale=useTransform(scrollY,[0,800],[1,1.04]);

  return <main className="min-h-screen bg-allino-cream text-allino-ink">
    <SiteHeader/>

    <section className="premium-noise hero-grid relative isolate overflow-hidden bg-[#142A21] text-white">
      <motion.div style={reduce?undefined:{y:heroY,scale:heroScale}} aria-hidden="true" className="absolute inset-0 opacity-35">
        <div className="absolute -left-20 top-12 h-80 w-80 rounded-full bg-[#D85F36]/30 blur-[110px]"/>
        <div className="absolute right-[4%] top-[5%] h-96 w-96 rounded-full bg-[#D8A33C]/15 blur-[130px]"/>
        <div className="absolute bottom-0 left-[42%] h-72 w-72 rounded-full bg-[#5E8B68]/20 blur-[120px]"/>
      </motion.div>

      <div aria-hidden="true" className="hero-ring absolute -right-32 -top-28 hidden h-[620px] w-[620px] rounded-full lg:block"/>
      <div aria-hidden="true" className="hero-ring reverse absolute -right-10 top-16 hidden h-[420px] w-[420px] rounded-full lg:block"/>

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[.93fr_1.07fr] lg:py-24 xl:min-h-[820px]">
        <motion.div initial={reduce?false:{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.22,1,.36,1]}} className="relative z-10">
          <motion.div initial={reduce?false:{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:.1,duration:.6}} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#F1C977] backdrop-blur">
            <Sparkles size={14}/> Bhopal’s premium local food marketplace
          </motion.div>

          <h1 className="mt-7 max-w-[760px] text-balance font-display text-[3.9rem] font-semibold leading-[.86] tracking-[-.065em] sm:text-[5.1rem] lg:text-[5.6rem] xl:text-[6.6rem]">
            Food worth <span className="italic text-[#F0C56E]">discovering.</span>
            <span className="mt-2 block text-white/95">Made closer to home.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
            Discover remarkable dishes from Allino Foods, trusted restaurants and talented home chefs — curated into one elegant local marketplace.
          </p>

          <div className="mt-8 max-w-2xl"><SearchBar/></div>

          <div className="mt-6 flex flex-wrap gap-3">
            <motion.div whileHover={reduce?{}:{y:-3}} whileTap={reduce?{}:{scale:.98}}>
              <Link href="/dishes" className="shine inline-flex items-center gap-2 rounded-full bg-[#D85F36] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_45px_rgba(216,95,54,.28)]">Explore dishes <ArrowRight size={17}/></Link>
            </motion.div>
            <motion.div whileHover={reduce?{}:{y:-3}} whileTap={reduce?{}:{scale:.98}}>
              <Link href="/partner" className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[.07] px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/[.12]">Become a partner</Link>
            </motion.div>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-white/55">
            <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-[#F0C56E]"/>Verified kitchens</span>
            <span className="inline-flex items-center gap-2"><Clock3 size={16} className="text-[#F0C56E]"/>Fast local delivery</span>
            <span className="inline-flex items-center gap-2"><Heart size={16} className="text-[#F0C56E]"/>Home chef discovery</span>
          </div>
        </motion.div>

        <div className="relative mx-auto h-[580px] w-full max-w-[640px] sm:h-[640px] lg:h-[670px]">
          <motion.div initial={reduce?false:{opacity:0,scale:.9,rotate:4}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:.9,delay:.12,ease:[.22,1,.36,1]}} className="absolute left-[14%] top-[2%] h-[72%] w-[72%] overflow-hidden rounded-[50%_50%_44%_56%/55%_44%_56%_45%] border border-white/10 shadow-[0_45px_100px_rgba(0,0,0,.35)]">
            <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=90" alt="Premium food spread" fill priority sizes="(max-width: 1024px) 90vw, 48vw" className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[.04]"/>
          </motion.div>

          <motion.div initial={reduce?false:{opacity:0,x:38,y:20}} animate={{opacity:1,x:0,y:0}} transition={{duration:.7,delay:.42}} className="float-slow absolute right-[0%] top-[8%] w-[42%] overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/[.07] p-2 shadow-[0_30px_70px_rgba(0,0,0,.25)] backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]"><Image src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=88" alt="Indian food" fill sizes="280px" className="object-cover"/></div>
            <div className="flex items-center justify-between px-2 pb-1 pt-3"><div><p className="text-[9px] font-extrabold uppercase tracking-[.14em] text-[#F0C56E]">Trending</p><p className="mt-1 text-xs font-extrabold">Indian favourites</p></div><Star size={14} fill="currentColor" className="text-[#F0C56E]"/></div>
          </motion.div>

          <motion.div initial={reduce?false:{opacity:0,x:-30,y:24}} animate={{opacity:1,x:0,y:0}} transition={{duration:.7,delay:.55}} className="float-delay absolute bottom-[9%] left-[1%] w-[45%] rounded-[1.7rem] border border-white/10 bg-[#FFFDF8] p-4 text-allino-ink shadow-[0_30px_70px_rgba(0,0,0,.25)]">
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#E9EFEA] text-allino-green"><ChefHat size={20}/></span><div><p className="text-[9px] font-extrabold uppercase tracking-[.15em] text-allino-coral">Home chefs</p><p className="font-display text-xl font-semibold">Freshly made nearby</p></div></div>
          </motion.div>

          <motion.div initial={reduce?false:{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{duration:.55,delay:.72}} className="absolute bottom-[25%] right-[5%] rounded-full border border-white/10 bg-[#D85F36] px-4 py-3 text-center shadow-[0_20px_45px_rgba(216,95,54,.32)]">
            <p className="font-display text-2xl font-bold">4.9</p><p className="text-[8px] font-extrabold uppercase tracking-[.13em] text-white/70">Loved locally</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden border-b border-black/[.06] bg-[#D85F36] py-3.5 text-white">
      <motion.div animate={reduce?{}:{x:["0%","-50%"]}} transition={{duration:24,repeat:Infinity,ease:"linear"}} className="flex w-max whitespace-nowrap">
        {Array.from({length:2}).flatMap((_,loop)=>["ALLINO ORIGINALS","HOME CHEFS","LOCAL RESTAURANTS","FRESHLY PREPARED","DISCOVER NEARBY","ORDER WITH EASE"].map((item,i)=>
          <span key={`${loop}-${i}`} className="mx-7 inline-flex items-center gap-5 text-[10px] font-extrabold uppercase tracking-[.23em]"><span>{item}</span><span className="h-1.5 w-1.5 rounded-full bg-[#F0C56E]"/></span>
        ))}
      </motion.div>
    </section>

    <section className="border-b border-black/[.06] bg-[#FFFDF8]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-black/[.06] px-5 sm:grid-cols-4">
        {[["4.8+","Average rating"],["30 min","Typical delivery"],["3 ways","Allino • Restaurants • Chefs"],["Local first","Built around nearby kitchens"]].map(([big,small],i)=>
          <motion.div key={small} initial={reduce?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}} className="px-4 py-7 text-center">
            <p className="font-display text-3xl font-semibold tracking-[-.04em] text-allino-ink sm:text-4xl">{big}</p>
            <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-stone-500 sm:text-[11px]">{small}</p>
          </motion.div>
        )}
      </div>
    </section>

    <motion.section initial="hidden" whileInView="show" viewport={{once:true,amount:.12}} variants={{show:{transition:{staggerChildren:.08}}}} className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div variants={reveal}><SectionHeading eyebrow="Popular categories" title="Start with what you’re craving." description="Familiar favourites, healthy bowls, tiffin meals, breakfast and desserts — beautifully organised for faster discovery."/></motion.div>
        <motion.div variants={reveal} className="hide-scrollbar mt-10 flex gap-6 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
          {categories.map(c=><CategoryCard key={c.name} {...c}/>)}
        </motion.div>
      </div>
    </motion.section>

    <section className="section-pad relative overflow-hidden bg-[#FFFDF8]">
      <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#D8A33C]/10 blur-[90px]"/>
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Featured dishes" title="Exceptional food, beautifully discovered." description="Explore dishes with clear price, ratings, kitchen identity and availability." href="/dishes" linkLabel="Explore all dishes"/>
        <motion.div variants={{show:{transition:{staggerChildren:.07}}}} initial="hidden" whileInView="show" viewport={{once:true,amount:.08}} className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {dishes.slice(0,8).map((dish,i)=><motion.div variants={reveal} key={dish.slug}><FoodCard dish={dish} priority={i<2}/></motion.div>)}
        </motion.div>
      </div>
    </section>

    <section className="section-pad bg-[#ECE1D2]">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Popular restaurants" title="Kitchens people keep coming back to." description="Explore trusted restaurants by cuisine, rating, location and delivery time." href="/restaurants"/>
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,amount:.12}} variants={{show:{transition:{staggerChildren:.1}}}} className="mt-10 grid gap-6 md:grid-cols-3">
          {restaurants.map(item=><motion.div variants={reveal} key={item.name}><RestaurantCard item={item}/></motion.div>)}
        </motion.div>
      </div>
    </section>

    <section className="section-pad bg-[#173D2F] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <motion.div initial={reduce?false:{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <p className="eyebrow !text-[#F0C56E]">Home chef spotlight</p>
          <h2 className="mt-4 max-w-xl text-balance font-display text-5xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">Real kitchens. Real people. Remarkable food.</h2>
          <p className="mt-6 max-w-lg leading-8 text-white/58">Discover talented home chefs and neighbourhood kitchens creating small-batch food with personality and care.</p>
          <Link href="/home-chefs" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F0C56E] px-6 py-3.5 text-sm font-extrabold text-[#173D2F]">Meet home chefs <ArrowRight size={17}/></Link>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,amount:.1}} variants={{show:{transition:{staggerChildren:.1}}}} className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {chefs.map(chef=><motion.div variants={reveal} key={chef.name}><ChefCard chef={chef}/></motion.div>)}
        </motion.div>
      </div>
    </section>

    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Made by Allino" title="Our own kitchen. Our everyday favourites." description="A growing collection of fresh, dependable meals made under the Allino Foods brand."/>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ownProducts.map((item,i)=><motion.article key={item.name} initial={reduce?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="group relative overflow-hidden rounded-[2rem] bg-allino-ink text-white shadow-[0_28px_70px_rgba(40,30,22,.16)]">
            <div className="relative aspect-[5/4] overflow-hidden"><Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="food-card-image object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent"/></div>
            <div className="absolute inset-x-0 bottom-0 p-6"><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#F0C56E]">{item.type}</p><div className="mt-2 flex items-end justify-between gap-4"><h3 className="max-w-[70%] font-display text-3xl font-semibold leading-none">{item.name}</h3><span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-extrabold backdrop-blur">{item.price}</span></div></div>
          </motion.article>)}
        </div>
      </div>
    </section>

    <section className="section-pad bg-[#FFFDF8]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div initial={reduce?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <p className="eyebrow">Why Allino</p>
            <h2 className="mt-4 text-balance font-display text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl">Local food discovery, elevated.</h2>
            <p className="mt-6 max-w-xl leading-8 text-stone-600">A premium experience built around trusted kitchens, local food talent and easier decisions.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={{show:{transition:{staggerChildren:.08}}}} className="grid gap-4 sm:grid-cols-2">
            {whyAllino.map(({icon:Icon,title,text},i)=><motion.div variants={reveal} key={title} className="group rounded-[1.6rem] border border-black/[.06] bg-[#F6EFE5] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_55px_rgba(47,34,24,.1)]"><span className="grid h-12 w-12 place-items-center rounded-full bg-allino-green text-[#F0C56E]"><Icon size={21}/></span><p className="mt-6 text-[10px] font-extrabold uppercase tracking-[.16em] text-allino-coral">0{i+1}</p><h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-stone-600">{text}</p></motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-pad overflow-hidden bg-[#171714] text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center"><p className="eyebrow !text-[#F0C56E]">How it works</p><h2 className="mx-auto mt-4 max-w-4xl text-balance font-display text-5xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">Three simple moments between hunger and happiness.</h2></div>
        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block"/>
          {howSteps.map(({icon:Icon,title,text},i)=><motion.div key={title} initial={reduce?false:{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className="relative rounded-[1.8rem] border border-white/10 bg-white/[.045] p-7 backdrop-blur"><span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-[#D85F36] text-white shadow-[0_15px_35px_rgba(216,95,54,.24)]"><Icon size={22}/></span><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#F0C56E]">Step 0{i+1}</p><h3 className="mt-2 font-display text-3xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/52">{text}</p></motion.div>)}
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Customer stories" title="Food that feels local. An experience that feels premium."/>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[["The home-style meal felt fresh and genuinely comforting. Finding it on one platform was easy.","Riya • Bhopal"],["I like seeing the kitchen name, rating and delivery time before choosing. The experience feels clear.","Aman • Bhopal"],["Home-chef discovery is the best part for me. It feels more personal than a generic menu.","Neha • Raisen"]].map(([quote,by],i)=><motion.blockquote key={by} initial={reduce?false:{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="rounded-[1.8rem] border border-black/[.06] bg-[#FFFDF8] p-7 shadow-[0_18px_50px_rgba(47,34,24,.07)]"><div className="flex gap-1 text-[#D8A33C]">{Array.from({length:5}).map((_,j)=><Star key={j} size={14} fill="currentColor"/>)}</div><p className="mt-6 font-display text-[1.65rem] leading-[1.25] text-stone-700">“{quote}”</p><footer className="mt-6 text-xs font-extrabold uppercase tracking-[.14em] text-allino-green">{by}</footer></motion.blockquote>)}
        </div>
      </div>
    </section>

    <section className="px-5 pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#D85F36] p-8 text-white sm:p-12 lg:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.78fr]">
          <div>
            <p className="eyebrow !text-[#F9D889]">Partner with Allino</p>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-5xl font-semibold leading-[.92] tracking-[-.055em] sm:text-6xl">Cook something people love? Let the city discover it.</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/70">Restaurants, home chefs and local food makers can build visibility, identity and customer reach with Allino.</p>
            <Link href="/partner" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-allino-coral shadow-lg">Become a partner <ArrowRight size={17}/></Link>
          </div>
          <motion.div animate={reduce?{}:{rotate:[-2,2,-2],y:[0,-8,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}} className="relative mx-auto aspect-square w-full max-w-[410px] overflow-hidden rounded-full border-[12px] border-white/10 shadow-[0_35px_80px_rgba(93,36,18,.28)]"><Image src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=88" alt="Chef preparing food" fill sizes="410px" className="object-cover"/></motion.div>
        </div>
      </div>
    </section>

    <SiteFooter/>
  </main>;
}
