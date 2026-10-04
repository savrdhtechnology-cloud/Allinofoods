import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function PageShell({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children:React.ReactNode}){
  return <main className="min-h-screen bg-allino-cream text-allino-ink">
    <SiteHeader/>
    <section className="premium-noise hero-grid relative overflow-hidden border-b border-white/5 bg-[#173D2F] px-5 py-20 text-white sm:py-24">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#D85F36]/20 blur-[110px]"/>
      <div aria-hidden="true" className="absolute -bottom-32 left-[8%] h-80 w-80 rounded-full bg-[#D8A33C]/15 blur-[120px]"/>
      <div aria-hidden="true" className="hero-ring absolute -right-12 top-8 hidden h-72 w-72 rounded-full md:block"/>
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow !text-[#F0C56E]">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-balance font-display text-5xl font-semibold leading-[.92] tracking-[-.055em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">{description}</p>
      </div>
    </section>
    {children}
    <SiteFooter/>
  </main>;
}
