"use client";

import {usePathname} from "next/navigation";

type BackgroundVariant="auto"|"light"|"dark"|"crm";
type Intensity="subtle"|"soft";

type Props={
  variant?:BackgroundVariant;
  intensity?:Intensity;
  particles?:boolean;
  leaves?:boolean;
  parallax?:boolean;
};

export default function AnimatedBackground({variant="auto"}:Props){
  const pathname=usePathname();
  if(pathname==="/") return null;

  const resolved:Exclude<BackgroundVariant,"auto">=
    variant==="auto"
      ? pathname.startsWith("/crm")?"crm":pathname.startsWith("/partner/dashboard")?"dark":"light"
      : variant;
  const dark=resolved==="dark"||resolved==="crm";

  return <div
    aria-hidden
    className="pointer-events-none fixed inset-0 z-0"
    style={{
      background:dark
        ?"radial-gradient(circle at 14% 12%,rgba(111,174,61,.08),transparent 32%),radial-gradient(circle at 86% 18%,rgba(214,168,61,.06),transparent 30%),#06110d"
        :"radial-gradient(circle at 14% 12%,rgba(111,174,61,.11),transparent 32%),radial-gradient(circle at 86% 18%,rgba(214,168,61,.085),transparent 30%),#F7F1DF"
    }}
  />;
}
