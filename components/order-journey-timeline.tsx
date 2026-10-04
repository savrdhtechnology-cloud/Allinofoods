"use client";

import {motion, useReducedMotion} from "framer-motion";
import {CheckCircle2, ChefHat, Clock3, PackageCheck, Bike, ShoppingBag} from "lucide-react";

const steps=[
  {label:"Order Received",sub:"Customer placed the order",Icon:ShoppingBag},
  {label:"Confirmed",sub:"Kitchen accepted the order",Icon:CheckCircle2},
  {label:"Food Preparing",sub:"Freshly prepared in the kitchen",Icon:ChefHat},
  {label:"Ready",sub:"Packed and ready to go",Icon:PackageCheck},
  {label:"Out for Delivery",sub:"Rider is on the way",Icon:Bike},
  {label:"Delivered",sub:"Fresh food at your door",Icon:Clock3},
];

export default function OrderJourneyTimeline(){
  const reduce=useReducedMotion();

  return (
    <section className="relative overflow-hidden px-5 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(149,193,31,.10),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(214,168,75,.12),transparent_34%)]"/>
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,amount:.25}}
          transition={{duration:.55,ease:"easeOut"}}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">From order to doorstep</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-allino-ink md:text-5xl">Watch your food journey move.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">A simple animated preview of how an Allino order moves from the kitchen to delivery.</p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-slate-200 md:left-0 md:top-8 md:h-[3px] md:w-full"/>
          {!reduce && (
            <motion.div
              aria-hidden
              initial={{height:"0%"}}
              whileInView={{height:"100%"}}
              viewport={{once:true,amount:.2}}
              transition={{duration:3.6,ease:"easeInOut"}}
              className="absolute left-6 top-0 w-[3px] rounded-full bg-gradient-to-b from-allino-lime via-allino-gold to-allino-green md:hidden"
            />
          )}
          {!reduce && (
            <motion.div
              aria-hidden
              initial={{width:"0%"}}
              whileInView={{width:"100%"}}
              viewport={{once:true,amount:.2}}
              transition={{duration:3.6,ease:"easeInOut"}}
              className="absolute left-0 top-8 hidden h-[3px] rounded-full bg-gradient-to-r from-allino-lime via-allino-gold to-allino-green md:block"
            />
          )}

          <div className="relative z-10 grid gap-7 md:grid-cols-6 md:gap-4">
            {steps.map(({label,sub,Icon},i)=>(
              <motion.div
                key={label}
                initial={{opacity:0,y:reduce?0:18,scale:reduce?1:.96}}
                whileInView={{opacity:1,y:0,scale:1}}
                viewport={{once:true,amount:.25}}
                transition={{delay:reduce?0:i*.42,duration:.45,ease:"easeOut"}}
                className="group grid grid-cols-[52px_1fr] items-start gap-4 md:block md:text-center"
              >
                <motion.div
                  animate={reduce?{}:{y:[0,-5,0]}}
                  transition={{duration:2.5,repeat:Infinity,ease:"easeInOut",delay:i*.18}}
                  className="relative mx-auto grid h-13 w-13 place-items-center rounded-2xl border border-white bg-white shadow-[0_12px_32px_rgba(11,61,46,.14)] md:h-16 md:w-16"
                >
                  <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-green-50 to-amber-50"/>
                  <Icon className="relative z-10 text-allino-green" size={24}/>
                  {!reduce && (
                    <motion.span
                      className="absolute -inset-1 rounded-2xl border border-allino-gold/25"
                      animate={{scale:[1,1.18,1],opacity:[.45,0,.45]}}
                      transition={{duration:2.2,repeat:Infinity,delay:i*.25}}
                    />
                  )}
                </motion.div>
                <div className="pt-1 md:pt-5">
                  <div className="mb-1 text-[11px] font-black uppercase tracking-[.16em] text-allino-gold">Step {i+1}</div>
                  <h3 className="font-black text-allino-ink">{label}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{opacity:0,y:18}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:.5,duration:.5}}
          className="mt-14 overflow-hidden rounded-[2rem] bg-allino-green p-6 text-white shadow-[0_24px_80px_rgba(11,61,46,.22)] md:p-8"
        >
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-allino-gold">Animated delivery preview</p>
              <h3 className="mt-2 text-2xl font-black">Kitchen se doorstep tak, har stage visible.</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">Real customer orders later actual backend status se map kiye ja sakte hain. Homepage par yeh section process demo ke roop mein animate hota hai.</p>
            </div>
            <motion.div
              animate={reduce?{}:{x:[-8,10,-8]}}
              transition={{duration:2.7,repeat:Infinity,ease:"easeInOut"}}
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur"
            >
              <Bike className="text-allino-gold" size={30}/>
              <div><b>On the way</b><p className="text-xs text-white/50">Fresh • Fast • Local</p></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
