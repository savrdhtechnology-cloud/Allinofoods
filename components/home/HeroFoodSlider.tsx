"use client";

import {useEffect,useRef,useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence,motion,useReducedMotion,useScroll,useTransform} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  type LucideIcon,
} from "lucide-react";
import SearchBar from "@/components/search/search-bar";

const slides=[
  {
    title:"Homestyle Thali",
    tag:"Home Kitchen",
    subtitle:"Ghar jaisa swaad, ab aapke ghar tak.",
    price:"₹189",
    time:"30 min",
    rating:"4.9",
    image:"https://images.unsplash.com/photo-1711153419402-336ee48f2138?auto=format&fit=crop&w=1800&q=88",
    href:"/dishes/homestyle-thali",
    features:[
      [Leaf,"Fresh Ingredients"],
      [Heart,"Homemade Taste"],
      [ShieldCheck,"Verified Home Chef"],
      [Truck,"Fast Local Delivery"],
    ] as [LucideIcon,string][]
  },
  {
    title:"Tiffin Service",
    tag:"Daily Fresh Meals",
    subtitle:"Simple, balanced tiffin meals for everyday lunch and dinner.",
    price:"₹159",
    time:"35 min",
    rating:"4.8",
    image:"https://images.unsplash.com/photo-1684655531429-09beccf4adde?auto=format&fit=crop&w=1800&q=88",
    href:"/dishes/ghar-ka-tiffin",
    features:[
      [Leaf,"Fresh Daily"],
      [Heart,"Home Style"],
      [ShieldCheck,"Verified Kitchen"],
      [Truck,"Doorstep Delivery"],
    ] as [LucideIcon,string][]
  },
  {
    title:"Fast Food",
    tag:"Quick Bites",
    subtitle:"Burger, fries, wraps and quick favourites when cravings hit.",
    price:"₹199",
    time:"20 min",
    rating:"4.7",
    image:"https://images.unsplash.com/photo-1768204039041-bbb7adf98078?auto=format&fit=crop&w=1800&q=88",
    href:"/dishes",
    features:[
      [Leaf,"Freshly Made"],
      [Heart,"Popular Picks"],
      [ShieldCheck,"Trusted Partners"],
      [Truck,"Quick Delivery"],
    ] as [LucideIcon,string][]
  },
  {
    title:"Non-Veg Special",
    tag:"Chef Special",
    subtitle:"Tandoori flavours, curries and hearty non-veg meals.",
    price:"₹279",
    time:"30 min",
    rating:"4.9",
    image:"https://images.unsplash.com/photo-1727280376746-b89107a5b0df?auto=format&fit=crop&w=1800&q=88",
    href:"/dishes/chicken-curry-meal",
    features:[
      [Leaf,"Fresh Spices"],
      [Heart,"Chef Special"],
      [ShieldCheck,"Verified Restaurant"],
      [Truck,"Hot Delivery"],
    ] as [LucideIcon,string][]
  }
];

const ease=[.22,1,.36,1] as const;

