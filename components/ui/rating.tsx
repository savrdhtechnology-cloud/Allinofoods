import {Star} from "lucide-react";

export default function Rating({value,count,compact=false}:{value:number;count?:number;compact?:boolean}){
  return <span className={`inline-flex items-center gap-1.5 rounded-full bg-[#F3F7F0] font-extrabold text-allino-green ${compact?"px-2.5 py-1 text-xs":"px-3 py-1.5 text-sm"}`} aria-label={`Rated ${value} out of 5`}>
    <Star size={compact?12:14} fill="currentColor" aria-hidden="true"/>
    {value.toFixed(1)}
    {count?<span className="font-semibold text-stone-400">({count})</span>:null}
  </span>;
}
