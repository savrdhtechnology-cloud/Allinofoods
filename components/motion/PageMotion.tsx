"use client";

import {motion, useReducedMotion} from "framer-motion";
import type {ReactNode} from "react";

export function MotionSection({children,className=""}:{children:ReactNode;className?:string}){
  const reduce=useReducedMotion();
  return <motion.section
    className={className}
    initial={reduce?false:{opacity:0,y:22}}
    whileInView={reduce?{}:{opacity:1,y:0}}
    viewport={{once:true,amount:.12}}
    transition={{type:"spring",stiffness:105,damping:20,mass:.8}}
  >{children}</motion.section>;
}

export function MotionGrid({children,className=""}:{children:ReactNode;className?:string}){
  const reduce=useReducedMotion();
  return <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:.1}}
    variants={{
      hidden:{},
      show:{transition:{staggerChildren:reduce?0:.07,delayChildren:reduce?0:.03}}
    }}
  >{children}</motion.div>;
}

export function MotionCard({children,className=""}:{children:ReactNode;className?:string}){
  const reduce=useReducedMotion();
  return <motion.div
    className={className}
    variants={{
      hidden:{opacity:0,y:reduce?0:18,scale:reduce?1:.985},
      show:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:125,damping:20,mass:.72}}
    }}
    whileHover={reduce?{}:{y:-5,scale:1.01}}
    transition={{type:"spring",stiffness:260,damping:22}}
  >{children}</motion.div>;
}

export function MotionButton({children,className=""}:{children:ReactNode;className?:string}){
  const reduce=useReducedMotion();
  return <motion.button
    className={className}
    whileHover={reduce?{}:{y:-2,scale:1.02}}
    whileTap={reduce?{}:{scale:.98}}
    transition={{type:"spring",stiffness:320,damping:24}}
  >{children}</motion.button>;
}
