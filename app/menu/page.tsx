import PageShell from "@/components/page-shell";
import CategoryCard from "@/components/marketplace/category-card";

const groups=[
{name:"Meals",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=82"},
{name:"Healthy",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=82"},
{name:"Indian",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=82"},
{name:"Tiffin",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=82"},
{name:"Desserts",image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=82"},
{name:"Breakfast",image:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=82"}
];

export default function Menu(){return <PageShell eyebrow="Explore food" title="Find something fresh for every craving." description="Browse Allino categories across restaurants and home kitchens.">
<section className="px-5 py-16 sm:py-20"><div className="mx-auto max-w-7xl"><div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">{groups.map(item=><CategoryCard key={item.name} {...item}/>)}</div></div></section>
</PageShell>}
