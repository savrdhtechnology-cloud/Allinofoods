import PageShell from "@/components/page-shell";
import {Mail,MessageCircle,Store} from "lucide-react";

export default function Contact(){return <PageShell eyebrow="Contact Allino" title="We are here to help." description="Customer support, partner onboarding or a business enquiry — reach the right Allino team from one place.">
<section className="px-5 py-14 sm:py-20"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
  <div className="rounded-[1.8rem] bg-allino-green p-7 text-white sm:p-9">
    <p className="eyebrow !text-allino-gold">Allino Foods</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.03em]">Support for every side of the marketplace.</h2>
    <div className="mt-8 space-y-4">
      <div className="flex gap-3 rounded-2xl bg-white/[.07] p-4"><MessageCircle className="shrink-0 text-allino-gold" size={20}/><div><p className="font-extrabold">Customer support</p><p className="mt-1 text-sm text-white/60">Orders, food discovery and account questions.</p></div></div>
      <div className="flex gap-3 rounded-2xl bg-white/[.07] p-4"><Store className="shrink-0 text-allino-gold" size={20}/><div><p className="font-extrabold">Partner support</p><p className="mt-1 text-sm text-white/60">Restaurants, home chefs and onboarding.</p></div></div>
      <div className="flex gap-3 rounded-2xl bg-white/[.07] p-4"><Mail className="shrink-0 text-allino-gold" size={20}/><div><p className="font-extrabold">Business enquiries</p><p className="mt-1 text-sm text-white/60">Marketplace and collaboration conversations.</p></div></div>
    </div>
  </div>
  <div className="motion-form-card rounded-[1.8rem] border border-black/[.06] bg-white p-7 shadow-soft sm:p-9">
    <p className="eyebrow">Send a message</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.03em]">Tell us how we can help.</h2>
    <form className="mt-7 grid gap-4"><label className="grid gap-2 text-sm font-bold">Your name<input className="rounded-xl border border-black/[.10] p-4" placeholder="Enter your name"/></label><label className="grid gap-2 text-sm font-bold">Email or mobile<input className="rounded-xl border border-black/[.10] p-4" placeholder="How can we reach you?"/></label><label className="grid gap-2 text-sm font-bold">Enquiry type<select className="rounded-xl border border-black/[.10] p-4"><option>Customer Support</option><option>Partner Enquiry</option><option>Business Enquiry</option></select></label><label className="grid gap-2 text-sm font-bold">Message<textarea className="min-h-36 rounded-xl border border-black/[.10] p-4" placeholder="Tell us what you need help with"/></label><button className="rounded-full bg-allino-coral p-4 font-extrabold text-white transition hover:bg-allino-ink">Send message</button></form>
  </div>
</div></section></PageShell>}
