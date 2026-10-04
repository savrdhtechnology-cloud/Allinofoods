"use client";

import {motion, useReducedMotion, useScroll, useTransform} from "framer-motion";
import {usePathname} from "next/navigation";
import type {CSSProperties} from "react";

type BackgroundVariant="auto"|"light"|"dark"|"crm";
type Intensity="subtle"|"soft";

type Props={
  variant?:BackgroundVariant;
  intensity?:Intensity;
  particles?:boolean;
  leaves?:boolean;
  parallax?:boolean;
};

const particleData=[
  ["5%","12%",2,0,19],["11%","34%",3,1.2,22],["17%","69%",2,2.4,18],["23%","22%",4,.6,24],
  ["29%","83%",3,3.2,21],["35%","46%",2,1.7,20],["41%","14%",3,4,25],["47%","73%",4,.9,23],
  ["53%","29%",2,2.8,19],["59%","88%",3,1.1,26],["65%","53%",2,3.8,22],["71%","18%",4,.4,24],
  ["77%","76%",3,2,20],["83%","39%",2,4.2,25],["89%","61%",3,1.5,21],["94%","25%",2,3,23],
  ["8%","91%",3,2.2,26],["26%","57%",2,.8,22],["50%","94%",3,3.5,24],["68%","8%",2,1.9,20],
  ["86%","9%",3,4.4,25],["97%","79%",2,2.6,23]
] as const;

const leafData=[
  {left:"8%",top:"31%",delay:0,duration:17,scale:.8},
  {left:"21%",top:"76%",delay:2.5,duration:19,scale:.65},
  {left:"73%",top:"20%",delay:1.2,duration:15,scale:.75},
  {left:"88%",top:"64%",delay:3.6,duration:18,scale:.6},
  {left:"58%",top:"87%",delay:2,duration:20,scale:.7},
];

function Leaf({left,top,delay,duration,scale,reduce}:{left:string;top:string;delay:number;duration:number;scale:number;reduce:boolean|null}){
  return <motion.svg
    viewBox="0 0 40 24"
    className="absolute h-6 w-10 text-[#6FAE3D]"
    style={{left,top,opacity:.11,scale}}
    animate={reduce?{}:{x:[-10,14,-10],y:[-22,25,-22],rotate:[-9,10,-9]}}
    transition={{duration,repeat:Infinity,ease:"easeInOut",delay}}
  >
    <path fill="currentColor" d="M3 20C7 7 19 1 36 3c-3 12-12 20-25 19-3 0-6-1-8-2Zm5-2c8-3 15-7 22-12-6 6-12 11-20 14L8 18Z"/>
  </motion.svg>;
}

export default function AnimatedBackground({
  variant="auto",
  intensity="subtle",
  particles=true,
  leaves=true,
  parallax=true,
}:Props){
  const pathname=usePathname();
  const reduce=useReducedMotion();
  const resolved:Exclude<BackgroundVariant,"auto">=
    variant==="auto"
      ? pathname.startsWith("/crm")?"crm":pathname.startsWith("/partner/dashboard")?"dark":"light"
      : variant;

  const {scrollYProgress}=useScroll();
  const distance=resolved==="crm"?12:24;
  const scrollY=useTransform(scrollYProgress,[0,1],[0,reduce||!parallax?0:distance]);
  const isDark=resolved==="dark"||resolved==="crm";
  const strength=intensity==="soft"?1.15:.95;
  const visibleParticles=particleData;

  const blobBase="absolute rounded-full will-change-transform";
  const blendStyle:CSSProperties={mixBlendMode:isDark?"screen":"multiply"};

  return <div
    aria-hidden
    data-bg-variant={resolved}
    className={"pointer-events-none fixed inset-0 z-0 overflow-hidden "+(isDark?"bg-[#06110d]":"bg-[#F7F1DF]")}
  >
    <motion.div style={{y:scrollY}} className="absolute inset-0">
      <motion.div
        className={blobBase+" -left-[12rem] -top-[8rem] h-[34rem] w-[34rem] blur-[115px]"}
        style={{background:"radial-gradient(circle, rgba(111,174,61,.22), transparent 65%)",...blendStyle}}
        animate={reduce?{}:{x:[-18,20,-18],y:[-12,18,-12],scale:[.96,1.045,.96]}}
        transition={{duration:19,repeat:Infinity,ease:"easeInOut"}}
      />
      <motion.div
        className={blobBase+" right-[-10rem] top-[8%] h-[38rem] w-[38rem] blur-[125px]"}
        style={{background:"radial-gradient(circle, rgba(214,168,61,.18), transparent 65%)",...blendStyle}}
        animate={reduce?{}:{x:[18,-20,18],y:[-14,20,-14],scale:[1.03,.95,1.03]}}
        transition={{duration:23,repeat:Infinity,ease:"easeInOut",delay:1.4}}
      />
      <motion.div
        className={blobBase+" left-[24%] top-[38%] h-[32rem] w-[32rem] blur-[120px]"}
        style={{background:"radial-gradient(circle, rgba(15,77,58,.16), transparent 66%)",...blendStyle}}
        animate={reduce?{}:{x:[-16,17,-16],y:[18,-15,18],scale:[.95,1.04,.95]}}
        transition={{duration:25,repeat:Infinity,ease:"easeInOut",delay:2.1}}
      />
      <motion.div
        className={blobBase+" -left-[8rem] bottom-[-9rem] h-[30rem] w-[30rem] blur-[110px]"}
        style={{background:"radial-gradient(circle, rgba(232,201,106,.15), transparent 64%)",...blendStyle}}
        animate={reduce?{}:{x:[-12,18,-12],y:[10,-18,10],scale:[1,.96,1]}}
        transition={{duration:21,repeat:Infinity,ease:"easeInOut",delay:.7}}
      />
      <motion.div
        className={blobBase+" right-[18%] bottom-[3%] h-[26rem] w-[26rem] blur-[105px]"}
        style={{background:"radial-gradient(circle, rgba(111,174,61,.14), transparent 64%)",...blendStyle}}
        animate={reduce?{}:{x:[14,-16,14],y:[-10,16,-10],scale:[.97,1.05,.97]}}
        transition={{duration:16,repeat:Infinity,ease:"easeInOut",delay:2.8}}
      />

      {particles && visibleParticles.map((p,i)=>{
        const mobileHidden=i>8?" hidden md:block":"";
        const tabletHidden=i>15?" lg:block md:hidden":"";
        const color=i%3===0?"#D6A83D":i%3===1?"#6FAE3D":"#F7F1DF";
        return <motion.span
          key={i}
          className={"absolute rounded-full will-change-transform"+mobileHidden+tabletHidden}
          style={{left:p[0],top:p[1],width:p[2],height:p[2],backgroundColor:color,opacity:(.10+(i%3)*.025)*strength}}
          animate={reduce?{}:{x:[-8,10,-8],y:[-14,16,-14],scale:[.9,1.15,.9]}}
          transition={{duration:p[4],repeat:Infinity,ease:"easeInOut",delay:p[3]}}
        />;
      })}

      {leaves && leafData.map((leaf,i)=><div key={i} className={i>2?"hidden md:block":""}><Leaf {...leaf} reduce={reduce}/></div>)}

      {resolved==="crm" && <div className="absolute inset-0 opacity-[.035]" style={{
        backgroundImage:"linear-gradient(rgba(214,168,61,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(111,174,61,.18) 1px,transparent 1px)",
        backgroundSize:"36px 36px"
      }}/>}
    </motion.div>
  </div>;
}
