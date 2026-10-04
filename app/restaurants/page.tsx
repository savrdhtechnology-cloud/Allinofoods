import PageShell from "@/components/page-shell";
import RestaurantCard,{type RestaurantCardData} from "@/components/restaurant/restaurant-card";

const restaurants:RestaurantCardData[]=[
{name:"Green Bowl Kitchen",cuisine:"Healthy • Fresh • Bowls",rating:4.8,time:"25–30 min",location:"Bhopal",offer:"20% OFF",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82"},
{name:"Spice Route",cuisine:"Indian • Homestyle",rating:4.7,time:"30–35 min",location:"Bhopal",offer:"₹100 OFF",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=82"},
{name:"The Local Tandoor",cuisine:"North Indian • Grill",rating:4.9,time:"25–30 min",location:"Bhopal",image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=82"},
{name:"Urban Tiffin Co.",cuisine:"Daily Meals • Tiffin",rating:4.6,time:"30–40 min",location:"Bhopal",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=82"},
{name:"South Story",cuisine:"South Indian • Breakfast",rating:4.8,time:"20–30 min",location:"Bhopal",image:"https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=82"},
{name:"Sweet District",cuisine:"Desserts • Sweets",rating:4.7,time:"25–35 min",location:"Bhopal",image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=82"}
];

export default function Restaurants(){return <PageShell eyebrow="Restaurants" title="Great kitchens, one simple marketplace." description="Explore local restaurants by cuisine, rating and delivery experience.">
<section className="px-5 py-14 sm:py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{restaurants.map(item=><RestaurantCard key={item.name} item={item}/>)}</div></div></section>
</PageShell>}
