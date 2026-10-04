"use client";

import {FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import {MapPin,Search} from "lucide-react";

export default function SearchBar({compact=false}:{compact?:boolean}){
  const [query,setQuery]=useState("");
  const router=useRouter();
  function submit(e:FormEvent){
    e.preventDefault();
    const q=query.trim();
    router.push(q?`/dishes?q=${encodeURIComponent(q)}`:"/dishes");
  }
  return <form onSubmit={submit} role="search" className={`flex w-full items-center gap-2 rounded-2xl border border-black/[.08] bg-white p-2 shadow-soft ${compact?"max-w-xl":"max-w-2xl"}`}>
    <div className="hidden items-center gap-2 border-r border-black/[.07] px-3 text-xs font-extrabold text-allino-green sm:flex"><MapPin size={16}/><span>Bhopal</span></div>
    <label className="flex min-w-0 flex-1 items-center gap-2 px-2">
      <Search size={18} className="shrink-0 text-stone-400"/>
      <span className="sr-only">Search food, restaurants or home chefs</span>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search food, restaurants or home chefs" className="min-w-0 flex-1 bg-transparent py-2 text-sm font-semibold outline-none placeholder:text-stone-400 sm:text-base"/>
    </label>
    <button type="submit" className="shrink-0 rounded-xl bg-allino-coral px-4 py-3 text-sm font-extrabold text-white transition hover:bg-allino-ink sm:px-5">Search</button>
  </form>;
}
