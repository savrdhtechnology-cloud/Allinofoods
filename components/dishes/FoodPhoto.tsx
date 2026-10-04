"use client";

type Props={
  index:number;
  className?:string;
  rounded?:string;
};

const pos=[
  ["0%","0%"],["50%","0%"],["100%","0%"],
  ["0%","50%"],["50%","50%"],["100%","50%"],
  ["0%","100%"],["50%","100%"],["100%","100%"],
];

export default function FoodPhoto({index,className="",rounded=""}:Props){
  const [x,y]=pos[index] ?? pos[0];
  return <div
    aria-hidden
    className={`bg-no-repeat ${rounded} ${className}`}
    style={{
      backgroundImage:"url('/food/food-gallery.webp')",
      backgroundSize:"300% 300%",
      backgroundPosition:`${x} ${y}`
    }}
  />;
}
