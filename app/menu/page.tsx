import PageShell from "@/components/page-shell";
import {MotionGrid,MotionCard} from "@/components/motion/PageMotion";
const groups=[["Meals","🍱"],["Bowls","🥗"],["Indian","🍛"],["Snacks","🥙"],["Desserts","🍰"],["Drinks","🥤"]];
export default function Menu(){return <PageShell eyebrow="Explore Food" title="Find something fresh for every craving." description="Browse Allino categories across restaurants and home kitchens.">
<section className="px-5 py-20"><MotionGrid className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">{groups.map(([a,e])=><MotionCard key={a} className="motion-food-card rounded-3xl bg-white p-6 text-center shadow-card"><div className="text-6xl"><span className="motion-food-emoji">{e}</span></div><h2 className="mt-5 font-black">{a}</h2><p className="mt-1 text-xs text-slate-500">Explore dishes</p></MotionCard>)}</MotionGrid></section>
</PageShell>}