"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {
  ArrowRight,
  ChefHat,
  Clock3,
  Filter,
  Leaf,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import PageShell from "@/components/page-shell";
import FoodPhoto from "@/components/dishes/FoodPhoto";
import {MotionButton,MotionCard,MotionGrid,MotionSection} from "@/components/motion/PageMotion";

import {dishes,type FoodType} from "@/lib/dishes";

const categories=["All","Meals","Tiffin","Indian","Healthy","Breakfast","Desserts"];
const locations=["All","Bhopal","Raisen","Sehore"];

export default function DishesPage(){
  const [query,setQuery]=useState("");
  const [location,setLocation]=useState("All");
  const [foodType,setFoodType]=useState<"All"|FoodType>("All");
  const [category,setCategory]=useState("All");
  const [sort,setSort]=useState("Recommended");

  const filtered=useMemo(()=>{
    let list=dishes.filter(item=>{
      const q=query.trim().toLowerCase();
      const matchesQuery=!q || item.dish.toLowerCase().includes(q) || item.maker.toLowerCase().includes(q);
      const matchesLocation=location==="All" || item.location===location;
      const matchesType=foodType==="All" || item.foodType===foodType;
      const matchesCategory=category==="All" || item.category===category;
      return matchesQuery && matchesLocation && matchesType && matchesCategory;
    });

    if(sort==="Price: Low to High") list=[...list].sort((a,b)=>a.price-b.price);
    if(sort==="Price: High to Low") list=[...list].sort((a,b)=>b.price-a.price);
    if(sort==="Rating") list=[...list].sort((a,b)=>b.rating-a.rating);
    return list;
  },[query,location,foodType,category,sort]);

  return <PageShell
    eyebrow="Explore Local Food"
    title="Discover dishes from restaurants and home kitchens."
    description="Search by location, kitchen name or dish. Filter by Veg, Non-Veg and category, then order directly from the partner you like."
  >
    <MotionSection className="px-5 pb-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-allino-green/10 bg-white p-5 shadow-card md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.45fr_.75fr_.65fr_.75fr]">
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fafcf8] px-4">
            <Search size={18} className="text-allino-green"/>
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              className="w-full bg-transparent py-4 outline-none"
              placeholder="Search dish or partner name"
            />
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fafcf8] px-4">
            <MapPin size={18} className="text-allino-green"/>
            <select value={location} onChange={e=>setLocation(e.target.value)} className="w-full bg-transparent py-4 outline-none">
              {locations.map(x=><option key={x}>{x}</option>)}
            </select>
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fafcf8] px-4">
            <Leaf size={18} className="text-allino-green"/>
            <select value={foodType} onChange={e=>setFoodType(e.target.value as "All"|FoodType)} className="w-full bg-transparent py-4 outline-none">
              <option>All</option>
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fafcf8] px-4">
            <SlidersHorizontal size={18} className="text-allino-green"/>
            <select value={sort} onChange={e=>setSort(e.target.value)} className="w-full bg-transparent py-4 outline-none">
              <option>Recommended</option>
              <option>Rating</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map(x=>
            <button
              key={x}
              onClick={()=>setCategory(x)}
              className={"rounded-full px-4 py-2 text-sm font-black transition "+(category===x?"bg-allino-green text-white":"bg-[#f3f7f1] text-allino-green hover:bg-green-100")}
            >
              {x}
            </button>
          )}
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-5 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-allino-gold">Available Dishes</p>
            <h2 className="mt-1 text-3xl font-black">{filtered.length} dishes found</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Filter size={16}/> Filters update results instantly
          </div>
        </div>

        {filtered.length>0 ? (
          <MotionGrid className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item,i)=>
              <MotionCard key={item.slug} className="motion-food-card overflow-hidden rounded-[2rem] border border-allino-green/10 bg-white shadow-card">
                <div className={"relative grid h-56 place-items-center text-8xl "+(i%3===0?"bg-gradient-to-br from-[#eef8e8] to-[#fff8e8]":i%3===1?"bg-gradient-to-br from-[#fff7df] to-[#edf7e9]":"bg-gradient-to-br from-[#edf7e9] to-white")}>
                  {item.imageSet?.length ? <FoodPhoto index={item.imageSet[0]} className="absolute inset-0 h-full w-full"/> : <span className="motion-food-emoji">{item.emoji}</span>}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.13em] text-allino-green">{item.partnerType}</span>
                    <span className={"rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[.13em] "+(item.foodType==="Veg"?"bg-green-100 text-green-700":"bg-red-50 text-red-700")}>{item.foodType}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={"/dishes/"+item.slug} className="block"><h3 className="text-2xl font-black text-allino-ink hover:text-allino-green">{item.dish}</h3></Link>
                      <p className="mt-1 text-sm font-bold text-slate-500">by {item.maker}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-black text-allino-green">
                      <Star size={13} fill="currentColor"/>{item.rating}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5"><MapPin size={14}/>{item.location}</span>
                    <span className="flex items-center gap-1.5"><Clock3 size={14}/>{item.time}</span>
                    <span className="flex items-center gap-1.5"><UtensilsCrossed size={14}/>{item.category}</span>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-2xl font-black">₹{item.price}</p>
                      <p className="text-xs text-slate-400">per order</p>
                    </div>
                    <Link
                      href={"/dishes/"+item.slug}
                      className="rounded-xl bg-allino-green px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </MotionCard>
            )}
          </MotionGrid>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-dashed border-allino-green/20 bg-white p-12 text-center">
            <ChefHat className="mx-auto text-allino-green" size={34}/>
            <h3 className="mt-4 text-2xl font-black">No matching dishes found</h3>
            <p className="mt-2 text-slate-500">Try a different location, category or search term.</p>
          </div>
        )}
      </div>
    </MotionSection>

    <MotionSection className="px-5 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-gradient-to-r from-[#0B3D2E] to-[#15513d] p-8 text-white md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-allino-gold">Are you a food partner?</p>
            <h2 className="mt-3 text-3xl font-black">List your best dishes on Allino.</h2>
            <p className="mt-3 max-w-2xl text-white/65">Restaurants, home kitchens and local chefs can showcase dishes and reach more nearby customers.</p>
          </div>
          <Link href="/partner">
            <MotionButton className="flex items-center gap-2 rounded-xl bg-allino-gold px-6 py-4 font-black text-allino-ink">
              Become a Partner <ArrowRight size={18}/>
            </MotionButton>
          </Link>
        </div>
      </div>
    </MotionSection>
  </PageShell>;
}
