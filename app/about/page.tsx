"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowRight,ChefHat,HeartHandshake,Leaf,ShieldCheck,Sparkles,Store,Users} from "lucide-react";
import PageShell from "@/components/page-shell";
import {MotionSection,MotionGrid,MotionCard,MotionButton} from "@/components/motion/PageMotion";

const missionCards=[
  {
    icon:Store,
    title:"Empower Local Kitchens",
    text:"Help restaurants and home chefs build visibility, serve more customers and grow with confidence."
  },
  {
    icon:Leaf,
    title:"Fresh & Trusted Food",
    text:"Create a dependable food experience built around freshness, consistency and local trust."
  },
  {
    icon:Sparkles,
    title:"Simple Food Technology",
    text:"Make discovery, ordering and partner operations feel simple, modern and easy to use."
  },
  {
    icon:HeartHandshake,
    title:"Build Local Community",
    text:"Connect customers, restaurants and home chefs through one stronger local food ecosystem."
  }
];

const values=[
  ["Trust","Every interaction should feel dependable."],
  ["Freshness","Local food deserves a fresh-first experience."],
  ["Community","Growth should benefit kitchens and customers together."],
  ["Simplicity","Technology should reduce friction, not add it."],
  ["Quality","A premium experience comes from consistency."],
  ["Growth","Partners should have room to build and scale."]
];

