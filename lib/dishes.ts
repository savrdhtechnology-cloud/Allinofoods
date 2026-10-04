export type FoodType="Veg"|"Non-Veg";

export type Dish={
  slug:string;
  dish:string;
  maker:string;
  ownerName:string;
  ownerRole:string;
  partnerType:string;
  emoji:string;
  price:number;
  rating:number;
  time:string;
  location:string;
  foodType:FoodType;
  category:string;
  description:string;
  specialty:string;
  partnerSince:string;
};

export const dishes:Dish[]=[
  {slug:"homestyle-thali",dish:"Homestyle Thali",maker:"Seema's Home Kitchen",ownerName:"Seema Choudhary",ownerRole:"Home Chef & Kitchen Owner",partnerType:"Home Chef",emoji:"🍱",price:189,rating:4.9,time:"30 min",location:"Bhopal",foodType:"Veg",category:"Meals",description:"A comforting home-style meal prepared with simple flavours and a balanced everyday combination.",specialty:"Homestyle meals & everyday thali",partnerSince:"Allino Home Chef Partner"},
  {slug:"farm-fresh-power-bowl",dish:"Farm Fresh Power Bowl",maker:"Green Bowl Kitchen",ownerName:"Registered Allino Partner",ownerRole:"Restaurant Partner",partnerType:"Restaurant",emoji:"🥗",price:199,rating:4.8,time:"25 min",location:"Bhopal",foodType:"Veg",category:"Healthy",description:"A fresh bowl built around vegetables, greens and a light everyday meal format.",specialty:"Healthy bowls & fresh meals",partnerSince:"Allino Restaurant Partner"},
  {slug:"paneer-masala-meal",dish:"Paneer Masala Meal",maker:"Spice Route",ownerName:"Registered Allino Partner",ownerRole:"Restaurant Partner",partnerType:"Restaurant",emoji:"🍛",price:229,rating:4.7,time:"30 min",location:"Bhopal",foodType:"Veg",category:"Indian",description:"A rich Indian-style paneer meal designed for customers looking for a complete local comfort-food option.",specialty:"Indian meals & homestyle flavours",partnerSince:"Allino Restaurant Partner"},
  {slug:"ghar-ka-tiffin",dish:"Ghar Ka Tiffin",maker:"Annapurna Meals",ownerName:"Registered Allino Partner",ownerRole:"Home Kitchen Partner",partnerType:"Home Kitchen",emoji:"🥘",price:159,rating:4.8,time:"35 min",location:"Raisen",foodType:"Veg",category:"Tiffin",description:"A simple home-kitchen tiffin meal intended for everyday lunch or dinner needs.",specialty:"Daily tiffin & vegetarian meals",partnerSince:"Allino Home Kitchen Partner"},
  {slug:"chicken-curry-meal",dish:"Chicken Curry Meal",maker:"The Local Tandoor",ownerName:"Registered Allino Partner",ownerRole:"Restaurant Partner",partnerType:"Restaurant",emoji:"🍗",price:279,rating:4.9,time:"30 min",location:"Bhopal",foodType:"Non-Veg",category:"Indian",description:"A local-style chicken curry meal prepared for a hearty lunch or dinner experience.",specialty:"North Indian & non-veg meals",partnerSince:"Allino Restaurant Partner"},
  {slug:"egg-masala-tiffin",dish:"Egg Masala Tiffin",maker:"Daily Meal Box",ownerName:"Registered Allino Partner",ownerRole:"Home Kitchen Partner",partnerType:"Home Kitchen",emoji:"🍳",price:179,rating:4.6,time:"25 min",location:"Bhopal",foodType:"Non-Veg",category:"Tiffin",description:"A practical home-style tiffin built around egg masala and everyday meal accompaniments.",specialty:"Quick tiffin & home meals",partnerSince:"Allino Home Kitchen Partner"},
  {slug:"poha-breakfast-box",dish:"Poha Breakfast Box",maker:"Ghar Ka Nashta",ownerName:"Registered Allino Partner",ownerRole:"Home Chef Partner",partnerType:"Home Chef",emoji:"🥣",price:99,rating:4.7,time:"20 min",location:"Bhopal",foodType:"Veg",category:"Breakfast",description:"A light local breakfast box designed for a quick and familiar morning meal.",specialty:"Breakfast & local snacks",partnerSince:"Allino Home Chef Partner"},
  {slug:"homemade-gulab-jamun",dish:"Homemade Gulab Jamun",maker:"Sweet Home Kitchen",ownerName:"Registered Allino Partner",ownerRole:"Home Chef Partner",partnerType:"Home Chef",emoji:"🍮",price:129,rating:4.8,time:"25 min",location:"Sehore",foodType:"Veg",category:"Desserts",description:"A homemade dessert option prepared in small batches for local customers.",specialty:"Homemade sweets & desserts",partnerSince:"Allino Home Chef Partner"},
  {slug:"veg-pulao-combo",dish:"Veg Pulao Combo",maker:"Annapurna Meals",ownerName:"Registered Allino Partner",ownerRole:"Home Kitchen Partner",partnerType:"Home Kitchen",emoji:"🍚",price:169,rating:4.7,time:"30 min",location:"Raisen",foodType:"Veg",category:"Meals",description:"A home-kitchen veg pulao combo prepared as a convenient complete meal.",specialty:"Daily tiffin & vegetarian meals",partnerSince:"Allino Home Kitchen Partner"},
  {slug:"butter-chicken-combo",dish:"Butter Chicken Combo",maker:"The Local Tandoor",ownerName:"Registered Allino Partner",ownerRole:"Restaurant Partner",partnerType:"Restaurant",emoji:"🍗",price:329,rating:4.9,time:"35 min",location:"Bhopal",foodType:"Non-Veg",category:"Indian",description:"A restaurant-style butter chicken combo for customers looking for a richer meal option.",specialty:"North Indian & non-veg meals",partnerSince:"Allino Restaurant Partner"},
  {slug:"millet-healthy-bowl",dish:"Millet Healthy Bowl",maker:"Green Bowl Kitchen",ownerName:"Registered Allino Partner",ownerRole:"Restaurant Partner",partnerType:"Restaurant",emoji:"🥗",price:219,rating:4.8,time:"25 min",location:"Bhopal",foodType:"Veg",category:"Healthy",description:"A millet-based healthy bowl designed for a lighter meal with fresh ingredients.",specialty:"Healthy bowls & fresh meals",partnerSince:"Allino Restaurant Partner"},
  {slug:"home-style-dal-rice",dish:"Home Style Dal Rice",maker:"Seema's Home Kitchen",ownerName:"Seema Choudhary",ownerRole:"Home Chef & Kitchen Owner",partnerType:"Home Chef",emoji:"🍲",price:149,rating:4.9,time:"30 min",location:"Bhopal",foodType:"Veg",category:"Meals",description:"A familiar dal-rice meal prepared in a simple home-style format.",specialty:"Homestyle meals & everyday thali",partnerSince:"Allino Home Chef Partner"},
];

export function getDishBySlug(slug:string){
  return dishes.find(d=>d.slug===slug);
}


const dishImages:Record<string,string>={
  "homestyle-thali":"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  "farm-fresh-power-bowl":"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
  "paneer-masala-meal":"https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=85",
  "ghar-ka-tiffin":"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
  "chicken-curry-meal":"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85",
  "egg-masala-tiffin":"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=85",
  "poha-breakfast-box":"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  "homemade-gulab-jamun":"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=85",
  "veg-pulao-combo":"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=85",
  "butter-chicken-combo":"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85",
  "millet-healthy-bowl":"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  "home-style-dal-rice":"https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85"
};

export function getDishImage(slug:string){
  return dishImages[slug] ?? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85";
}
