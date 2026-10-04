import Image from "next/image";
import Link from "next/link";
import {Clock3,MapPin} from "lucide-react";
import Rating from "@/components/ui/rating";

export type RestaurantCardData={name:string;cuisine:string;rating:number;time:string;location:string;image:string;offer?:string};

export default function RestaurantCard({item}:{item:RestaurantCardData}){
  return <article className="food-card group overflow-hidden rounded-[1.75rem] border border-black/[.07] bg-[#FFFDF8] shadow-[0_16px_50px_rgba(47,34,24,.08)]">
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="food-card-image object-cover"/>
      {item.offer?<span className="absolute left-3 top-3 rounded-full bg-allino-coral px-3 py-1.5 text-xs font-extrabold text-white">{item.offer}</span>:null}
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div><h3 className="font-display text-[1.55rem] font-semibold leading-tight tracking-[-.04em]">{item.name}</h3><p className="mt-1 text-sm text-stone-500">{item.cuisine}</p></div>
        <Rating value={item.rating} compact/>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-stone-500"><span className="inline-flex items-center gap-1.5"><Clock3 size={14}/>{item.time}</span><span className="inline-flex items-center gap-1.5"><MapPin size={14}/>{item.location}</span></div>
      <Link href={`/dishes?partner=${encodeURIComponent(item.name)}`} className="mt-5 inline-flex rounded-full bg-[#EEE4D8] px-4 py-2.5 text-sm font-extrabold text-allino-ink transition hover:-translate-y-0.5 hover:bg-allino-green hover:text-white">View menu</Link>
    </div>
  </article>;
}
