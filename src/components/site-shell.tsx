import { Link } from "@tanstack/react-router";
import { Menu, MoveUpRight, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Services", "/services"], ["Industries", "/industries"], ["Training", "/training"],
  ["Certifications", "/certifications"], ["About", "/about"],
] as const;

export function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="HosH Integrity home">
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
              <Link key={to} to={to} activeProps={{ className: "text-foreground" }} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Start an enquiry <MoveUpRight /></Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav className="glass-shell mx-auto mt-2 flex max-w-[1440px] flex-col p-3 lg:hidden" aria-label="Mobile navigation">
            {nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium hover:bg-secondary">{label}</Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">Start an enquiry</Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 lg:px-16">
          <div><div className="text-3xl font-semibold">We prevent failure.</div><p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">Independent inspection, technical assurance, and training for assets that matter.</p></div>
          <div><div className="footer-label">Explore</div><div className="mt-4 grid gap-2">{nav.slice(0,4).map(([l,t]) => <Link key={t} to={t} className="text-sm text-ink-muted hover:text-ink-foreground">{l}</Link>)}</div></div>
          <div><div className="footer-label">Contact</div><a className="mt-4 block text-sm text-ink-muted hover:text-ink-foreground" href="mailto:info@hoshint.com">info@hoshint.com</a><a className="mt-2 block text-sm text-ink-muted hover:text-ink-foreground" href="https://www.hoshint.com">www.hoshint.com</a></div>
        </div>
        <div className="border-t border-ink-border px-6 py-5 text-center text-xs text-ink-muted">© {new Date().getFullYear()} HosH Integrity. All rights reserved.</div>
      </footer>
    </div>
  );
}