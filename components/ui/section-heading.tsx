import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function SectionHeading({eyebrow,title,description,href,linkLabel="View all"}:{eyebrow:string;title:string;description?:string;href?:string;linkLabel?:string}){
  return <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div className="max-w-4xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-[.98] tracking-[-.05em] text-allino-ink sm:text-5xl md:text-6xl">{title}</h2>
      {description?<p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">{description}</p>:null}
    </div>
    {href?<Link href={href} className="group inline-flex w-fit items-center gap-2 rounded-full border border-black/[.08] bg-white/65 px-4 py-2.5 text-sm font-extrabold text-allino-green transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm">{linkLabel}<ArrowRight size={16} className="transition group-hover:translate-x-1"/></Link>:null}
  </div>;
}
