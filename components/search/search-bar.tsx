"use client";

import {FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import {MapPin,Search} from "lucide-react";

export default function SearchBar({compact=false,variant="default"}:{compact?:boolean;variant?:"default"|"hero"}){
  const [query,setQuery]=useState("");
  const [location,setLocation]=useState("Bhopal");
  const router=useRouter();

  function submit(e:FormEvent){
    e.preventDefault();
    const params=new URLSearchParams();
    const q=query.trim();
    if(q) params.set("q",q);
    if(location && location!=="All") params.set("location",location);
    const suffix=params.toString();
    router.push(suffix?`/dishes?${suffix}`:"/dishes");
  }

  if(variant==="hero"){
    return <form onSubmit={submit} role="search" className="grid w-full gap-2.5 rounded-[1.45rem] border border-black/[.07] bg-white/82 p-2.5 shadow-[0_18px_55px_rgba(54,38,26,.10)] backdrop-blur-xl sm:grid-cols-[170px_1fr_auto] sm:items-center sm:gap-0 sm:rounded-[1.5rem]">
      <label className="flex min-w-0 items-center gap-2 rounded-xl bg-[#FFF8EC] px-3.5 sm:rounded-none sm:border-r sm:border-black/[.07] sm:bg-transparent">
        <MapPin size={16} className="shrink-0 text-[#E7654B]"/>
        <span className="sr-only">Location</span>
        <select value={location} onChange={e=>setLocation(e.target.value)} className="min-w-0 w-full bg-transparent py-3 text-sm font-extrabold text-[#0B3D2E] outline-none">
          <option>Bhopal</option>
          <option>Raisen</option>
          <option>Sehore</option>
        </select>
      </label>

      <label className="flex min-w-0 items-center gap-2 rounded-xl bg-[#FFF8EC] px-3.5 sm:rounded-none sm:bg-transparent sm:px-4">
        <Search size={17} className="shrink-0 text-stone-400"/>
        <span className="sr-only">Search food, restaurants or home chefs</span>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search food, restaurants or home chefs" className="min-w-0 flex-1 bg-transparent py-3 text-sm font-semibold text-[#191714] outline-none placeholder:text-stone-400 sm:text-[15px]"/>
      </label>

      <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E7654B] px-5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(231,101,75,.20)] transition hover:-translate-y-0.5 hover:bg-[#191714]">
        <Search size={16}/>Search
      </button>
    </form>;
  }

  return <form onSubmit={submit} role="search" className={`flex w-full items-center gap-2 rounded-2xl border border-black/[.08] bg-white p-2 shadow-soft ${compact?"max-w-xl":"max-w-2xl"}`}>
    <label className="hidden items-center gap-2 border-r border-black/[.07] px-3 text-xs font-extrabold text-allino-green sm:flex">
      <MapPin size={16}/>
      <span className="sr-only">Location</span>
      <select value={location} onChange={e=>setLocation(e.target.value)} className="bg-transparent outline-none"><option>Bhopal</option><option>Raisen</option><option>Sehore</option></select>
    </label>
    <label className="flex min-w-0 flex-1 items-center gap-2 px-2">
      <Search size={18} className="shrink-0 text-stone-400"/>
      <span className="sr-only">Search food, restaurants or home chefs</span>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search food, restaurants or home chefs" className="min-w-0 flex-1 bg-transparent py-2 text-sm font-semibold outline-none placeholder:text-stone-400 sm:text-base"/>
    </label>
    <button type="submit" className="shrink-0 rounded-xl bg-allino-coral px-4 py-3 text-sm font-extrabold text-white transition hover:bg-allino-ink sm:px-5">Search</button>
  </form>;
}
