"use client";

import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";
import {ArrowLeft,ChefHat,Clock3,EyeOff,MapPin,ShieldCheck,Star,Store,UtensilsCrossed} from "lucide-react";
import PageShell from "@/components/page-shell";
import Price from "@/components/ui/price";
import Rating from "@/components/ui/rating";
import {getDishBySlug,getDishImage} from "@/lib/dishes";

export default function DishDetailPage(){
  const params=useParams<{slug:string}>();
  const dish=getDishBySlug(params.slug);

  if(!dish){
    return <PageShell eyebrow="Dish" title="Dish not found." description="This dish is not currently available.">
      <section className="px-5 py-16"><div className="mx-auto max-w-4xl rounded-[1.6rem] bg-white p-10 text-center shadow-soft"><Link href="/dishes" className="font-extrabold text-allino-green">Back to all dishes</Link></div></section>
    </PageShell>;
  }

  return <PageShell eyebrow="Dish details" title={dish.dish} description={`Prepared by ${dish.maker} • ${dish.location}`}>
    <section className="px-5 py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <article className="overflow-hidden rounded-[1.8rem] border border-black/[.06] bg-white shadow-card">
          <div className="relative aspect-[4/3] overflow-hidden bg-allino-sand">
            <Image src={getDishImage(dish.slug)} alt={dish.dish} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover"/>
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.13em] text-allino-green backdrop-blur">{dish.partnerType}</span>
              <span className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.13em] ${dish.foodType==="Veg"?"bg-[#EAF4E2] text-[#2F6B3A]":"bg-[#FFF0EC] text-[#A84431]"}`}>{dish.foodType}</span>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div><p className="eyebrow">{dish.category}</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">{dish.dish}</h2><p className="mt-2 text-sm font-semibold text-stone-500">by {dish.maker}</p></div>
              <Rating value={dish.rating}/>
            </div>
            <p className="mt-6 max-w-3xl leading-8 text-stone-600">{dish.description}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-stone-500">
              <span className="inline-flex items-center gap-2"><MapPin size={16}/>{dish.location}</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={16}/>{dish.time}</span>
              <span className="inline-flex items-center gap-2"><UtensilsCrossed size={16}/>{dish.category}</span>
            </div>
            <div className="mt-7 flex flex-col gap-4 border-t border-black/[.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Price value={dish.price} size="lg"/>
              <Link href={`/menu?dish=${encodeURIComponent(dish.dish)}&maker=${encodeURIComponent(dish.maker)}`} className="inline-flex justify-center rounded-full bg-allino-coral px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-allino-ink">Order this dish</Link>
            </div>
          </div>
        </article>

        <aside className="space-y-5">
          <div className="rounded-[1.6rem] border border-black/[.06] bg-white p-6 shadow-soft sm:p-7">
            <p className="eyebrow">Partner profile</p>
            <div className="mt-5 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EDF5E8] text-allino-green">{dish.partnerType==="Restaurant"?<Store size={24}/>:<ChefHat size={24}/>}</span>
              <div><h3 className="font-sans text-xl font-extrabold">{dish.maker}</h3><p className="mt-1 text-sm font-semibold text-stone-500">{dish.ownerRole}</p></div>
            </div>
            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-[#F8F2EA] p-5"><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-stone-400">Owner / Partner</p><p className="mt-2 font-extrabold">{dish.ownerName}</p></div>
              <div className="rounded-2xl bg-[#EEF5EA] p-5"><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-stone-400">Specialty</p><p className="mt-2 font-extrabold">{dish.specialty}</p></div>
              <div className="rounded-2xl border border-black/[.06] p-5"><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-stone-400">Partner status</p><div className="mt-2 flex items-center gap-2 font-extrabold text-allino-green"><ShieldCheck size={17}/>{dish.partnerSince}</div></div>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-black/[.07] bg-[#F9F6F1] p-6">
            <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-stone-500"><EyeOff size={20}/></span><div><h3 className="font-sans font-extrabold">Contact details stay private</h3><p className="mt-2 text-sm leading-6 text-stone-500">Phone, email and exact address are not shown publicly. Customer communication and ordering continue through Allino for privacy and platform safety.</p></div></div>
          </div>

          <Link href="/dishes" className="inline-flex items-center gap-2 text-sm font-extrabold text-allino-green"><ArrowLeft size={17}/>Back to all dishes</Link>
        </aside>
      </div>
    </section>
  </PageShell>;
}
