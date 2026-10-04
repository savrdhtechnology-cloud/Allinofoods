"use client";

import {motion, useReducedMotion, type Variants} from "framer-motion";
import {ReactNode, useEffect, useState} from "react";

export const fadeUp: Variants = {
  hidden: {opacity:0,y:28,scale:.985},
  show: {
    opacity:1,
    y:0,
    scale:1,
    transition:{
      type:"spring",
      stiffness:115,
      damping:19,
      mass:.85
    }
  }
};

export const stagger: Variants = {
  hidden:{},
  show:{
    transition:{
      delayChildren:.04,
      staggerChildren:.085
    }
  }
};

export function Reveal({children,className=""}:{children:ReactNode;className?:string}) {
  return <motion.div
    className={"food-aura-card "+className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:.18}}
  >{children}</motion.div>;
}

export function Stagger({children,className=""}:{children:ReactNode;className?:string}) {
  return <motion.div
    className={className}
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:.12}}
  >{children}</motion.div>;
}

export function AnimatedCard({children,className=""}:{children:ReactNode;className?:string}) {
  const reduce=useReducedMotion();
  return <motion.div
    className={className}
    variants={fadeUp}
    whileHover={reduce?{}:{y:-6,rotateX:1.4,rotateY:-1.4,scale:1.018}}
    whileTap={reduce?{}:{scale:.992}}
    transition={{type:"spring",stiffness:250,damping:20,mass:.65}}
    style={{transformStyle:"preserve-3d"}}
  >{children}</motion.div>;
}

export function FloatingOrb({className="",delay=0}:{className?:string;delay?:number}) {
  const reduce=useReducedMotion();
  return <motion.div
    aria-hidden
    className={className}
    animate={reduce?{}:{x:[-12,18],y:[-8,16],scale:[.96,1.04]}}
    transition={{duration:12,repeat:Infinity,repeatType:"mirror",ease:"easeInOut",delay}}
  />;
}

export function Counter({value,suffix=""}:{value:number;suffix?:string}) {
  const [n,setN]=useState(0);
  const reduce=useReducedMotion();
  useEffect(()=>{
    if(reduce){setN(value);return}
    let frame=0;
    const total=40;
    const id=setInterval(()=>{
      frame++;
      setN(Math.round(value*frame/total));
      if(frame>=total) clearInterval(id);
    },24);
    return()=>clearInterval(id);
  },[value,reduce]);
  return <>{n.toLocaleString("en-IN")}{suffix}</>;
}
