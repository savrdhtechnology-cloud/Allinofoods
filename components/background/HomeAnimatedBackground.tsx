"use client";

import {motion, useReducedMotion, useScroll, useSpring, useTransform} from "framer-motion";

const dots=[
  {l:"6%",t:"12%",s:4,d:0},{l:"14%",t:"31%",s:3,d:1.2},{l:"22%",t:"66%",s:5,d:2.1},
  {l:"31%",t:"19%",s:3,d:.8},{l:"38%",t:"81%",s:4,d:2.8},{l:"47%",t:"44%",s:3,d:1.6},
  {l:"56%",t:"10%",s:5,d:3.1},{l:"64%",t:"72%",s:3,d:1.1},{l:"73%",t:"27%",s:4,d:2.5},
  {l:"81%",t:"58%",s:3,d:.5},{l:"90%",t:"17%",s:5,d:3.5},{l:"95%",t:"84%",s:3,d:1.9},
  {l:"9%",t:"89%",s:4,d:2.2},{l:"27%",t:"52%",s:3,d:3.8},{l:"51%",t:"91%",s:4,d:.9},
  {l:"69%",t:"46%",s:3,d:2.7},{l:"85%",t:"77%",s:4,d:1.4},{l:"97%",t:"38%",s:3,d:3.3}
];

export default function HomeAnimatedBackground(){
  const reduce=useReducedMotion();
  const {scrollYProgress}=useScroll();
  const rawY1=useTransform(scrollYProgress,[0,1],[0,reduce?0:24]);
  const rawY2=useTransform(scrollYProgress,[0,1],[0,reduce?0:-18]);
  const y1=useSpring(rawY1,{stiffness:45,damping:18,mass:.8});
  const y2=useSpring(rawY2,{stiffness:40,damping:20,mass:.9});

  return <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <motion.div style={{y:y1}} className="absolute inset-0">
      <motion.div
        className="absolute -left-40 top-20 h-[36rem] w-[36rem] rounded-full blur-[105px]"
        style={{background:"radial-gradient(circle, rgba(111,174,61,.28), rgba(111,174,61,.08) 42%, transparent 70%)"}}
        animate={reduce?{}:{x:[-18,30],y:[-12,24],scale:[.95,1.08]}}
        transition={{duration:16,repeat:Infinity,repeatType:"mirror",ease:"easeInOut"}}
      />
      <motion.div
        className="absolute -right-32 top-[18%] h-[34rem] w-[34rem] rounded-full blur-[105px]"
        style={{background:"radial-gradient(circle, rgba(214,168,61,.24), rgba(232,201,106,.08) 44%, transparent 70%)"}}
        animate={reduce?{}:{x:[24,-30],y:[-16,26],scale:[1.04,.94]}}
        transition={{duration:20,repeat:Infinity,repeatType:"mirror",ease:"easeInOut",delay:1.3}}
      />
      <motion.div
        className="absolute left-[18%] top-[43%] h-[32rem] w-[32rem] rounded-full blur-[110px]"
        style={{background:"radial-gradient(circle, rgba(15,77,58,.18), rgba(111,174,61,.05) 50%, transparent 72%)"}}
        animate={reduce?{}:{x:[-26,22],y:[18,-20],scale:[.96,1.06]}}
        transition={{duration:23,repeat:Infinity,repeatType:"mirror",ease:"easeInOut",delay:2.1}}
      />
      <motion.div
        className="absolute right-[12%] top-[67%] h-[30rem] w-[30rem] rounded-full blur-[100px]"
        style={{background:"radial-gradient(circle, rgba(232,201,106,.20), rgba(214,168,61,.06) 46%, transparent 70%)"}}
        animate={reduce?{}:{x:[18,-20],y:[16,-18],scale:[1,.94]}}
        transition={{duration:18,repeat:Infinity,repeatType:"mirror",ease:"easeInOut",delay:.8}}
      />
    </motion.div>

    <motion.div style={{y:y2}} className="absolute inset-0">
      {!reduce && dots.map((p,i)=><motion.span
        key={i}
        className={"absolute rounded-full "+(i%2===0?"bg-[#D6A83D]":"bg-[#6FAE3D]")}
        style={{left:p.l,top:p.t,width:p.s,height:p.s,opacity:.24}}
        animate={{x:[-12,14],y:[-22,24],opacity:[.12,.32],scale:[.9,1.2]}}
        transition={{duration:12+(i%5)*2,repeat:Infinity,repeatType:"mirror",ease:"easeInOut",delay:p.d}}
      />)}

      {!reduce && <>
        <motion.svg viewBox="0 0 50 30" className="absolute left-[8%] top-[25%] h-8 w-12 text-[#6FAE3D] opacity-[.16]" animate={{x:[-12,18,-12],y:[-22,26,-22],rotate:[-10,12,-10]}} transition={{duration:15,repeat:Infinity,ease:"easeInOut"}}>
          <path fill="currentColor" d="M4 25C9 8 24 1 46 4c-4 15-16 25-32 24-4 0-7-1-10-3Zm7-3c10-4 19-9 28-15-7 8-15 14-25 18l-3-3Z"/>
        </motion.svg>
        <motion.svg viewBox="0 0 50 30" className="absolute right-[10%] top-[40%] h-7 w-11 text-[#D6A83D] opacity-[.14]" animate={{x:[16,-16,16],y:[20,-24,20],rotate:[12,-10,12]}} transition={{duration:18,repeat:Infinity,ease:"easeInOut",delay:2}}>
          <path fill="currentColor" d="M4 25C9 8 24 1 46 4c-4 15-16 25-32 24-4 0-7-1-10-3Zm7-3c10-4 19-9 28-15-7 8-15 14-25 18l-3-3Z"/>
        </motion.svg>
        <motion.svg viewBox="0 0 50 30" className="absolute left-[58%] top-[75%] h-7 w-11 text-[#6FAE3D] opacity-[.13]" animate={{x:[-14,14,-14],y:[-18,20,-18],rotate:[-8,10,-8]}} transition={{duration:17,repeat:Infinity,ease:"easeInOut",delay:1}}>
          <path fill="currentColor" d="M4 25C9 8 24 1 46 4c-4 15-16 25-32 24-4 0-7-1-10-3Zm7-3c10-4 19-9 28-15-7 8-15 14-25 18l-3-3Z"/>
        </motion.svg>
      </>}
    </motion.div>

    <div className="absolute inset-0 opacity-[.035]" style={{backgroundImage:"radial-gradient(circle at center, rgba(15,77,58,.65) 1px, transparent 1.4px)",backgroundSize:"34px 34px"}}/>
  </div>;
}
