"use client";

import {motion} from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  ChefHat,
  CheckCircle2,
  HeartHandshake,
  Home,
  PackageCheck,
  Sparkles,
  Store,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import PageShell from "@/components/page-shell";
import {
  MotionButton,
  MotionCard,
  MotionGrid,
  MotionSection,
} from "@/components/motion/PageMotion";

const partnerTypes=[
  {
    icon:Store,
    title:"Restaurants",
    text:"Grow digital reach, showcase your menu and receive more local orders through Allino."
  },
  {
    icon:Home,
    title:"Home Kitchens",
    text:"Sell homemade meals professionally even if you do not operate a large restaurant setup."
  },
  {
    icon:ChefHat,
    title:"Housewives & Home Chefs",
    text:"Turn your cooking skill into an earning opportunity by serving nearby customers through Allino."
  },
  {
    icon:UtensilsCrossed,
    title:"Special Dish Makers",
    text:"Regional food, snacks, sweets, tiffin, breakfast or signature dishes can find the right audience."
  }
];

const helpSteps=[
  "We create your partner profile",
  "Your dishes and menu are listed",
  "Customers discover and order",
  "You prepare the food fresh",
  "Delivery is coordinated to the customer",
  "You earn from completed orders"
];

const benefits=[
  ["Local Visibility","Get discovered by nearby customers looking for fresh food."],
  ["Earning Opportunity","Turn cooking talent into a practical source of income."],
  ["Professional Presence","Present your kitchen and dishes in a clean digital format."],
  ["Simple Onboarding","Start with basic details, verification and your menu."],
  ["Growth Support","Build repeat demand and expand your local customer reach."],
  ["Flexible Model","Suitable for restaurants, small kitchens and home-based cooks."]
];

