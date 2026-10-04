"use client";

import {useEffect,useState} from "react";
import Link from "next/link";
import {AnimatePresence,motion,useReducedMotion} from "framer-motion";
import {ArrowRight,ChevronLeft,ChevronRight,Clock3,Star} from "lucide-react";

const slides=[
  {
    title:"Homemade Thali",
    tag:"Home Kitchen",
    subtitle:"Ghar jaisa swaad, fresh local meal",
    price:"₹189",
    time:"30 min",
    rating:"4.9",
    image:"https://images.unsplash.com/photo-1711153419402-336ee48f2138?auto=format&fit=crop&w=1400&q=82",
    href:"/dishes/homestyle-thali"
  },
  {
    title:"Tiffin Service",
    tag:"Daily Meals",
    subtitle:"Simple, balanced meals for everyday orders",
    price:"₹159",
    time:"35 min",
    rating:"4.8",
    image:"https://images.unsplash.com/photo-1684655531429-09beccf4adde?auto=format&fit=crop&w=1400&q=82",
    href:"/dishes/ghar-ka-tiffin"
  },
  {
    title:"Fast Food",
    tag:"Quick Bites",
    subtitle:"Burger, fries and quick favourites",
    price:"₹199",
    time:"20 min",
    rating:"4.7",
    image:"https://images.unsplash.com/photo-1768204039041-bbb7adf98078?auto=format&fit=crop&w=1400&q=82",
    href:"/dishes"
  },
  {
    title:"Non-Veg Special",
    tag:"Chef Special",
    subtitle:"Tandoori flavours and hearty non-veg meals",
    price:"₹279",
    time:"30 min",
    rating:"4.9",
    image:"https://images.unsplash.com/photo-1727280376746-b89107a5b0df?auto=format&fit=crop&w=1400&q=82",
    href:"/dishes/chicken-curry-meal"
  }
];

export default function HeroFoodSlider(){
  const [index,setIndex]=useState(0);
  const reduce=useReducedMotion();
  const current=slides[index];

  useEffect(()=>{
    if(reduce) return;
    const id=window.setInterval(()=>setIndex(v=>(v+1)%slides.length),5200);
    return()=>window.clearInterval(id);
  },[reduce]);

  const change=(dir:number)=>setIndex(v=>(v+dir+slides.length)%slides.length);

  return <div className="relative mx-auto w-full max-w-[590px]">
    <div className="relative min-h-[500px] overflow-hidden rounded-[2.5rem] bg-[#0B3D2E] shadow-[0_35px_90px_rgba(11,61,46,.28)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={reduce?false:{opacity:0,scale:1.025}}
          animate={{opacity:1,scale:1}}
          exit={reduce?{}:{opacity:0,scale:.99}}
          transition={{duration:.5,ease:"easeOut"}}
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage:`url("${current.image}")`}}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#071f18] via-[#0B3D2E]/35 to-black/10"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#071f18]/50 via-transparent to-transparent"/>

      <button onClick={()=>change(-1)} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur transition hover:bg-white/20">
        <ChevronLeft size={22}/>
      </button>
      <button onClick={()=>change(1)} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur transition hover:bg-white/20">
        <ChevronRight size={22}/>
      </button>

      <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[.18em] text-white backdrop-blur">
            {current.tag}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 text-xs font-black text-allino-green">
            <Star size={14} fill="currentColor"/>{current.rating}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.title+"-copy"}
            initial={reduce?false:{opacity:0,y:18}}
            animate={{opacity:1,y:0}}
            exit={reduce?{}:{opacity:0,y:-10}}
            transition={{duration:.38}}
            className="max-w-[440px] text-white"
          >
            <p className="mb-2 text-xs font-black uppercase tracking-[.18em] text-allino-gold">Fresh Local Pick</p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">{current.title}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/75 md:text-base">{current.subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-xs text-white/55">Starting</p>
                <p className="text-lg font-black">{current.price}</p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold backdrop-blur">
                <Clock3 size={16}/>{current.time}
              </div>
              <Link href={current.href} className="ml-auto flex items-center gap-2 rounded-xl bg-allino-gold px-5 py-3 font-black text-allino-ink transition hover:-translate-y-0.5">
                Explore <ArrowRight size={17}/>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 pt-5">
          {slides.map((slide,i)=><button
            key={slide.title}
            aria-label={"Show "+slide.title}
            onClick={()=>setIndex(i)}
            className={"h-2.5 rounded-full transition-all "+(i===index?"w-8 bg-allino-gold":"w-2.5 bg-white/45 hover:bg-white/70")}
          />)}
        </div>
      </div>
    </div>

    <div className="mt-4 grid grid-cols-4 gap-2">
      {slides.map((slide,i)=><button
        key={slide.title+"-thumb"}
        onClick={()=>setIndex(i)}
        className={"group overflow-hidden rounded-2xl border bg-white p-1 text-left transition "+(i===index?"border-allino-gold shadow-md":"border-allino-green/10 opacity-75 hover:opacity-100")}
      >
        <div className="h-16 rounded-xl bg-cover bg-center" style={{backgroundImage:`url("${slide.image}")`}}/>
        <p className="truncate px-2 py-2 text-[11px] font-black text-allino-ink">{slide.title}</p>
      </button>)}
    </div>
  </div>;
}
