import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { IMG, PHONE_HREF } from "./data";

const ITEMS = [
  {
    icon: "Droplets",
    title: "Мойка самообслуживания",
    text: "Помойте машину сами, когда удобно: вода под давлением, активная пена, воск и осмос без разводов.",
  },
  {
    icon: "ArrowDownToLine",
    title: "Мойка днища и рамы",
    text: "Смоем грязь, песок и реагенты с днища, арок и рамы, чтобы металл не ржавел.",
  },
  {
    icon: "ShieldCheck",
    title: "Антикоррозионная обработка",
    text: "Покроем днище, арки и скрытые полости защитным составом от ржавчины и сибирских реагентов.",
  },
  {
    icon: "Sparkles",
    title: "Глубокая полировка кузова",
    text: "Уберём мелкие царапины, паутинку и тусклость, вернём лаку глубину и блеск.",
  },
  {
    icon: "SprayCan",
    title: "Санитарная обработка",
    text: "Обработаем салон и кондиционер от бактерий и запахов, чтобы в машине было свежо.",
  },
  {
    icon: "Armchair",
    title: "Химчистка салона",
    text: "Почистим сиденья, потолок, ковры и пластик. Уберём пятна, пыль и въевшуюся грязь.",
  },
];

const CarCare = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="care" ref={ref} className="grain bg-background px-5 py-20 md:px-[122px] md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <div className="reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Мойка и уход</p>
          <h2 className="font-head text-4xl font-semibold uppercase leading-[1.05] text-foreground md:text-6xl">
            Чистая машина
            <br />
            <span className="text-primary">снаружи и внутри</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Пока меняем колёса, можно помыть машину, защитить кузов от ржавчины или почистить салон. Всё в одном месте, без
            лишних поездок.
          </p>
        </div>
        <div className="reveal aspect-[16/9] overflow-hidden">
          <img src={IMG.wash} alt="Мойка автомобиля" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((s, i) => (
          <article
            key={s.title}
            className="reveal group bg-card p-8 transition-colors hover:bg-secondary"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon name={s.icon} fallback="Car" size={22} />
            </span>
            <h3 className="mt-6 font-head text-2xl font-semibold uppercase text-foreground transition-colors group-hover:text-secondary-foreground">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-secondary-foreground/75">
              {s.text}
            </p>
          </article>
        ))}
      </div>

      <div className="reveal mt-10 flex flex-wrap items-center gap-5">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition hover:brightness-110"
        >
          <Icon name="Phone" size={16} /> Узнать цену и записаться
        </a>
        <span className="text-sm text-muted-foreground">Стоимость зависит от размера машины, назовём по телефону</span>
      </div>
    </section>
  );
};

export default CarCare;
