export default function Price({value,oldPrice,size="md"}:{value:number;oldPrice?:number;size?:"sm"|"md"|"lg"}){
  const cls=size==="lg"?"text-2xl":size==="sm"?"text-base":"text-xl";
  return <div className="flex items-baseline gap-2">
    <span className={`${cls} font-extrabold tracking-tight text-allino-ink`}>₹{value}</span>
    {oldPrice?<span className="text-sm font-semibold text-stone-400 line-through">₹{oldPrice}</span>:null}
  </div>;
}