export default function About(){
  return <PageShell
    eyebrow="About Allino"
    title="Food Technology, Powered by Local Trust."
    description="ALLINO FOODS & RESTAURANTS is building a smarter and more human food ecosystem where customers, restaurants and home chefs can grow together."
  >
    <MotionSection className="px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.92fr_1.08fr]">
        <MotionCard className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-allino-green via-[#0c4a37] to-[#082b21] p-8 text-white shadow-[0_30px_90px_rgba(11,61,46,.20)] md:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-allino-gold/15 blur-3xl"/>
          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-allino-lime/15 blur-3xl"/>
          <div className="relative z-10">
            <motion.div
              initial={{opacity:0,x:-14}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-allino-gold"
            >
              <Sparkles size={15}/> Founder Vision
            </motion.div>
            <div className="mt-8 flex items-center gap-5">
              <motion.div
                initial={{scale:.9,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true}}
                transition={{type:"spring",stiffness:130,damping:18}}
                className="grid h-20 w-20 place-items-center rounded-[1.6rem] border border-white/10 bg-white/10 text-4xl shadow-inner"
              >
                👩‍💼
              </motion.div>
              <div>
                <h2 className="text-4xl font-black">Seema Choudhary</h2>
                <p className="mt-1 text-sm font-semibold text-white/60">Owner, ALLINO FOODS & RESTAURANTS</p>
              </div>
            </div>

            <motion.div
              initial={{opacity:0,y:16}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{type:"spring",stiffness:105,damping:20,delay:.08}}
              className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[.08] p-6 backdrop-blur-sm"
            >
              <p className="text-lg leading-8 text-white/90">
                “Great food is not only about delivery. It is about trust, freshness, local talent and a meaningful customer experience. My vision for Allino is to create one platform where restaurants and home chefs can grow with dignity, technology and wider reach.”
              </p>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Fresh Food","Local Kitchens","Trusted Platform"].map((item,i)=>
                <motion.span
                  key={item}
                  initial={{opacity:0,y:10}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{delay:.12+i*.06}}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/85"
                >
                  {item}
                </motion.span>
              )}
            </div>
          </div>
        </MotionCard>

        <MotionCard className="rounded-[2.25rem] border border-allino-green/10 bg-white p-8 shadow-card md:p-10">
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Our Direction</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-allino-ink">A better food ecosystem for local growth.</h2>

          <div className="mt-9 grid gap-5">
            <motion.div whileHover={{x:4}} transition={{type:"spring",stiffness:260,damping:22}} className="rounded-2xl bg-[#f3f8ef] p-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-allino-green text-white"><ShieldCheck size={20}/></span>
                <div>
                  <h3 className="text-xl font-black">Our Vision</h3>
                  <p className="mt-2 leading-7 text-slate-600">To become a trusted and modern food marketplace that uplifts local restaurants and home chefs while giving customers a fresher, easier and more human food experience.</p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{x:4}} transition={{type:"spring",stiffness:260,damping:22}} className="rounded-2xl bg-[#fff8e8] p-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-allino-gold text-allino-ink"><ChefHat size={20}/></span>
                <div>
                  <h3 className="text-xl font-black">Our Mission</h3>
                  <p className="mt-2 leading-7 text-slate-600">Empower local food businesses, simplify the ordering journey and build a premium platform around trust, quality, technology and sustainable growth.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Local First","Tech Enabled","Quality Focused","Growth Oriented","Customer Trusted"].map((item,i)=>
              <motion.span
                key={item}
                initial={{opacity:0,scale:.96}}
                whileInView={{opacity:1,scale:1}}
                viewport={{once:true}}
                transition={{delay:i*.05}}
                whileHover={{y:-2}}
                className="rounded-full border border-allino-green/10 bg-white px-4 py-2 text-xs font-black text-allino-green shadow-sm"
              >
                {item}
              </motion.span>
            )}
          </div>
        </MotionCard>
      </div>
    </MotionSection>

    <MotionSection className="bg-[#f4f7f2] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Mission in Action</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">What Allino is being built to do.</h2>
          <p className="mt-4 leading-8 text-slate-600">The goal is not simply to list food online. It is to make local food businesses easier to discover, easier to operate and easier to trust.</p>
        </div>

        <MotionGrid className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {missionCards.map(({icon:Icon,title,text})=>
            <MotionCard key={title} className="motion-food-card rounded-[1.75rem] border border-allino-green/5 bg-white p-7 shadow-card">
              <div className="grid h-13 w-13 place-items-center rounded-2xl bg-green-50 text-allino-green">
                <Icon size={24}/>
              </div>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </MotionCard>
          )}
        </MotionGrid>
      </div>
    </MotionSection>

    <MotionSection className="px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Why Allino Exists</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Bridging local talent and digital reach.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Many local kitchens and home chefs have strong food and loyal customers, but limited digital visibility, operational tools and growth support. Allino is designed to bridge that gap while keeping the customer experience simple and trustworthy.
          </p>
        </div>

        <MotionGrid className="grid gap-5 md:grid-cols-3">
          {[
            {icon:Users,title:"For Customers",text:"Fresh local choices, trusted discovery and a simpler order journey."},
            {icon:Store,title:"For Restaurants",text:"One place for visibility, menu presence, customer reach and growth."},
            {icon:ChefHat,title:"For Home Chefs",text:"A stronger digital identity, local discovery and new opportunities."}
          ].map(({icon:Icon,title,text})=>
            <MotionCard key={title} className="rounded-3xl border border-allino-green/10 bg-white p-6 shadow-card">
              <Icon className="text-allino-green" size={26}/>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </MotionCard>
          )}
        </MotionGrid>
      </div>
    </MotionSection>

    <MotionSection className="px-5 pb-20">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#0B3D2E] p-8 text-white shadow-[0_30px_90px_rgba(11,61,46,.18)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Our Core Values</p>
            <h2 className="mt-3 text-4xl font-black">Fresh + Local + Trusted</h2>
          </div>
          <MotionGrid className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([name,text])=>
              <MotionCard key={name} className="rounded-2xl border border-white/10 bg-white/[.06] p-5">
                <h3 className="font-black text-allino-gold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </MotionCard>
            )}
          </MotionGrid>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-5 pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#eff7e9] via-white to-[#fff4d9] p-8 text-center shadow-card md:p-12">
        <motion.div
          initial={{scale:.92,opacity:0}}
          whileInView={{scale:1,opacity:1}}
          viewport={{once:true}}
          transition={{type:"spring",stiffness:120,damping:18}}
          className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-allino-green text-white"
        >
          <HeartHandshake size={28}/>
        </motion.div>
        <p className="mt-6 font-bold uppercase tracking-[.2em] text-allino-gold">Grow With Us</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Join the Allino Journey.</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Whether you are looking for fresh local food or building a restaurant or home kitchen, Allino is being designed to grow with you.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/menu"><MotionButton className="rounded-xl bg-white px-6 py-3 font-black text-allino-green shadow-sm">Explore Food</MotionButton></Link>
          <Link href="/partner"><MotionButton className="flex items-center gap-2 rounded-xl bg-allino-green px-6 py-3 font-black text-white">Sell With Allino <ArrowRight size={18}/></MotionButton></Link>
        </div>
      </div>
    </MotionSection>
  </PageShell>;
}
