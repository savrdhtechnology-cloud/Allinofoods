"use client";

import Image from "next/image";
import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {Clock3,MapPin,Plus} from "lucide-react";
import {getDishImage,type Dish} from "@/lib/dishes";
import Price from "@/components/ui/price";
import Rating from "@/components/ui/rating";

export default function FoodCard({dish,priority=false}:{dish:Dish;priority?:boolean}){
  const reduce=useReducedMotion();
  return <motion.article
    initial={reduce?false:{opacity:0,y:14}}
    whileInView={reduce?{}:{opacity:1,y:0}}
    viewport={{once:true,amount:.15}}
    transition={{duration:.38,ease:[.22,1,.36,1]}}
    className="food-card group overflow-hidden rounded-[1.4rem] border border-black/[.06] bg-white shadow-soft"
  >
    <Link href={`/dishes/${dish.slug}`} className="block focus-visible:outline-offset-[-3px]">
      <div className="relative aspect-[4/3] overflow-hidden bg-allino-sand">
        <Image src={getDishImage(dish.slug)} alt={dish.dish} fill priority={priority} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="food-card-image object-cover"/>
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-allino-green backdrop-blur">{dish.category}</span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] backdrop-blur ${dish.foodType==="Veg"?"bg-[#EAF4E2]/95 text-[#2F6B3A]":"bg-[#FFF0EC]/95 text-[#A84431]"}`}>{dish.foodType}</span>
        </div>
        <div className="absolute bottom-3 right-3"><Rating value={dish.rating} compact/></div>
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-[11px] font-bold uppercase tracking-[.12em] text-allino-coral">{dish.partnerType}</p>
        <h3 className="mt-1 line-clamp-1 text-lg font-semibold tracking-[-.02em] sm:text-xl">{dish.dish}</h3>
        <p className="mt-1 line-clamp-1 text-xs font-semibold text-stone-500 sm:text-sm">by {dish.maker}</p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-semibold text-stone-500 sm:text-xs">
          <span className="inline-flex items-center gap-1"><Clock3 size={13}/>{dish.time}</span>
          <span className="inline-flex items-center gap-1"><MapPin size={13}/>{dish.location}</span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-black/[.06] pt-4">
          <Price value={dish.price}/>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-allino-green text-white shadow-sm transition group-hover:bg-allino-coral" aria-hidden="true"><Plus size={18}/></span>
        </div>
      </div>
    </Link>
  </motion.article>;
}
