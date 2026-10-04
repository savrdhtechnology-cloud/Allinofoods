"use client";

import {useEffect,useState} from "react";
import Link from "next/link";
import {AnimatePresence,motion,useReducedMotion} from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  Leaf,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export default function HeroFoodSlider(){
  const [index,setIndex]=useState(0);
  const reduce=useReducedMotion();
  const current=slides[index];

  useEffect(()=>{
    if(reduce) return;
    const id=window.setInterval(()=>setIndex(v=>(v+1)%slides.length),5600);
    return()=>window.clearInterval(id);
  },[reduce]);

  const change=(dir:number)=>setIndex(v=>(v+dir+slides.length)%slides.length);

  return <div className="w-full">
    <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#0B3D2E] shadow-[0_28px_80px_rgba(11,61,46,.20)] md:min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={reduce?false:{opacity:0,scale:1.035}}
          animate={{opacity:1,scale:1}}
          exit={reduce?{}:{opacity:0,scale:1.01}}
          transition={{duration:.65,ease:"easeOut"}}
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage:`url("${current.image}")`}}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[#061d16]/95 via-[#0B3D2E]/62 to-black/10"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5"/>

      <button onClick={()=>change(-1)} aria-label="Previous slide" className="absolute left-4 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur transition hover:bg-white/20 md:left-6">
        <ChevronLeft size={24}/>
      </button>
      <button onClick={()=>change(1)} aria-label="Next slide" className="absolute right-4 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur transition hover:bg-white/20 md:right-6">
        <ChevronRight size={24}/>
      </button>

      <div className="relative z-20 mx-auto flex min-h-[560px] max-w-7xl flex-col justify-between px-7 pb-5 pt-10 md:min-h-[600px] md:px-16 md:pb-6 md:pt-14 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title+"-content"}
            initial={reduce?false:{opacity:0,x:-28}}
            animate={{opacity:1,x:0}}
            exit={reduce?{}:{opacity:0,x:-16}}
            transition={{duration:.45}}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0B3D2E]/65 px-4 py-2 text-[11px] font-black uppercase tracking-[.18em] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-allino-gold"/>
              {current.tag}
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[.96] tracking-[-.04em] md:text-7xl">
              {current.title}
            </h1>
            <p className="mt-4 max-w-xl text-xl font-bold leading-8 text-white/90 md:text-2xl">
              {current.subtitle}
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {current.features.map(([Icon,label])=>{
                const F=Icon as typeof Leaf;
                return <div key={label as string} className="flex items-center gap-3 text-sm font-bold text-white/88">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-allino-gold backdrop-blur">
                    <F size={19}/>
                  </span>
                  <span>{label as string}</span>
                </div>
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={current.href} className="flex items-center gap-3 rounded-2xl bg-allino-gold px-7 py-4 font-black text-allino-ink shadow-lg transition hover:-translate-y-0.5">
                Order Now <ArrowRight size={19}/>
              </Link>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[.14em] text-white/55">Starting</p>
                <p className="text-lg font-black">{current.price}</p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold backdrop-blur">
                <Clock3 size={16}/>{current.time}
              </div>
              <div className="flex items-center gap-1.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold backdrop-blur">
                <Star size={16} fill="currentColor" className="text-allino-gold"/>{current.rating}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {slides.map((slide,i)=><button
              key={slide.title+"-thumb"}
              onClick={()=>setIndex(i)}
              className={"group relative min-h-[92px] overflow-hidden rounded-2xl border text-left transition md:min-h-[104px] "+(i===index?"border-allino-gold ring-2 ring-allino-gold/30":"border-white/25 opacity-80 hover:opacity-100")}
            >
              <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{backgroundImage:`url("${slide.image}")`}}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"/>
              <div className="relative z-10 flex min-h-[92px] flex-col justify-end p-3 md:min-h-[104px]">
                <p className="text-sm font-black text-white">{slide.title}</p>
                <p className="mt-1 text-[11px] font-semibold text-white/65">{slide.tag}</p>
              </div>
            </button>)}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((slide,i)=><button
              key={slide.title+"-dot"}
              aria-label={"Show "+slide.title}
              onClick={()=>setIndex(i)}
              className={"h-2.5 rounded-full transition-all "+(i===index?"w-8 bg-allino-gold":"w-2.5 bg-white/45 hover:bg-white/70")}
            />)}
          </div>
        </div>
      </div>
    </div>
  </div>;
}
