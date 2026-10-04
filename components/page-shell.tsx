import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function PageShell({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children:React.ReactNode}){
  return <main className="min-h-screen bg-allino-cream text-allino-ink">
    <SiteHeader/>
    <section className="relative overflow-hidden border-b border-black/[.06] bg-[#F9EFE1] px-5 py-16 sm:py-20">
      <div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-allino-coral/10 blur-3xl"/>
      <div aria-hidden="true" className="absolute -bottom-32 left-[12%] h-72 w-72 rounded-full bg-allino-green/10 blur-3xl"/>
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-[-.04em] sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">{description}</p>
      </div>
    </section>
    {children}
    <SiteFooter/>
  </main>;
}
