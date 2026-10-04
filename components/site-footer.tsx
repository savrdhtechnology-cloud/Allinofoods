import Link from "next/link";
import {ChefHat,Instagram,Mail,MapPin} from "lucide-react";

const groups=[
  {title:"Discover",links:[["Dishes","/dishes"],["Restaurants","/restaurants"],["Home Chefs","/home-chefs"],["Menu","/menu"]]},
  {title:"Allino",links:[["About","/about"],["How it works","/how-it-works"],["Partner with us","/partner"],["Contact","/contact"]]},
  {title:"Account",links:[["Customer","/customer"],["Login","/login"],["Register","/register"],["CRM","/crm"]]}
] as const;

export default function SiteFooter(){
  return <footer className="bg-[#201B17] px-5 pb-24 pt-16 text-white md:pb-10">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-allino-coral"><ChefHat size={21}/></span><span className="text-xl font-extrabold">Allino Foods</span></Link>
          <p className="mt-5 text-2xl font-medium leading-snug text-white/90">Discover great food. From Allino, restaurants & home chefs.</p>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/55"><span className="inline-flex items-center gap-2"><MapPin size={15}/>India</span><span className="inline-flex items-center gap-2"><Mail size={15}/>Support</span></div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map(group=><div key={group.title}><h3 className="font-sans text-xs font-extrabold uppercase tracking-[.18em] text-allino-gold">{group.title}</h3><div className="mt-5 space-y-3">{group.links.map(([label,href])=><Link key={href} href={href} className="block text-sm font-semibold text-white/60 transition hover:text-white">{label}</Link>)}</div></div>)}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Allino Foods. Fresh food, local talent.</span>
        <span className="inline-flex items-center gap-2"><Instagram size={14}/>Built for local food discovery</span>
      </div>
    </div>
  </footer>;
}
