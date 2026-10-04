import PageShell from "@/components/page-shell";
const groups=[["Meals","🍱"],["Bowls","🥗"],["Indian","🍛"],["Snacks","🥙"],["Desserts","🍰"],["Drinks","🥤"]];
export default function Menu(){return <PageShell eyebrow="Explore Food" title="Find something fresh for every craving." description="Browse Allino categories across restaurants and home kitchens.">
<section className="px-5 py-20"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">{groups.map(([a,e])=><div key={a} className="rounded-3xl bg-white p-6 text-center shadow-card transition hover:-translate-y-2"><div className="text-6xl">{e}</div><h2 className="mt-5 font-black">{a}</h2><p className="mt-1 text-xs text-slate-500">Explore dishes</p></div>)}</div></section>
</PageShell>}