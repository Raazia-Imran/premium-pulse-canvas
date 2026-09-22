import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, MoveUpRight, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/hosh-integrity-logo.png.asset.json";

const nav = [
  ["Services", "/services"], ["Industries", "/industries"], ["Training", "/training"],
  ["Certifications", "/certifications"], ["About", "/about"],
] as const;

const supportNav = [["FAQ", "/faq"], ["Insights", "/insights"], ["Privacy", "/privacy"], ["Terms", "/terms"]] as const;

export function Brand() {
  const isHome = useRouterState({ select: (state) => state.location.pathname === "/" });
  return (
    <Link to="/" className={`group flex items-center gap-3 rounded-full${isHome ? " brand-active" : ""}`} aria-label="HosH Integrity home">
      <img src={logoAsset.url} alt="HosH Integrity — We Prevent Failure" className="brand-logo" />
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
         <div className="footer-cta"><div className="footer-scan" aria-hidden="true"><span/><span/><span/></div><div><p className="eyebrow text-accent">Higher reliability. Lower operating risk.</p><h2>We Prevent<br/>Failure.</h2><p className="footer-cta-copy">Inspection, quality, safety, and training expertise for the integrity of industrial assets.</p></div><Button asChild size="lg" className="rounded-full"><Link to="/contact">Discuss your scope <MoveUpRight/></Link></Button></div>
         <div className="footer-grid">
           <div><Brand/><p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">Independent inspection, technical assurance, and training for assets that matter.</p></div>
           <div><div className="footer-label">Capabilities</div><div className="footer-links">{nav.slice(0,4).map(([l,t]) => <Link key={t} to={t}>{l}</Link>)}</div></div>
           <div><div className="footer-label">Company</div><div className="footer-links">{supportNav.map(([l,t]) => <Link key={t} to={t}>{l}</Link>)}</div></div>
            <div><div className="footer-label">Contact</div><a className="footer-contact" href="mailto:info@hoshint.com">info@hoshint.com</a><a className="footer-contact" href="https://www.hoshint.com">www.hoshint.com</a><p className="missing-info mt-4">Missing client information: phone and office address</p></div>
         </div>
        <div className="border-t border-ink-border px-6 py-5 text-center text-xs text-ink-muted">© {new Date().getFullYear()} HosH Integrity. All rights reserved.</div>
      </footer>
    </div>
  );
}