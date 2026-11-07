import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { ADDRESS, HOURS, MAP_SRC, PHONE_DISPLAY, PHONE_HREF, ROUTE_HREF } from "./data";

const ROWS = [
  { icon: "MapPin", label: "Адрес", value: ADDRESS },
  { icon: "Clock", label: "Часы работы", value: HOURS },
  { icon: "Phone", label: "Телефон", value: PHONE_DISPLAY, href: PHONE_HREF },
];

const Contacts = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="contacts" ref={ref} className="grain bg-background">
      <div className="grid lg:grid-cols-[1fr_1.4fr]">
        <div className="px-5 py-20 md:py-28 md:pl-[122px] md:pr-14">
          <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Контакты</p>
          <h2 className="reveal font-head text-4xl font-semibold uppercase leading-[1.05] text-foreground md:text-6xl">
            Ждём на Радищева
          </h2>
          <ul className="mt-12 space-y-7">
            {ROWS.map((r) => (
              <li key={r.label} className="reveal flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon name={r.icon} size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.label}</p>
                  {r.href ? (
                    <a href={r.href} className="mt-1 block font-head text-2xl font-semibold text-foreground hover:text-primary">
                      {r.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-head text-2xl font-semibold text-foreground">{r.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="reveal mt-12 flex flex-wrap gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition hover:brightness-110"
            >
              <Icon name="Phone" size={16} /> Позвонить
            </a>
            <a
              href={ROUTE_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-secondary transition hover:bg-secondary hover:text-secondary-foreground"
            >
              <Icon name="Navigation" size={16} /> Маршрут в 2ГИС
            </a>
          </div>
        </div>
        <div className="relative min-h-[420px] border-t-4 border-secondary lg:border-l-4 lg:border-t-0">
          <iframe
            title="Карта: шиномонтаж на Радищева, 1Г"
            src={MAP_SRC}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;