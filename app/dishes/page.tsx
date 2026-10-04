"use client";

import {Suspense,useMemo,useState} from "react";
import {useSearchParams} from "next/navigation";
import {Filter,Leaf,MapPin,Search,SlidersHorizontal} from "lucide-react";
import PageShell from "@/components/page-shell";
import FoodCard from "@/components/food/food-card";
import {dishes,type FoodType} from "@/lib/dishes";

const categories=["All","Meals","Tiffin","Indian","Healthy","Breakfast","Desserts"];
const locations=["All","Bhopal","Raisen","Sehore"];

function DishesContent(){
  const params=useSearchParams();
  const [query,setQuery]=useState(params.get("q") ?? "");
  const [location,setLocation]=useState(params.get("location") ?? "All");
  const [foodType,setFoodType]=useState<"All"|FoodType>("All");
  const [category,setCategory]=useState(params.get("category") ?? "All");
  const [sort,setSort]=useState("Recommended");
  const partner=params.get("partner") ?? "";

  const filtered=useMemo(()=>{
    let list=dishes.filter(item=>{
      const q=query.trim().toLowerCase();
      const matchesQuery=!q || item.dish.toLowerCase().includes(q) || item.maker.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
      const matchesPartner=!partner || item.maker.toLowerCase().includes(partner.toLowerCase());
      const matchesLocation=location==="All" || item.location===location;
      const matchesType=foodType==="All" || item.foodType===foodType;
      const matchesCategory=category==="All" || item.category===category;
      return matchesQuery && matchesPartner && matchesLocation && matchesType && matchesCategory;
    });
    if(sort==="Price: Low to High") list=[...list].sort((a,b)=>a.price-b.price);
    if(sort==="Price: High to Low") list=[...list].sort((a,b)=>b.price-a.price);
    if(sort==="Rating") list=[...list].sort((a,b)=>b.rating-a.rating);
    return list;
  },[query,location,foodType,category,sort,partner]);

  return <>
    <section className="sticky top-[72px] z-40 border-b border-black/[.06] bg-allino-cream/95 px-5 py-4 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-3 lg:grid-cols-[1.5fr_.75fr_.65fr_.8fr]">
          <label className="flex items-center gap-3 rounded-xl border border-black/[.08] bg-white px-4">
            <Search size={18} className="text-allino-coral"/>
            <span className="sr-only">Search dishes or partner name</span>
            <input value={query} onChange={e=>setQuery(e.target.value)} className="w-full bg-transparent py-3.5 text-sm font-semibold outline-none" placeholder="Search dish, cuisine or kitchen"/>
          </label>
          <label className="hidden items-center gap-3 rounded-xl border border-black/[.08] bg-white px-4 sm:flex">
            <MapPin size={17} className="text-allino-green"/>
            <span className="sr-only">Location</span>
            <select value={location} onChange={e=>setLocation(e.target.value)} className="w-full bg-transparent py-3.5 text-sm font-semibold outline-none">{locations.map(x=><option key={x}>{x}</option>)}</select>
          </label>
          <label className="hidden items-center gap-3 rounded-xl border border-black/[.08] bg-white px-4 sm:flex">
            <Leaf size={17} className="text-allino-green"/>
            <span className="sr-only">Food type</span>
            <select value={foodType} onChange={e=>setFoodType(e.target.value as "All"|FoodType)} className="w-full bg-transparent py-3.5 text-sm font-semibold outline-none"><option>All</option><option>Veg</option><option>Non-Veg</option></select>
          </label>
          <label className="hidden items-center gap-3 rounded-xl border border-black/[.08] bg-white px-4 md:flex">
            <SlidersHorizontal size={17} className="text-allino-green"/>
            <span className="sr-only">Sort dishes</span>
            <select value={sort} onChange={e=>setSort(e.target.value)} className="w-full bg-transparent py-3.5 text-sm font-semibold outline-none"><option>Recommended</option><option>Rating</option><option>Price: Low to High</option><option>Price: High to Low</option></select>
          </label>
        </div>
        <div className="hide-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          {categories.map(x=><button key={x} onClick={()=>setCategory(x)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-extrabold transition ${category===x?"bg-allino-ink text-white":"border border-black/[.07] bg-white text-stone-600 hover:border-allino-coral/30"}`}>{x}</button>)}
        </div>
      </div>
    </section>

    <section className="px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="eyebrow">Available now</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">{filtered.length} dishes found</h2>{partner?<p className="mt-2 text-sm font-semibold text-stone-500">Showing dishes from {partner}</p>:null}</div>
          <p className="inline-flex items-center gap-2 text-xs font-bold text-stone-500"><Filter size={15}/>Filters update instantly</p>
        </div>

        {filtered.length?(
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((dish,i)=><FoodCard key={dish.slug} dish={dish} priority={i<2}/>)}
          </div>
        ):(
          <div className="mt-8 rounded-[1.6rem] border border-dashed border-black/[.12] bg-white p-12 text-center">
            <Search className="mx-auto text-allino-coral" size={30}/>
            <h3 className="mt-4 text-2xl font-semibold">No matching dishes yet</h3>
            <p className="mt-2 text-sm text-stone-500">Try another search, location or category.</p>
          </div>
        )}
      </div>
    </section>
  </>;
}

export default function DishesPage(){
  return <PageShell eyebrow="Explore food" title="Find something delicious, nearby." description="Search dishes from Allino Foods, restaurants and home chefs. Compare price, rating and delivery information before you choose.">
    <Suspense fallback={<div className="mx-auto max-w-7xl px-5 py-20 text-sm font-bold text-stone-500">Loading food marketplace…</div>}><DishesContent/></Suspense>
  </PageShell>;
}
