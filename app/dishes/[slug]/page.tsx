"use client";

import Link from "next/link";
import {useParams} from "next/navigation";
import {ArrowLeft,ChefHat,Clock3,EyeOff,MapPin,ShieldCheck,Star,Store,UtensilsCrossed} from "lucide-react";
import PageShell from "@/components/page-shell";
import {MotionButton,MotionCard,MotionGrid,MotionSection} from "@/components/motion/PageMotion";
import {getDishBySlug} from "@/lib/dishes";

export default function DishDetailPage(){
  const params=useParams<{slug:string}>();
  const dish=getDishBySlug(params.slug);

  if(!dish){
    return <PageShell eyebrow="Dish" title="Dish not found." description="This dish is not currently available.">
      <section className="px-5 pb-24"><div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-10 text-center shadow-card">
        <Link href="/dishes" className="font-black text-allino-green">Back to all dishes</Link>
      </div></section>
    </PageShell>;
  }

  return <PageShell
    eyebrow="Dish Details"
    title={dish.dish}
    description={"Prepared by "+dish.maker+" • "+dish.location}
  >
    <MotionSection className="px-5 pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.9fr]">
        <MotionCard className="overflow-hidden rounded-[2.4rem] border border-allino-green/10 bg-white shadow-card">
          <div className="relative grid min-h-[420px] place-items-center bg-gradient-to-br from-[#eef8e8] via-[#fff8e8] to-white text-[9rem]">
            <span className="motion-food-emoji">{dish.emoji}</span>
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[.14em] text-allino-green">{dish.partnerType}</span>
              <span className={"rounded-full px-3 py-2 text-xs font-black uppercase tracking-[.14em] "+(dish.foodType==="Veg"?"bg-green-100 text-green-700":"bg-red-50 text-red-700")}>{dish.foodType}</span>
            </div>
          </div>
          <div className="p-7 md:p-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
              <div>
                <h2 className="text-3xl font-black text-allino-ink">{dish.dish}</h2>
                <p className="mt-2 text-base font-bold text-slate-500">by {dish.maker}</p>
              </div>
              <span className="flex w-fit items-center gap-1 rounded-full bg-green-50 px-3 py-2 text-sm font-black text-allino-green">
                <Star size={15} fill="currentColor"/>{dish.rating}
              </span>
            </div>

            <p className="mt-6 max-w-3xl leading-8 text-slate-600">{dish.description}</p>

            <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2"><MapPin size={16}/>{dish.location}</span>
              <span className="flex items-center gap-2"><Clock3 size={16}/>{dish.time}</span>
              <span className="flex items-center gap-2"><UtensilsCrossed size={16}/>{dish.category}</span>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-3xl font-black">₹{dish.price}</p><p className="text-xs text-slate-400">per order</p></div>
              <Link href={"/menu?dish="+encodeURIComponent(dish.dish)+"&maker="+encodeURIComponent(dish.maker)}>
                <MotionButton className="rounded-xl bg-allino-green px-7 py-4 font-black text-white">Order This Dish</MotionButton>
              </Link>
            </div>
          </div>
        </MotionCard>

        <div className="space-y-6">
          <MotionCard className="rounded-[2rem] border border-allino-green/10 bg-white p-7 shadow-card">
            <p className="text-xs font-black uppercase tracking-[.18em] text-allino-gold">Partner Profile</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-green-50 text-allino-green">
                {dish.partnerType==="Restaurant"?<Store size={24}/>:<ChefHat size={24}/>}
              </div>
              <div>
                <h3 className="text-2xl font-black">{dish.maker}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{dish.ownerRole}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-[#f5f9f2] p-5">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">Owner / Partner</p>
                <p className="mt-2 font-black text-allino-ink">{dish.ownerName}</p>
              </div>
              <div className="rounded-2xl bg-[#fff9ea] p-5">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">Specialty</p>
                <p className="mt-2 font-black text-allino-ink">{dish.specialty}</p>
              </div>
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">Partner Status</p>
                <div className="mt-2 flex items-center gap-2 font-black text-allino-green"><ShieldCheck size={17}/>{dish.partnerSince}</div>
              </div>
            </div>
          </MotionCard>

          <MotionCard className="rounded-[2rem] border border-slate-200 bg-[#fbfcfa] p-7">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500"><EyeOff size={20}/></div>
              <div>
                <h3 className="font-black">Contact details are private</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">Phone number, email and exact address are not shown publicly. Customer communication and ordering should happen through Allino for privacy and platform safety.</p>
              </div>
            </div>
          </MotionCard>

          <Link href="/dishes" className="inline-flex items-center gap-2 font-black text-allino-green"><ArrowLeft size={17}/> Back to all dishes</Link>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-5 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0B3D2E] p-7 text-white md:p-9">
        <h2 className="text-3xl font-black">Like this dish?</h2>
        <p className="mt-3 max-w-2xl text-white/65">Place the order through Allino. The partner's direct contact information remains private.</p>
      </div>
    </MotionSection>
  </PageShell>;
}
