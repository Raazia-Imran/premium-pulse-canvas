import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, MoveUpRight, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Services", "/services"], ["Industries", "/industries"], ["Training", "/training"],
  ["Certifications", "/certifications"], ["About", "/about"],
] as const;

const supportNav = [["FAQ", "/faq"], ["Insights", "/insights"], ["Privacy", "/privacy"], ["Terms", "/terms"]] as const;

export function Brand() {
  return (
    <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "brand-active" }} className="group flex items-center gap-3 rounded-full" aria-label="HosH Integrity home">
      <span className="relative grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-brand">
        <span className="absolute inset-[5px] rounded-full border border-primary-foreground/40" />
        <span className="text-[11px] font-bold tracking-normal">H</span>
      </span>
      <span className="leading-none">
        <strong className="block font-display text-[19px] font-semibold tracking-normal">HosH</strong>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Integrity</span>
      </span>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-5">
        <div className="glass-shell mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:px-6">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {nav.map(([label, to]) => (
              <Link key={to} to={to} activeProps={{ className: "nav-link-active" }} className="nav-link">
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Start an enquiry <MoveUpRight /></Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="menu-toggle rounded-full lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            <span className="menu-icon">{open ? <X /> : <Menu />}</span>
          </Button>
        </div>
        {open && (
          <nav className="glass-shell mx-auto mt-2 flex max-w-[1440px] flex-col p-3 lg:hidden" aria-label="Mobile navigation">
             {nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} activeProps={{ className: "mobile-nav-active" }} className="mobile-nav-link">{label}<ChevronDown className="size-3 -rotate-90"/></Link>)}
             <Link to="/contact" onClick={() => setOpen(false)} activeProps={{ className: "mobile-nav-active" }} className="mobile-nav-link">Contact<ChevronDown className="size-3 -rotate-90"/></Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
       <footer className="site-footer">
         <div className="footer-cta"><div className="footer-beacon" aria-hidden="true"><span/><span/></div><div><p className="eyebrow text-accent">Independent assurance</p><h2>Keep critical assets<br/>working safely.</h2></div><Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/contact">Discuss your scope <MoveUpRight/></Link></Button></div>
         <div className="footer-grid">
           <div><Brand/><p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">Independent inspection, technical assurance, and training for assets that matter.</p></div>
           <div><div className="footer-label">Capabilities</div><div className="footer-links">{nav.slice(0,4).map(([l,t]) => <Link key={t} to={t}>{l}</Link>)}</div></div>
           <div><div className="footer-label">Company</div><div className="footer-links">{supportNav.map(([l,t]) => <Link key={t} to={t}>{l}</Link>)}</div></div>
           <div><div className="footer-label">Contact</div><a className="footer-contact" href="mailto:info@hoshint.com">info@hoshint.com</a><a className="footer-contact" href="https://www.hoshint.com">www.hoshint.com</a></div>
         </div>
        <div className="border-t border-ink-border px-6 py-5 text-center text-xs text-ink-muted">© {new Date().getFullYear()} HosH Integrity. All rights reserved.</div>
      </footer>
    </div>
  );
}