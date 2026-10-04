import Link from "next/link";
import {ChefHat,Mail,MapPin,Phone} from "lucide-react";

export default function SiteFooter(){
  return <footer className="bg-[#071712] px-5 py-14 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
      <div><div className="flex items-center gap-3 font-black"><span className="grid h-10 w-10 place-items-center rounded-xl bg-allino-gold text-allino-ink"><ChefHat size={20}/></span>ALLINO FOODS & RESTAURANTS</div><p className="mt-4 text-sm leading-6 text-white/55">Fresh Food. Local Kitchens. One Platform.</p><p className="mt-5 text-sm font-semibold text-allino-gold">Owner: Seema Choudhary</p></div>
      <div><h3 className="font-black">Explore</h3><div className="mt-4 space-y-3 text-sm text-white/55"><Link className="block hover:text-white" href="/restaurants">Restaurants</Link><Link className="block hover:text-white" href="/home-chefs">Home Chefs</Link><Link className="block hover:text-white" href="/menu">Food & Menu</Link><Link className="block hover:text-white" href="/how-it-works">How It Works</Link></div></div>
      <div><h3 className="font-black">Company</h3><div className="mt-4 space-y-3 text-sm text-white/55"><Link className="block hover:text-white" href="/about">About Us</Link><Link className="block hover:text-white" href="/partner">Sell With Allino</Link><Link className="block hover:text-white" href="/contact">Contact</Link><Link className="block hover:text-white" href="/login">Login</Link></div></div>
      <div><h3 className="font-black">Connect</h3><div className="mt-4 space-y-3 text-sm text-white/55"><p className="flex gap-2"><Mail size={16}/> Contact through our enquiry page</p><p className="flex gap-2"><Phone size={16}/> Customer & partner support</p><p className="flex gap-2"><MapPin size={16}/> India</p></div></div>
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row"><span>© 2026 ALLINO FOODS & RESTAURANTS</span><span>Owned by Seema Choudhary</span></div>
  </footer>
}