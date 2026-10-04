import PageShell from "@/components/page-shell";
import ChefCard,{type ChefCardData} from "@/components/chef/chef-card";

const chefs:ChefCardData[]=[
{name:"Seema's Home Kitchen",specialty:"Homestyle meals & thali",rating:4.9,location:"Bhopal",dishes:8,image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=82"},
{name:"Annapurna Meals",specialty:"Vegetarian tiffin",rating:4.8,location:"Raisen",dishes:6,image:"https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=900&q=82"},
{name:"Sweet Home Kitchen",specialty:"Homemade desserts",rating:4.8,location:"Sehore",dishes:5,image:"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=82"},
{name:"Ghar Ka Nashta",specialty:"Breakfast & local snacks",rating:4.7,location:"Bhopal",dishes:7,image:"https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=82"},
{name:"Daily Meal Box",specialty:"Quick tiffin & meals",rating:4.6,location:"Bhopal",dishes:9,image:"https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=82"},
{name:"Home Spice Kitchen",specialty:"Indian comfort food",rating:4.8,location:"Bhopal",dishes:6,image:"https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=82"}
];

export default function HomeChefs(){return <PageShell eyebrow="Home chefs" title="Homestyle food from talented local chefs." description="Discover small-batch meals made by local home chefs and neighborhood kitchens.">
<section className="px-5 py-14 sm:py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{chefs.map(chef=><ChefCard key={chef.name} chef={chef}/>)}</div></div></section>
</PageShell>}