export default function Partner(){
  return <PageShell
    eyebrow="Become an Allino Partner"
    title="Turn your cooking talent into income."
    description="If you cook great food, Allino can help bring your dishes to real customers. Join as a restaurant, home kitchen, home chef or local food maker and grow your earning opportunity."
  >
    <MotionSection className="px-5 pb-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <MotionCard className="relative overflow-hidden rounded-[2.35rem] bg-gradient-to-br from-[#0B3D2E] via-[#0d4b38] to-[#123f31] p-8 text-white shadow-[0_30px_90px_rgba(11,61,46,.20)] md:p-10">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-allino-gold/15 blur-3xl"/>
          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-allino-lime/15 blur-3xl"/>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-allino-gold">
              <Sparkles size={15}/> Cook. Earn. Grow.
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
              Great food made at home deserves real customers.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              A talented home cook should not need a large restaurant to start earning. Allino is designed to help local cooks, home chefs and small kitchens present their food professionally and reach nearby customers.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["👩‍🍳","Home Chefs"],
                ["🏠","Home Kitchens"],
                ["🍱","Tiffin Makers"],
                ["🍰","Special Dish Makers"]
              ].map(([icon,label],i)=>
                <motion.div
                  key={label}
                  initial={{opacity:0,y:10}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{delay:i*.06}}
                  whileHover={{y:-3}}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.07] p-4"
                >
                  <span className="text-2xl">{icon}</span>
                  <b>{label}</b>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{opacity:0,y:12}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:.16}}
              className="mt-8 rounded-2xl border border-allino-gold/20 bg-allino-gold/10 p-5"
            >
              <p className="text-sm leading-7 text-white/80">
                <b className="text-allino-gold">For homemakers:</b> If you regularly prepare food that family, friends or neighbours love, Allino can help you explore turning that cooking skill into a structured home-chef earning opportunity.
              </p>
            </motion.div>
          </div>
        </MotionCard>

        <MotionCard className="motion-form-card rounded-[2.35rem] border border-allino-green/10 bg-white p-8 shadow-card md:p-10">
          <p className="font-bold uppercase tracking-[.18em] text-allino-gold">Start Your Journey</p>
          <h2 className="mt-3 text-3xl font-black">Register your interest</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Tell us what you cook. Our team can review your partner interest and guide you through the next onboarding steps.
          </p>

          <form className="mt-7">
            <div className="grid gap-4">
              <input className="rounded-xl border p-4" placeholder="Your name"/>
              <input className="rounded-xl border p-4" placeholder="Kitchen / food brand name (optional)"/>
              <input className="rounded-xl border p-4" placeholder="Mobile number"/>
              <input className="rounded-xl border p-4" placeholder="City / locality"/>
              <select className="rounded-xl border p-4">
                <option>What best describes you?</option>
                <option>Restaurant</option>
                <option>Home Kitchen</option>
                <option>Housewife / Home Chef</option>
                <option>Tiffin Service</option>
                <option>Special Dish Maker</option>
              </select>
              <textarea className="min-h-28 rounded-xl border p-4" placeholder="What dishes do you make best?"/>
              <MotionButton className="flex items-center justify-center gap-2 rounded-xl bg-allino-green p-4 font-black text-white">
                Become an Allino Partner <ArrowRight size={18}/>
              </MotionButton>
            </div>
          </form>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-green-50 p-4 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 shrink-0 text-allino-green" size={18}/>
            Partner activation is subject to onboarding, verification and applicable platform requirements.
          </div>
        </MotionCard>
      </div>
    </MotionSection>

    <MotionSection className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Who Can Join</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A platform for local food talent.</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Allino is being built for established restaurants as well as talented local cooks who want to reach customers in a more professional way.
          </p>
        </div>

        <MotionGrid className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {partnerTypes.map(({icon:Icon,title,text})=>
            <MotionCard key={title} className="motion-food-card rounded-[1.85rem] border border-allino-green/10 bg-white p-7 shadow-card">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-green-50 text-allino-green">
                <Icon size={25}/>
              </div>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </MotionCard>
          )}
        </MotionGrid>
      </div>
    </MotionSection>

    <MotionSection className="bg-[#f4f7f2] px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">How Allino Helps</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">From your kitchen to the customer.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Your focus is making great food. Allino helps create the digital journey around discovery, ordering and delivery coordination so your dishes can reach customers more professionally.
          </p>

          <div className="mt-8 rounded-[2rem] bg-allino-green p-7 text-white">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-allino-gold">
                <BadgeIndianRupee size={24}/>
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-allino-gold">Opportunity</p>
                <h3 className="mt-1 text-2xl font-black">Your food can become your business.</h3>
              </div>
            </div>
            <p className="mt-5 leading-7 text-white/65">
              A good dish already has value. The platform is designed to help turn that value into a repeatable customer and earning opportunity.
            </p>
          </div>
        </div>

        <MotionGrid className="grid gap-4">
          {helpSteps.map((step,i)=>
            <MotionCard key={step} className="motion-step-card flex items-center gap-5 rounded-2xl bg-white p-5 shadow-card">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-allino-gold font-black text-allino-ink">{i+1}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.15em] text-slate-400">Step {i+1}</p>
                <h3 className="mt-1 font-black text-allino-ink">{step}</h3>
              </div>
            </MotionCard>
          )}
        </MotionGrid>
      </div>
    </MotionSection>

    <MotionSection className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Partner Benefits</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Start small. Build your local food identity.</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
            The partner experience is designed to make local food talent more visible, more professional and easier for customers to discover.
          </p>
        </div>

        <MotionGrid className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title,text],i)=>
            <MotionCard key={title} className="rounded-[1.75rem] border border-allino-green/10 bg-white p-7 shadow-card">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f2f8ed] font-black text-allino-green">0{i+1}</span>
                <div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            </MotionCard>
          )}
        </MotionGrid>
      </div>
    </MotionSection>

    <MotionSection className="px-5 pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#0B3D2E] to-[#15513d] p-8 text-white shadow-[0_30px_90px_rgba(11,61,46,.18)] md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-allino-gold">
              <HeartHandshake size={24}/>
              <span className="text-xs font-black uppercase tracking-[.18em]">Partner With Allino</span>
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">If you can cook great food, there may be a customer waiting for it.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/65">
              Share your cooking talent, tell us your best dishes and begin your journey toward becoming an Allino food partner.
            </p>
          </div>
          <MotionButton className="flex items-center justify-center gap-2 rounded-xl bg-allino-gold px-7 py-4 font-black text-allino-ink">
            Register Interest <ArrowRight size={18}/>
          </MotionButton>
        </div>
      </div>
    </MotionSection>
  </PageShell>;
}