export default function HeroFoodSlider(){
  const [index,setIndex]=useState(0);
  const reduce=useReducedMotion();
  const current=slides[index];
  const heroRef=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:heroRef,offset:["start start","end start"]});
  const imageY=useTransform(scrollYProgress,[0,1],[0,reduce?0:34]);
  const imageScale=useTransform(scrollYProgress,[0,1],[1,reduce?1:1.035]);

  useEffect(()=>{
    if(reduce) return;
    const id=window.setInterval(()=>setIndex(v=>(v+1)%slides.length),6200);
    return()=>window.clearInterval(id);
  },[reduce]);

  const change=(dir:number)=>setIndex(v=>(v+dir+slides.length)%slides.length);

  return <section ref={heroRef} className="relative overflow-hidden bg-[#FFF8EC] text-[#191714]">
    <div aria-hidden="true" className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#E7654B]/10 blur-[90px]"/>
    <div aria-hidden="true" className="absolute right-[-5%] top-[12%] h-96 w-96 rounded-full bg-[#D9A441]/12 blur-[120px]"/>
    <div aria-hidden="true" className="absolute bottom-[-18%] left-[42%] h-80 w-80 rounded-full bg-[#0B3D2E]/8 blur-[110px]"/>

    <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-14 md:min-h-[690px] md:grid-cols-[.96fr_1.04fr] md:py-16 lg:min-h-[760px] lg:gap-16 lg:py-20">
      <motion.div
        initial={reduce?false:"hidden"}
        animate="show"
        variants={{
          hidden:{opacity:0},
          show:{opacity:1,transition:{staggerChildren:reduce?0:.085,delayChildren:.06}}
        }}
        className="relative z-20 max-w-2xl"
      >
        <motion.div variants={{hidden:{opacity:0,y:14},show:{opacity:1,y:0,transition:{duration:.5,ease}}}} className="inline-flex items-center gap-2 rounded-full border border-[#0B3D2E]/10 bg-white/75 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#0B3D2E] shadow-[0_10px_30px_rgba(53,38,26,.06)] backdrop-blur-xl sm:text-[11px]">
          <Sparkles size={14} className="text-[#E7654B]"/>
          Fresh food from local kitchens
        </motion.div>

        <motion.h1 variants={{hidden:{opacity:0,y:22},show:{opacity:1,y:0,transition:{duration:.62,ease}}}} className="mt-6 max-w-[740px] text-balance font-display text-[clamp(3.15rem,7.3vw,5.5rem)] font-semibold leading-[.91] tracking-[-.055em] text-[#191714]">
          Discover great food,
          <span className="mt-1 block">made <span className="italic text-[#E7654B]">closer</span> to home.</span>
        </motion.h1>

        <motion.p variants={{hidden:{opacity:0,y:18},show:{opacity:1,y:0,transition:{duration:.55,ease}}}} className="mt-6 max-w-xl text-[15px] leading-7 text-stone-600 sm:text-lg sm:leading-8">
          From Allino Foods, trusted restaurants and talented home chefs — discover fresh local food through one beautifully simple marketplace.
        </motion.p>

        <motion.div variants={{hidden:{opacity:0,y:18},show:{opacity:1,y:0,transition:{duration:.55,ease}}}} className="mt-7">
          <SearchBar variant="hero"/>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0,transition:{duration:.5,ease}}}} className="mt-6 flex flex-wrap gap-3">
          <motion.div whileHover={reduce?{}:{y:-3}} whileTap={reduce?{}:{scale:.98}}>
            <Link href="/dishes" className="inline-flex items-center gap-2 rounded-full bg-[#0B3D2E] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(11,61,46,.2)] transition hover:bg-[#191714]">
              Browse menu <ArrowRight size={17}/>
            </Link>
          </motion.div>
          <motion.div whileHover={reduce?{}:{y:-3}} whileTap={reduce?{}:{scale:.98}}>
            <Link href={current.href} className="inline-flex items-center gap-2 rounded-full border border-black/[.10] bg-white/75 px-6 py-3.5 text-sm font-extrabold text-[#191714] shadow-[0_10px_30px_rgba(53,38,26,.05)] backdrop-blur transition hover:bg-white">
              Order now
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0,y:14},show:{opacity:1,y:0,transition:{duration:.5,ease}}}} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-extrabold uppercase tracking-[.08em] text-stone-500 sm:text-xs">
          <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-[#0B3D2E]"/>Verified kitchens</span>
          <span className="inline-flex items-center gap-2"><Leaf size={16} className="text-[#0B3D2E]"/>Fresh ingredients</span>
          <span className="inline-flex items-center gap-2"><Truck size={16} className="text-[#0B3D2E]"/>Local delivery</span>
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto h-[480px] w-full max-w-[620px] sm:h-[560px] md:h-[570px] lg:h-[620px]">
        <div aria-hidden="true" className="absolute left-[7%] top-[3%] h-[82%] w-[86%] rounded-[2.25rem] border border-[#191714]/7 bg-[#EFDCC8] shadow-[0_35px_90px_rgba(58,40,27,.14)] sm:rounded-[2.8rem]"/>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current.image}
            initial={reduce?false:{opacity:0,x:24,scale:1.055}}
            animate={{opacity:1,x:0,scale:1}}
            exit={reduce?{}:{opacity:0,x:-20,scale:1.025}}
            transition={{duration:.8,ease}}
            style={reduce?undefined:{y:imageY,scale:imageScale}}
            className="absolute left-[10%] top-[6%] h-[76%] w-[80%] overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(54,38,26,.2)] sm:rounded-[2.5rem]"
          >
            <Image src={current.image} alt={current.title} fill priority={index===0} sizes="(max-width: 767px) 88vw, (max-width: 1100px) 50vw, 610px" className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[.05]"/>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.title+"-trend"}
            initial={reduce?false:{opacity:0,y:16,x:10}}
            animate={{opacity:1,y:0,x:0}}
            exit={reduce?{}:{opacity:0,y:10}}
            transition={{duration:.45,ease}}
            className="absolute right-[1%] top-[10%] max-w-[190px] rounded-[1.4rem] border border-white/70 bg-white/80 p-4 shadow-[0_22px_55px_rgba(50,35,24,.15)] backdrop-blur-xl sm:max-w-[220px] sm:p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div><p className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#E7654B]">Trending near you</p><p className="mt-1.5 font-display text-lg font-semibold leading-tight sm:text-xl">{current.title}</p></div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#FFF1E9] text-[#E7654B]"><Star size={15} fill="currentColor"/></span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-[10px] font-bold text-stone-500"><span>{current.time}</span><span className="h-1 w-1 rounded-full bg-stone-300"/><span>{current.price}</span></div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          animate={reduce?{}:{y:[0,-9,0]}}
          transition={{duration:5.4,repeat:Infinity,ease:"easeInOut"}}
          className="absolute bottom-[11%] left-[0%] rounded-[1.4rem] border border-white/75 bg-white/86 p-4 shadow-[0_22px_55px_rgba(50,35,24,.14)] backdrop-blur-xl sm:p-5"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#EDF4EE] text-[#0B3D2E]"><ChefHat size={20}/></span>
            <div><p className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#0B3D2E]">Home chefs</p><p className="mt-1 font-display text-lg font-semibold leading-none sm:text-xl">Freshly made</p></div>
          </div>
        </motion.div>

        <motion.div
          animate={reduce?{}:{y:[0,7,0],rotate:[0,1.5,0]}}
          transition={{duration:6.2,repeat:Infinity,ease:"easeInOut"}}
          className="absolute bottom-[16%] right-[3%] rounded-full border border-white/70 bg-[#191714] px-4 py-3 text-center text-white shadow-[0_18px_45px_rgba(25,23,20,.2)]"
        >
          <p className="font-display text-2xl font-bold leading-none">{current.rating}</p>
          <p className="mt-1 text-[8px] font-extrabold uppercase tracking-[.14em] text-white/60">Homestyle favourites</p>
        </motion.div>

        <div className="absolute bottom-[1%] left-[10%] right-[10%] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {slides.map((slide,i)=><button key={slide.title} onClick={()=>setIndex(i)} aria-label={`Show ${slide.title}`} aria-current={i===index?"true":undefined} className={`h-2.5 rounded-full transition-all duration-300 ${i===index?"w-8 bg-[#E7654B]":"w-2.5 bg-[#191714]/20 hover:bg-[#191714]/35"}`}/>)}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>change(-1)} aria-label="Previous food slide" className="grid h-10 w-10 place-items-center rounded-full border border-black/[.08] bg-white/80 text-[#191714] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"><ChevronLeft size={18}/></button>
            <button onClick={()=>change(1)} aria-label="Next food slide" className="grid h-10 w-10 place-items-center rounded-full bg-[#E7654B] text-white shadow-[0_10px_25px_rgba(231,101,75,.2)] transition hover:-translate-y-0.5"><ChevronRight size={18}/></button>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-black/[.06] bg-white/45">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-stone-500 sm:text-[11px]">
        <span className="inline-flex items-center gap-2"><MapPin size={13} className="text-[#E7654B]"/>Serving local kitchens around you</span>
        <AnimatePresence mode="wait"><motion.span key={current.title} initial={reduce?false:{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={reduce?{}:{opacity:0,y:-6}} className="hidden items-center gap-2 md:inline-flex"><Clock3 size={13}/>{current.title} • {current.time} • {current.rating} rating</motion.span></AnimatePresence>
      </div>
    </div>
  </section>;
}
