import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function SectionHeading({eyebrow,title,description,href,linkLabel="View all"}:{eyebrow:string;title:string;description?:string;href?:string;linkLabel?:string}){
  return <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-.035em] text-allino-ink sm:text-4xl md:text-5xl">{title}</h2>
      {description?<p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">{description}</p>:null}
    </div>
    {href?<Link href={href} className="inline-flex w-fit items-center gap-2 text-sm font-extrabold text-allino-green transition hover:gap-3">{linkLabel}<ArrowRight size={17}/></Link>:null}
  </div>;
}
