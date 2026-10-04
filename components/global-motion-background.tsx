"use client";

import {motion, useReducedMotion} from "framer-motion";

const particles=[
  {left:"7%",top:"18%",size:8,delay:0,duration:12},
  {left:"18%",top:"72%",size:5,delay:1.8,duration:15},
  {left:"32%",top:"28%",size:6,delay:3.1,duration:13},
  {left:"47%",top:"82%",size:7,delay:.9,duration:17},
  {left:"62%",top:"16%",size:5,delay:2.2,duration:14},
  {left:"76%",top:"66%",size:8,delay:4,duration:16},
  {left:"89%",top:"26%",size:6,delay:1.2,duration:13},
  {left:"94%",top:"84%",size:5,delay:3.6,duration:18},
];

export default function GlobalMotionBackground(){
  const reduce=useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      <motion.div
        className="absolute -left-28 top-[12%] h-80 w-80 rounded-full bg-allino-lime/[.055] blur-[90px]"
        animate={reduce?{}:{x:[-20,38,-20],y:[-12,28,-12],scale:[.96,1.08,.96]}}
        transition={{duration:18,repeat:Infinity,ease:"easeInOut"}}
      />
      <motion.div
        className="absolute -right-24 top-[28%] h-96 w-96 rounded-full bg-allino-gold/[.06] blur-[110px]"
        animate={reduce?{}:{x:[26,-34,26],y:[-18,34,-18],scale:[1.04,.94,1.04]}}
        transition={{duration:22,repeat:Infinity,ease:"easeInOut",delay:1.5}}
      />
      <motion.div
        className="absolute bottom-[-120px] left-[35%] h-[420px] w-[420px] rounded-full bg-allino-green/[.045] blur-[120px]"
        animate={reduce?{}:{x:[-30,30,-30],y:[22,-22,22],scale:[.94,1.06,.94]}}
        transition={{duration:24,repeat:Infinity,ease:"easeInOut",delay:2.5}}
      />

      {!reduce && particles.map((p,i)=>(
        <motion.span
          key={i}
          className={"absolute rounded-full "+(i%2===0?"bg-allino-gold/20":"bg-allino-lime/20")}
          style={{left:p.left,top:p.top,width:p.size,height:p.size}}
          animate={{y:[0,-22,7,0],x:[0,12,-8,0],opacity:[.2,.55,.25,.2],scale:[1,1.35,.9,1]}}
          transition={{duration:p.duration,repeat:Infinity,ease:"easeInOut",delay:p.delay}}
        />
      ))}

      {!reduce && (
        <>
          <motion.div
            className="absolute left-[10%] top-[44%] text-lg opacity-[.08]"
            animate={{y:[0,-18,0],rotate:[-8,10,-8],x:[0,8,0]}}
            transition={{duration:9,repeat:Infinity,ease:"easeInOut"}}
          >🌿</motion.div>
          <motion.div
            className="absolute right-[12%] top-[58%] text-xl opacity-[.07]"
            animate={{y:[0,20,0],rotate:[8,-10,8],x:[0,-10,0]}}
            transition={{duration:11,repeat:Infinity,ease:"easeInOut",delay:2}}
          >🍃</motion.div>
          <motion.div
            className="absolute left-[54%] top-[10%] text-base opacity-[.055]"
            animate={{y:[0,-14,0],rotate:[0,18,0],x:[0,7,0]}}
            transition={{duration:13,repeat:Infinity,ease:"easeInOut",delay:1}}
          >✦</motion.div>
        </>
      )}

      <motion.div
        className="absolute inset-0 opacity-[.025]"
        style={{backgroundImage:"linear-gradient(rgba(11,61,46,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(11,61,46,.28) 1px, transparent 1px)",backgroundSize:"46px 46px"}}
        animate={reduce?{}:{backgroundPosition:["0px 0px","46px 46px"]}}
        transition={{duration:24,repeat:Infinity,ease:"linear"}}
      />
    </div>
  );
}
