"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ReactNode, useEffect, useState} from "react";

export const fadeUp={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.55,ease:[.22,1,.36,1]}}};
export const stagger={hidden:{},show:{transition:{staggerChildren:.09}}};

export function Reveal({children,className=""}:{children:ReactNode;className?:string}) {
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}}>{children}</motion.div>;
}

export function Stagger({children,className=""}:{children:ReactNode;className?:string}) {
  return <motion.div className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}}>{children}</motion.div>;
}

export function AnimatedCard({children,className=""}:{children:ReactNode;className?:string}) {
  const reduce=useReducedMotion();
  return <motion.div className={className} variants={fadeUp} whileHover={reduce?{}:{y:-8,rotateX:2,rotateY:-2,scale:1.015}} transition={{type:"spring",stiffness:260,damping:22}} style={{transformStyle:"preserve-3d"}}>{children}</motion.div>;
}

export function FloatingOrb({className="",delay=0}:{className?:string;delay?:number}) {
  const reduce=useReducedMotion();
  return <motion.div aria-hidden className={className} animate={reduce?{}:{x:[-12,18,-12],y:[-8,16,-8],scale:[.96,1.04,.96]}} transition={{duration:12,repeat:Infinity,ease:"easeInOut",delay}}/>;
}

export function Counter({value,suffix=""}:{value:number;suffix?:string}) {
  const [n,setN]=useState(0);
  const reduce=useReducedMotion();
  useEffect(()=>{if(reduce){setN(value);return} let frame=0; const total=40; const id=setInterval(()=>{frame++;setN(Math.round(value*frame/total));if(frame>=total)clearInterval(id)},24);return()=>clearInterval(id)},[value,reduce]);
  return <>{n.toLocaleString("en-IN")}{suffix}</>;
}
