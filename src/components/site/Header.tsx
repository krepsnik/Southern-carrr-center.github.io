import { useState } from "react";
import Icon from "@/components/ui/icon";
import { BRAND, NAV, PHONE_DISPLAY, PHONE_HREF } from "./data";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="flex h-[22px] items-center justify-center bg-primary px-4 text-center text-[11px] font-semibold text-primary-foreground">
        Сезонная переобувка — без очереди по записи
      </div>
      <div className="flex h-[66px] items-center gap-6 bg-secondary px-5 text-secondary-foreground md:px-[50px]">
        <a href="#top" className="font-head text-lg sm:text-[22px] xl:text-[26px] font-semibold uppercase leading-none tracking-[0.02em]">
          {BRAND}
        </a>
        <nav className="mx-auto hidden gap-[22px] text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="story-link">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-semibold sm:flex"
            aria-label="Позвонить"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary-foreground">
              <Icon name="Phone" size={14} />
            </span>
            {PHONE_DISPLAY}
          </a>
          <a
            href={PHONE_HREF}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-secondary-foreground sm:hidden"
            aria-label="Позвонить"
          >
            <Icon name="Phone" size={16} />
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            <Icon name={open ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="animate-fade-in border-t border-secondary-foreground/15 bg-secondary px-5 pb-6 pt-2 text-secondary-foreground lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-secondary-foreground/10 py-3 font-head text-xl uppercase"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;