import { ADDRESS, BRAND, HOURS, NAV, PHONE_DISPLAY, PHONE_HREF } from "./data";

const Footer = () => (
  <footer className="bg-secondary px-5 pb-8 pt-16 text-secondary-foreground md:px-[122px]">
    <div className="grid gap-10 md:grid-cols-3">
      <div>
        <div className="font-head text-3xl font-semibold uppercase">{BRAND}</div>
        <p className="mt-3 max-w-xs text-sm text-secondary-foreground/70">Шиномонтаж, мойка, антикор, полировка и химчистка в Кемерово. Уютный зал ожидания.</p>
      </div>
      <nav className="flex flex-col gap-2 text-sm">
        {NAV.map((n) => (
          <a key={n.href} href={n.href} className="story-link self-start">
            {n.label}
          </a>
        ))}
      </nav>
      <div className="space-y-2 text-sm">
        <a href={PHONE_HREF} className="block font-head text-2xl font-semibold">
          {PHONE_DISPLAY}
        </a>
        <p className="text-secondary-foreground/70">{ADDRESS}</p>
        <p className="text-secondary-foreground/70">{HOURS}</p>
      </div>
    </div>
    <div className="mt-14 flex flex-col justify-between gap-2 border-t border-secondary-foreground/15 pt-6 text-xs text-secondary-foreground/50 sm:flex-row">
      <span>© {new Date().getFullYear()} {BRAND}</span>
      <span>Кемерово, ул. Радищева, 1Г</span>
    </div>
  </footer>
);

export default Footer;