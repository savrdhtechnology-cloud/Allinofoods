import Image from "next/image";
import Link from "next/link";
import {BadgeCheck,MapPin} from "lucide-react";
import Rating from "@/components/ui/rating";

export type ChefCardData={name:string;specialty:string;rating:number;location:string;image:string;dishes:number};

export default function ChefCard({chef}:{chef:ChefCardData}){
  return <article className="food-card group overflow-hidden rounded-[1.75rem] border border-black/[.07] bg-[#FFFDF8] shadow-[0_16px_50px_rgba(47,34,24,.08)]">
    <div className="relative aspect-[4/3] overflow-hidden bg-allino-sand">
      <Image src={chef.image} alt={chef.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="food-card-image object-cover"/>
      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-allino-green backdrop-blur"><BadgeCheck size={14}/>Verified chef</span>
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between gap-3"><div><h3 className="font-display text-[1.55rem] font-semibold leading-tight tracking-[-.04em]">{chef.name}</h3><p className="mt-1 text-sm text-stone-500">{chef.specialty}</p></div><Rating value={chef.rating} compact/></div>
      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-stone-500"><span className="inline-flex items-center gap-1.5"><MapPin size={14}/>{chef.location}</span><span>{chef.dishes} dishes</span></div>
      <Link href={`/dishes?partner=${encodeURIComponent(chef.name)}`} className="mt-5 inline-flex rounded-full bg-allino-green px-4 py-2.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-allino-coral">Explore dishes</Link>
    </div>
  </article>;
}
