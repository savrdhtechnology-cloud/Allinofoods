"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {
  ArrowRight,
  Bike,
  CheckCircle2,
  ChefHat,
  ClipboardList,
  CookingPot,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  TimerReset,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import PageShell from "@/components/page-shell";
import {
  MotionButton,
  MotionCard,
  MotionGrid,
  MotionSection,
} from "@/components/motion/PageMotion";

const journey = [
  {
    step: "01",
    title: "Customer Places an Order",
    text: "The customer explores Allino, selects food from a home chef or restaurant, enters location and confirms the order in a simple digital flow.",
    icon: ClipboardList,
    tone: "from-[#eef8e8] to-white",
  },
  {
    step: "02",
    title: "Kitchen Accepts & Starts Preparation",
    text: "The restaurant or home kitchen receives the order, confirms availability and begins fresh preparation using its listed menu and service timing.",
    icon: ChefHat,
    tone: "from-[#fff8e8] to-white",
  },
  {
    step: "03",
    title: "Food is Prepared Fresh",
    text: "Meals are prepared with care, quality and consistency so the customer receives a fresh, trusted and enjoyable experience.",
    icon: CookingPot,
    tone: "from-[#eef8e8] to-white",
  },
  {
    step: "04",
    title: "Quality Check & Secure Packing",
    text: "Before dispatch, food is checked, packed securely and made ready for delivery so presentation, hygiene and quality are maintained.",
    icon: PackageCheck,
    tone: "from-[#fff8e8] to-white",
  },
  {
    step: "05",
    title: "Delivery is Assigned & Dispatched",
    text: "The prepared order is handed over for delivery and moves from the kitchen to the customer with clarity, speed and operational coordination.",
    icon: Bike,
    tone: "from-[#eef8e8] to-white",
  },
  {
    step: "06",
    title: "Customer Receives the Order",
    text: "The food reaches the customer, completing the Allino journey from local kitchen to doorstep with freshness, trust and convenience.",
    icon: CheckCircle2,
    tone: "from-[#fff8e8] to-white",
  },
];

const pillars = [
  {
    icon: Store,
    title: "For Restaurants",
    text: "Restaurants get one platform for visibility, order flow, digital presence and business growth.",
  },
  {
    icon: ChefHat,
    title: "For Home Chefs",
    text: "Home kitchens get a structured way to showcase food, receive orders and grow local reach.",
  },
  {
    icon: UserRound,
    title: "For Customers",
    text: "Customers discover fresh local food, trusted kitchens and a simpler order experience.",
  },
];

const liveOrderSteps:{title:string;text:string;icon:LucideIcon}[]=[
  {title:"Order Received",text:"Customer places order",icon:ClipboardList},
  {title:"Kitchen Preparing",text:"Food is prepared fresh",icon:CookingPot},
  {title:"Ready to Dispatch",text:"Packed and handed for delivery",icon:PackageCheck},
  {title:"Delivered",text:"Order reaches the customer",icon:Bike},
];

const servicePoints = [
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    text: "Built around trusted kitchens, clear order flow and dependable service experience.",
  },
  {
    icon: TimerReset,
    title: "Operational Simplicity",
    text: "A smooth platform flow makes food ordering and partner operations easier to manage.",
  },
  {
    icon: MapPinned,
    title: "Local Food Reach",
    text: "Allino helps connect local kitchens with nearby customers more efficiently.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    text: "From discovery to delivery, the experience is designed to feel modern, warm and clean.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      eyebrow="How It Works"
      title="From a home kitchen to your customer’s table."
      description="ALLINO FOODS & RESTAURANTS is designed to help restaurants and home chefs deliver food professionally — from order placement to preparation, packing and final delivery."
    >
      <MotionSection className="px-5 pb-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-[#0c4a37] via-[#0B3D2E] to-[#14533f] p-8 text-white shadow-[0_24px_80px_rgba(11,61,46,.18)] md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-allino-gold">
                <Sparkles size={14} />
                End-to-End Food Journey
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                One smooth journey.
                <br />
                Local kitchen to doorstep.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                Allino helps food move professionally from a restaurant or home chef to the final customer through a structured, premium and easy-to-understand process.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Order Flow","Fresh Preparation","Secure Packing","Delivery Experience"].map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/85"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 105, damping: 18 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="grid gap-4">
                  {liveOrderSteps.map(({title,text,icon:Icon}, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-allino-gold">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-black">{title}</h3>
                        <p className="text-sm text-white/65">{text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Food Journey</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">How food reaches the customer through Allino.</h2>
            <p className="mt-4 leading-8 text-slate-600">
              The process below shows how a food order moves professionally from the digital platform to the kitchen, then into delivery and finally to the customer.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-7 top-0 hidden h-full w-[2px] bg-gradient-to-b from-allino-lime via-allino-gold to-allino-green md:block" />
            <div className="grid gap-6">
              {journey.map(({ step, title, text, icon: Icon, tone }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ type: "spring", stiffness: 110, damping: 20, delay: i * 0.04 }}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-0 top-8 hidden h-14 w-14 place-items-center rounded-2xl bg-white shadow-card md:grid">
                    <Icon className="text-allino-green" size={24} />
                  </div>

                  <div className={`rounded-[2rem] border border-allino-green/10 bg-gradient-to-br ${tone} p-7 shadow-card md:p-8`}>
                    <div className="grid gap-4 md:grid-cols-[110px_1fr] md:items-start">
                      <div>
                        <div className="text-5xl font-black tracking-tight text-allino-gold/90">{step}</div>
                      </div>

                      <div>
                        <div className="mb-3 flex items-center gap-3 md:hidden">
                          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white shadow-sm">
                            <Icon className="text-allino-green" size={20} />
                          </span>
                          <span className="text-sm font-bold uppercase tracking-[.18em] text-allino-gold">Step {step}</span>
                        </div>

                        <h3 className="text-2xl font-black md:text-3xl">{title}</h3>
                        <p className="mt-3 max-w-3xl leading-8 text-slate-600">{text}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f4f7f2] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Who This Helps</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Built for every side of the food journey.</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Allino is not only for customers. It is also designed to help restaurants and home chefs operate with more clarity and reach.
            </p>
          </div>

          <MotionGrid className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <MotionCard key={title} className="rounded-[1.9rem] border border-allino-green/10 bg-white p-7 shadow-card">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-green-50 text-allino-green">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </MotionCard>
            ))}
          </MotionGrid>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Platform Strength</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Professional, simple and customer-focused.</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Allino combines food discovery, kitchen flow and delivery clarity in one structured platform experience.
            </p>
          </div>

          <MotionGrid className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePoints.map(({ icon: Icon, title, text }) => (
              <MotionCard key={title} className="rounded-[1.8rem] border border-allino-green/10 bg-white p-7 shadow-card">
                <Icon className="text-allino-green" size={24} />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </MotionCard>
            ))}
          </MotionGrid>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#eff7e9] via-white to-[#fff5de] p-8 shadow-card md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[.2em] text-allino-gold">Start With Allino</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ready to explore or sell with Allino?</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                Whether you are a customer looking for fresh local food or a restaurant or home chef ready to grow, Allino is built to support the entire journey.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/menu">
                <MotionButton className="rounded-xl bg-white px-6 py-3 font-black text-allino-green shadow-sm">
                  Explore Food
                </MotionButton>
              </Link>
              <Link href="/partner">
                <MotionButton className="flex items-center gap-2 rounded-xl bg-allino-green px-6 py-3 font-black text-white">
                  Sell With Allino
                  <ArrowRight size={18} />
                </MotionButton>
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>
    </PageShell>
  );
}
