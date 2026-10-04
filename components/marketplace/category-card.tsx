import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({name,image}:{name:string;image:string}){
  return <Link href={`/dishes?category=${encodeURIComponent(name)}`} className="group block min-w-[132px] sm:min-w-0">
    <div className="relative mx-auto aspect-square w-full max-w-[170px] overflow-hidden rounded-full border-4 border-white bg-allino-sand shadow-soft">
      <Image src={image} alt="" fill sizes="170px" className="food-card-image object-cover" aria-hidden="true"/>
    </div>
    <p className="mt-3 text-center text-sm font-extrabold text-allino-ink transition group-hover:text-allino-coral">{name}</p>
  </Link>;
}
